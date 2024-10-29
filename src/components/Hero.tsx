import React from 'react';
import '../assets/Componentcss/Hero.css'; 

const HeroSection: React.FC = () => {
    return (
        <section className="hero-section">
            <div className="hero-content">
                <h1 className="hero-header">Discover the Wonders of Tshwane</h1>
                <p className="hero-paragraph">
                Discover a world of convenience with seamless bookings for essential municipal services, while uncovering hidden cultural gems that enrich our vibrant community. Engage in thrilling city-wide events that celebrate the spirit of Tshwane. Join us in exploring the rich heritage and dynamic offerings of our city where every interaction opens doors to new connections, experiences, and opportunities to thrive. Dive in and be part of our community today
                </p>
                <div className="hero-buttons">
                    <a href='/login' className="btn get-started">Get Started</a>
                    <a href="#learn-more" className="btn learn-more">Learn More</a>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
