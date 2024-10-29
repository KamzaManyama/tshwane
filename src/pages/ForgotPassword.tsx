import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/Componentcss/ForgotPassword.css';


const ForgotPassword: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [successMessage, setSuccessMessage] = useState<string | null>(null);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Basic email format validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setErrorMessage('Please enter a valid email address.');
            return;
        }

        // Send reset password logic (pseudo-code)
        const emailExists = true; // Replace this with actual check logic
        if (emailExists) {
            setSuccessMessage('Password reset link has been sent to your email.');
            setErrorMessage(null);
        } else {
            setErrorMessage('No account found with that email.');
            setSuccessMessage(null);
        }
    };

    return (
        <div className="forgot-password-container">
            <div className="forgot-password-wrapper">
                <div className="forgot-password-branding">
                    <img src='https://www.tshwane.gov.za/wp-content/uploads/2017/05/contttttt-1.png' alt="PeliQuest Tshwane Logo" className="logo" />
                    <h1>Forgot Your Password?</h1>
                    <p>Enter your email to reset your password.</p>
                </div>

                <form onSubmit={handleSubmit} className="forgot-password-form">
                    <div className="input-group">
                        <label htmlFor="email">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            placeholder="example@domain.com"
                        />
                    </div>

                    {errorMessage && <p className="error-message">{errorMessage}</p>}
                    {successMessage && <p className="success-message">{successMessage}</p>}

                    <button type="submit" className="forgot-password-button">
                        Send Reset Link
                    </button>

                    <div className="back-to-login">
                        <p>
                            <Link to="/login">Back to Login</Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ForgotPassword;
