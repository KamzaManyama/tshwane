import  { useState } from 'react';
import '../Componentcss/RoutesPage.css';
import image1 from '../../assets/images/Heritage/Ditsong-Museum1.png';
import image2 from '../../assets/images/Heritage/Fort_Klapperkop_Pretoria.jpg';
import image3 from '../../assets/images/Heritage/TownHall.png';


const attractions = [
    {
        id: 1,
        name: 'Union Buildings',
        description: 'The seat of the South African government and the official residence of the President of South Africa. Features beautiful terraced gardens and spectacular architecture.',
        imageUrl: image1,
        link: '#',
        location: 'Government Avenue, Pretoria',
        openingHours: 'Gardens: 8:00 - 18:00 daily',
        entryFee: 'Free entry to gardens'
    },
    {
        id: 2,
        name: 'Voortrekker Monument',
        description: 'A massive granite structure commemorating the Voortrekker pioneers. Features a museum, hiking trails, and panoramic city views.',
        imageUrl: image2,
        link: '#',
        location: 'Eeufees Road, Groenkloof',
        openingHours: '8:00 - 17:00 daily',
        entryFee: 'R180 for adults, R90 for children'
    },
    {
        id: 3,
        name: 'Pretoria National Botanical Garden',
        description: 'A 76-hectare urban oasis featuring themed gardens, walking trails, and indigenous plants.',
        imageUrl: image3,
        link: '#',
        location: '2 Cussonia Avenue, Brummeria',
        openingHours: '8:00 - 18:00 daily',
        entryFee: 'R45 for adults, R25 for children'
    }
];

const busRoutes = [
    {
        id: 1,
        name: 'A Re Yeng T1',
        from: 'CBD',
        to: 'Hatfield',
        schedule: 'Every 15 minutes (peak), Every 30 minutes (off-peak)',
        fare: 'R8.50 - R15.50',
        stops: ['Church Square', 'Pretoria Station', 'CSIR', 'University of Pretoria', 'Hatfield Gautrain']
    },
    {
        id: 2,
        name: 'A Re Yeng T2',
        from: 'Rainbow Junction',
        to: 'Menlyn',
        schedule: 'Every 20 minutes (peak), Every 40 minutes (off-peak)',
        fare: 'R9.50 - R16.50',
        stops: ['Rainbow Junction', 'Steve Biko Hospital', 'Loftus Versfeld', 'Brooklyn Mall', 'Menlyn Mall']
    },
    {
      id: 3,
      name: 'A Re Yeng T1',
      from: 'CBD',
      to: 'Hatfield',
      schedule: 'Every 15 minutes (peak), Every 30 minutes (off-peak)',
      fare: 'R8.50 - R15.50',
      stops: ['Church Square', 'Pretoria Station', 'CSIR', 'University of Pretoria', 'Hatfield Gautrain']
  },
  {
      id: 4,
      name: 'A Re Yeng T2',
      from: 'Rainbow Junction',
      to: 'Menlyn',
      schedule: 'Every 20 minutes (peak), Every 40 minutes (off-peak)',
      fare: 'R9.50 - R16.50',
      stops: ['Rainbow Junction', 'Steve Biko Hospital', 'Loftus Versfeld', 'Brooklyn Mall', 'Menlyn Mall']
  }
];

function TshwaneTourism() {
    const [activeTab, setActiveTab] = useState('attractions');

    return (
        <div className="tourism-page">
            <header className="header">
                <h1>Welcome to Tshwane</h1>
                <p>Discover the beauty and history of South Africa's administrative capital</p>
            </header>
            <nav className="navigation">
                <button
                    className={`nav-button ${activeTab === 'attractions' ? 'active' : ''}`}
                    onClick={() => setActiveTab('attractions')}
                >
                    Tourist Attractions
                </button>
                <button
                    className={`nav-button ${activeTab === 'transport' ? 'active' : ''}`}
                    onClick={() => setActiveTab('transport')}
                >
                    Bus Routes
                </button>
            </nav>
            <main className="main-content">
                {activeTab === 'attractions' ? (
                    <section className="attractions-section">
                        <div className="attractions-grid">
                            {attractions.map(attraction => (
                                <div key={attraction.id} className="attraction-card">
                                    <div className="card-image">
                                        <img src={attraction.imageUrl} alt={attraction.name} />
                                    </div>
                                    <div className="card-content">
                                        <h3>{attraction.name}</h3>
                                        <p className="description">{attraction.description}</p>
                                        <div className="details">
                                            <p><strong>Location: </strong>{attraction.location}</p>
                                            <p><strong>Hours: </strong>{attraction.openingHours}</p>
                                            <p><strong>Entry: </strong>{attraction.entryFee}</p>
                                        </div>
                                        <a href={attraction.link} className="learn-more">Learn More</a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                ) : (
                    <section className="transport-section">
                        <div className="routes-container">
                            {busRoutes.map(route => (
                                <div key={route.id} className="route-card">
                                    <h3>{route.name}</h3>
                                    <div className="route-details">
                                        <p><strong>From: </strong>{route.from}</p>
                                        <p><strong>To: </strong>{route.to}</p>
                                        <p><strong>Schedule: </strong>{route.schedule}</p>
                                        <p><strong>Fare: </strong>{route.fare}</p>
                                    </div>
                                    <div className="stops-list">
                                        <h4>Stops:</h4>
                                        <ul>
                                            {route.stops.map((stop, index) => (
                                                <li key={index}>{stop}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                )}
            </main>
            <footer className="footer">
                <p>&copy; 2024 Tshwane Tourism. All Rights Reserved.</p>
            </footer>
        </div>
    );
}

export default TshwaneTourism;
