import React, { useState, useEffect } from 'react';
import image1 from '../assets/images/Heritage/Ditsong-Museum1.png'; 
import image2 from '../assets/images/Heritage/Fort_Klapperkop_Pretoria.jpg';
import image3 from '../assets/images/Heritage/TownHall.png';
import image4 from '../assets/images/Heritage/burgersPark.png'; 
import image5 from '../assets/images/Heritage/churchSquare.png';
import image6 from '../assets/images/Heritage/theatre.png';
import '../assets/Componentcss/AboutUs.css'; 

const AboutUs = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0); 
    const images = [image1, image2, image3, image4, image5, image6]; 

    useEffect(() => {
        const imageInterval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); 

        return () => clearInterval(imageInterval); 
    }, [images.length]);

    return (
        <section className="about-us" id='aboutUs'>
            <div className="about-us-container">
                <div className="about-us-image">
                    <img src={images[currentImageIndex]} alt="PeliQuest System" />
                </div>
                <div className="about-us-content">
                    <h2 className="about-us-heading">About PeliQuest</h2>
                    <p className="about-us-paragraph">
                        PeliQuest is an innovative digital booking system designed to streamline municipal services and enhance community engagement. 
                    </p>
                    <p className="about-us-paragraph">
                        Our system allows users to easily check availability for various services, book appointments, and make payments all in one place. 
                        With a focus on user experience, PeliQuest is committed to making municipal services more accessible to everyone. 
                    </p>
                    <p className="about-us-paragraph">
                        Explore our platform to discover all the features that can benefit you and your community! From scheduling town hall reservations to museum visits, PeliQuest aims to simplify the process and ensure that every user has a seamless experience. 
                    </p>
                    <p className="about-us-paragraph">
                        Join us in transforming the way municipal services are accessed and enjoyed, fostering a sense of community and participation in local governance. Your feedback and participation are vital as we strive to improve and expand our offerings. 
                    </p>
                    
                    {/* New Locations Section */}
                    <h3 className="locations-heading">Key Locations</h3>
                    <ul className="locations-list">
                        <li><strong>Burgers Park:</strong> Corner of Andries and Jacob Maré Streets, Pretoria Central</li>
                        <li><strong>Church Square:</strong> Crossing Church and Paul Kruger Streets, Pretoria</li>
                        <li><strong>City Hall:</strong> Corner of Visagie and Paul Kruger Streets</li>
                        <li><strong>Union Buildings:</strong> Church Street, Pretoria Central</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
