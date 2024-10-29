import React, { useState } from 'react';
import '../assets/Componentcss/Services.css';
import image1 from '../assets/images/CardImages/Tshwane-bus-services.png'; 
import image2 from '../assets/images/CardImages/monument.png';
import image3 from '../assets/images/CardImages/points.png';
import image4 from '../assets/images/CardImages/scavenger.png'; 

interface Service {
  id: string;
  title: string;
  description: string;
  image: string; // Image will be a string URL
  details: string;
}

const servicesData: Service[] = [
  {
    id: 'transportation',
    title: 'Transportation',
    description: 'Reliable and comfortable transportation options for all your needs.',
    image: image1, 
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis accumsan arcu.',
  },
  {
    id: 'sightseeing',
    title: 'Sightseeing',
    description: 'Explore the city\'s best attractions with our guided tours.',
    image: image2,
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis accumsan arcu.',
  },
  {
    id: 'secret-location',
    title: 'Secret Location',
    description: 'Discover hidden gems and exclusive spots with our special packages.',
    image: image3, 
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis accumsan arcu.',
  },
  {
    id: 'point-system',
    title: 'Point System',
    description: 'Earn points with every service you use and redeem them for rewards.',
    image: image4, 
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis accumsan arcu.',
  },
];

const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const openModal = (service: Service) => {
    setSelectedService(service);
  };

  const closeModal = () => {
    setSelectedService(null);
  };

  return (
    <section className="services-section" id='services'>
        
      <h2 className="services-heading">Our Services</h2>
      <div className="services-container">
        {servicesData.map(service => (
          <div key={service.id} className="service-card">
            <img src={service.image} alt={service.title} className="service-image" />
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
            <button className="read-more-btn" onClick={() => openModal(service)}>Read More</button>
          </div>
        ))}
      </div>

      {selectedService && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <span className="close-btn" onClick={closeModal}>&times;</span>
            <h3>{selectedService.title} Details</h3>
            <p>{selectedService.details}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Services;
