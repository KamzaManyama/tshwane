// src/components/Trailblazers.tsx
import React from 'react';
import image1 from '../assets/images/Heritage/Ditsong-Museum1.png'; 
import image2 from '../assets/images/Heritage/Fort_Klapperkop_Pretoria.jpg';
import image3 from '../assets/images/Heritage/TownHall.png';
import image4 from '../assets/images/Heritage/burgersPark.png'; 
import image5 from '../assets/images/Heritage/churchSquare.png';
import '../assets/Componentcss/trailblazers.css';

// Define the Participant type
interface Participant {
    id: number;
    name: string;
    image: string;
    quote: string;
    location: string; // Added location for more inclusivity
}

// Sample participant data
const participants: Participant[] = [
    {
        id: 1,
        name: 'Alice Johnson',
        image: image1, // Replace with actual image path
        quote: 'Exploring Tshwane was an amazing experience!',
        location: 'Pretoria Central',
    },
    {
        id: 2,
        name: 'Bob Smith',
        image: image2, // Replace with actual image path
        quote: 'Loved every challenge during the scavenger hunt!',
        location: 'Arcadia',
    },
    {
        id: 3,
        name: 'Charlie Brown',
        image: image3, // Replace with actual image path
        quote: 'A great way to connect with the community!',
        location: 'Hatfield',
    },
    {
        id: 4,
        name: 'Dineo Mthembu',
        image: image4, // Replace with actual image path
        quote: 'The scavenger hunt brought us all together!',
        location: 'Menlyn',
    },
    {
        id: 5,
        name: 'Sipho Nkosi',
        image: image5, // Replace with actual image path
        quote: 'Tshwane has so many hidden gems to discover!',
        location: 'Brooklyn',
    },
    {
        id: 5,
        name: 'Sipho Nkosi',
        image: image5, // Replace with actual image path
        quote: 'Tshwane has so many hidden gems to discover!',
        location: 'Brooklyn',
    },
    {
        id: 5,
        name: 'Sipho Nkosi',
        image: image5, // Replace with actual image path
        quote: 'Tshwane has so many hidden gems to discover!',
        location: 'Brooklyn',
    },
    {
        id: 2,
        name: 'Bob Smith',
        image: image2, // Replace with actual image path
        quote: 'Loved every challenge during the scavenger hunt!',
        location: 'Arcadia',
    },
    {
        id: 3,
        name: 'Charlie Brown',
        image: image3, // Replace with actual image path
        quote: 'A great way to connect with the community!',
        location: 'Hatfield',
    },
    {
        id: 4,
        name: 'Dineo Mthembu',
        image: image4, // Replace with actual image path
        quote: 'The scavenger hunt brought us all together!',
        location: 'Menlyn',
    },
    {
        id: 5,
        name: 'Sipho Nkosi',
        image: image5, // Replace with actual image path
        quote: 'Tshwane has so many hidden gems to discover!',
        location: 'Brooklyn',
    },
    {
        id: 5,
        name: 'Sipho Nkosi',
        image: image5, // Replace with actual image path
        quote: 'Tshwane has so many hidden gems to discover!',
        location: 'Brooklyn',
    },
    {
        id: 5,
        name: 'Sipho Nkosi',
        image: image5, // Replace with actual image path
        quote: 'Tshwane has so many hidden gems to discover!',
        location: 'Brooklyn',
    },
    
];

const Trailblazers: React.FC = () => {
    return (
        <section className="trailblazers" id='trailblazers'>
            <h2>Trailblazers of the Tshwane Scavenger Hunt</h2>
            <div className="trailblazer-gallery">
                {participants.map((participant) => (
                    <div key={participant.id} className="trailblazer-card">
                        <img src={participant.image} alt={participant.name} />
                        <h3>{participant.name}</h3>
                        <p className="quote">“{participant.quote}”</p>
                        <p><strong>Location:</strong> {participant.location}</p> {/* Display participant location */}
                    </div>
                ))}
            </div>
            <div className="social-media">
                <h3>Share Your Adventure!</h3>
                <p>Use the hashtag <strong>#TshwaneTrailblazers</strong> to share your photos and stories!</p>
            </div>
        </section>
    );
};

export default Trailblazers;
