// src/Footer.tsx
import React from 'react';
import '../assets/Componentcss/Footer.css';

const Footer: React.FC = () => {
    return (
        <footer className="footer-container">
            <div className="footer-content">
                <div className="footer-section">
                    <h3>Contact Us</h3>
                    <p>Email: <a href="mailto:info@peliquest.co.za">info@peliquest.co.za</a></p>
                    <p>Phone: <a href="tel:+27123456789">+27 12 345 6789</a></p>
                    <p>Address: 123 PeliQuest St, Tshwane, South Africa</p>
                </div>
                <div className="footer-section">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="#aboutUs">About Us</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#contactUs">Contact Us</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>Follow Us</h3>
                    <div className="social-links">
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} PeliQuest Tshwane. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
