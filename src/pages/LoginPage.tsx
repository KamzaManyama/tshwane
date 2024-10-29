import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/Componentcss/Login.css';


const Login: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [rememberMe, setRememberMe] = useState<boolean>(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Authentication logic here
        console.log('Logged in:', { email, password, rememberMe });
    };

    return (
        <div className="login-container">
            <div className="login-wrapper">
                <div className="login-branding">
                    <img src='https://www.tshwane.gov.za/wp-content/uploads/2017/05/contttttt-1.png' alt="PeliQuest Tshwane Logo" className="logo" />
                    <h1>Welcome Back</h1>
                    <p>Login to your account</p>
                </div>

                <form onSubmit={handleSubmit} className="login-form">
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

                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            placeholder="Your password"
                        />
                    </div>

                    <div className="form-options">
                        <label>
                            <input
                                type="checkbox"
                                checked={rememberMe}
                                onChange={() => setRememberMe(!rememberMe)}
                            />{' '}
                            Remember Me
                        </label>
                        <Link to="/ForgotPassword" className="forgot-password-link">
                            Forgot Password?
                        </Link>
                    </div>

                    <button type="submit" className="login-button">
                        Log In
                    </button>

                    <div className="divider">
                        <span>or</span>
                    </div>

                    <button type="button"  className="google-login">
                        <img src="https://developers.google.com/identity/images/g-logo.png" alt="Google Logo" />
                        Sign in with Google
                    </button>
                </form>

                <div className="signup-prompt">
                    <p>
                        Don’t have an account? <Link to="/SignUp">Sign Up</Link>
                    </p>
                </div>

                <Link to="/HomePages" className="forgot-password-link">
                           welcome
                        </Link>
            </div>
        </div>
    );
};

export default Login;
