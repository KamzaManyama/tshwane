// src/ContactUs.tsx
import React, { useState } from 'react';
import '../assets/Componentcss/Contact.css';

const ContactUs: React.FC = () => {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const [formMessage, setFormMessage] = useState<string>('');

    const validateForm = (): boolean => {
        if (!name || !email || !message) {
            setFormMessage('Please fill in all fields.');
            return false;
        }
        setFormMessage('');
        return true;
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        if (validateForm()) {
            setFormMessage('Thank you for your message! We will get back to you soon.');
            setName('');
            setEmail('');
            setMessage('');
        }
    };

    return (
        <div className="contact-container" id='contactUs'>
            <header className="contact-header">
                <h1>Contact Us</h1>
            </header>

            <div className="contact-layout">
                <section className="contact-info">
                    <h2>Get in Touch</h2>
                    <p>If you have any questions, feel free to reach out to us!</p>
                    <ul>
                        <li><strong>Email:</strong> <a href="mailto:info@peliquest.co.za">info@peliquest.co.za</a></li>
                        <li><strong>Phone:</strong> <a href="tel:+27123456789">+27 12 345 6789</a></li>
                        <li><strong>Address:</strong> 123 PeliQuest St, Tshwane, South Africa</li>
                    </ul>
                    <h2>Our Location</h2>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.015126802138!2d28.18323621507131!3d-25.74611158388305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ebbdc64b6236411%3A0xd163354a1c4e5b1!2sTshwane!5e0!3m2!1sen!2sza!4v1638749817554!5m2!1sen!2sza"
                        width="100%"
                        height="500"
                        style={{ border: 0, borderRadius: '8px' }}
                        allowFullScreen
                        loading="lazy"
                    ></iframe>
                </section>

                <section className="contact-form">
                    <h2>Contact Form</h2>
                    <img
                        src="https://www.tshwane.gov.za/wp-content/uploads/2017/05/contttttt-1.png"
                        alt="Contact Location"
                        className="location-image"
                    />
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />

                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />

                        <label htmlFor="message">Message:</label>
                        <textarea
                            id="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            rows={5}
                            required
                        ></textarea>

                        <button type="submit">Send Message</button>
                    </form>
                    {formMessage && <p className="form-message">{formMessage}</p>}
                </section>
            </div>
        </div>
    );
};

export default ContactUs;
