import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import firebaseConfig from '../javascript/firebaseConfig'; 
import '../assets/Componentcss/Register.css';

// Initialize Firebase app outside of the component to avoid re-initialization on each render
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const SignUp: React.FC = () => {
    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [contact, setContact] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setError('Passwords do not match.');
            return;
        }

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            await setDoc(doc(db, "users", user.uid), {
                firstName,
                lastName,
                contact,
                email
            });

            console.log('User saved to database:', { firstName, lastName, contact, email });

            navigate('/login');
        } catch (error: any) {
            setError("Error creating user: " + error.message);
            console.error("Error creating user: ", error);
        }
    };

    return (
        <div className="signup-container">
            <div className="signup-wrapper">
                <div className="signup-branding">
                    <img src='https://www.tshwane.gov.za/wp-content/uploads/2017/05/contttttt-1.png' alt="PeliQuest Tshwane Logo" className="logo" />
                    <h1>Create Your Account</h1>
                    <p>Join PeliQuest Tshwane today!</p>
                </div>

                <form onSubmit={handleSubmit} className="signup-form">
                    <div className="input-group">
                        <input type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
                    </div>
                    <div className="input-group">
                        <input type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
                    </div>
                    <div className="input-group">
                        <input type="text" placeholder="Contact Number" value={contact} onChange={(e) => setContact(e.target.value)} required />
                    </div>
                    <div className="input-group">
                        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <div className="input-group">
                        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    </div>
                    <div className="input-group">
                        <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
                    </div>
                    {error && <p className="error-message">{error}</p>}
                    <button type="submit" className="signup-button">Sign Up</button>
                    <div className="login-prompt">
                        <p>Already have an account? <Link to="/login">Log In</Link></p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
