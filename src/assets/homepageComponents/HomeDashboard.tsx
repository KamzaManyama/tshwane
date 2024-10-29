import React, { useState } from 'react';
import { Bell, UserCircle, Landmark, Calendar, MapPin, Camera, Clock } from 'lucide-react';
import '../Componentcss/LandingHomePage.css'; // Importing the CSS file

const TshwaneDashboard: React.FC = () => {
  const [language, setLanguage] = useState<string>('en');

  const featuredSites = [
    { name: "Union Buildings", description: "National heritage site and seat of government", distance: "4.2 km", rating: 4.8 },
    { name: "Freedom Park", description: "Memorial celebrating South Africa's heritage", distance: "6.1 km", rating: 4.6 },
    { name: "Voortrekker Monument", description: "Historical monument and nature reserve", distance: "7.3 km", rating: 4.7 },
  ];

  const upcomingEvents = [
    { name: "Heritage Day Festival", location: "Church Square", date: "24 Sept", type: "Cultural" },
    { name: "Jazz in the Park", location: "Freedom Park", date: "30 Oct", type: "Music" },
    { name: "Art Exhibition", location: "Pretoria Art Museum", date: "15 Nov", type: "Art" },
  ];

  return (
    <div className="dashboard-container">
      {/* Header */}
      <header className="dashboard-header">
        <div className="header-left">
          <div className="badge">
            <Camera className="icon" />
            <span className="badge-text">Level 3 Explorer</span>
          </div>
          <span className="points-badge">★ 250 Points</span>
        </div>
        <div className="header-right">
          <Bell className="icon" />
          <UserCircle className="icon" />
          <select value={language} onChange={(e) => setLanguage(e.target.value)} className="language-select">
            <option value="en">Language</option>
            <option value="af">Afrikaans</option>
            <option value="zu">isiZulu</option>
            <option value="nso">Sepedi</option>
            <option value="tsn">Setswana</option>
          </select>
        </div>
      </header>

      {/* Welcome Section */}
      <section className="welcome-section">
        <h1 className="welcome-title">Welcome to Tshwane Heritage Explorer</h1>
        <p className="welcome-description">Discover the rich history and cultural treasures of South Africa's capital city</p>
        <div className="welcome-buttons">
          <button className="button start-tour">
            Start Virtual Tour <Camera className="icon" />
          </button>
          <button className="button guide-map">
            View Guide Map
          </button>
        </div>
      </section>

      {/* Main Grid */}
      <div className="grid-container">
        {/* Featured Heritage Sites */}
        <div className="featured-sites">
          <h2 className="section-title">
            <Landmark className="icon" /> Featured Heritage Sites
          </h2>
          <div className="site-list">
            {featuredSites.map((site, index) => (
              <div key={index} className="site-card">
                <img
                  src={`https://maps.app.goo.gl/X6CCotwtRnBWTXvF6`} // Placeholder image URL, replace with actual URL
                  alt={site.name}
                  className="site-image"
                />
                <div className="site-info">
                  <h3 className="site-name">{site.name}</h3>
                  <p className="site-description">{site.description}</p>
                  <div className="site-details">
                    <span className="site-rating">★ {site.rating}</span>
                    <span className="separator">•</span>
                    <span className="site-distance"><MapPin className="icon" /> {site.distance}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="upcoming-events">
          <h2 className="section-title">
            <Calendar className="icon" /> Upcoming Events
          </h2>
          <div className="event-list">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="event-card">
                <div className="event-header">
                  <h4 className="event-name">{event.name}</h4>
                  <span className="event-type">{event.type}</span>
                </div>
                <div className="event-details">
                  <Clock className="icon" />
                  <span>{event.date}</span>
                  <span className="separator">•</span>
                  <MapPin className="icon" />
                  <span>{event.location}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="view-all">
            <button className="button view-all-button">View All Events</button>
          </div>
        </div>
      </div>

      {/* Quick Actions Grid */}
      <div className="quick-actions">
        {[
          { icon: <Camera className="icon" />, title: "Virtual Tours", desc: "Explore sites virtually" },
          { icon: <Clock className="icon" />, title: "Heritage Routes", desc: "Curated cultural paths" },
          { icon: <MapPin className="icon" />, title: "Plan Visit", desc: "Create your itinerary" },
          { icon: <UserCircle className="icon" />, title: "Achievements", desc: "Track your progress" }
        ].map((action, index) => (
          <div key={index} className="quick-action-card">
            {action.icon}
            <h5 className="quick-action-title">{action.title}</h5>
            <p className="quick-action-desc">{action.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TshwaneDashboard;
