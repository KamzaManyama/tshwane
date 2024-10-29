import { useState } from 'react';
import { User, MapPin, Clock, Phone, Mail, Calendar } from 'lucide-react';
import '../Componentcss/User.css';

const UserProfilePage = () => {
  const [activeTab, setActiveTab] = useState('profile');

  const userInfo = {
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+27 12 345 6789",
    address: "123 Pretoria Street, Tshwane",
    memberSince: "January 2024"
  };

  const upcomingBookings = [
    {
      id: 1,
      service: "Swimming Pool",
      date: "2024-10-30",
      time: "14:00",
      location: "Pretoria North Recreation Center"
    },
    {
      id: 2,
      service: "Tennis Court",
      date: "2024-11-02",
      time: "10:00",
      location: "Centurion Sports Complex"
    }
  ];

  const pastBookings = [
    {
      id: 3,
      service: "Basketball Court",
      date: "2024-10-20",
      time: "16:00",
      location: "Tshwane Sports Ground"
    }
  ];

  return (
    <div className="profile-container">
      {/* Profile Header Card */}
      <div className="profile-card">
        <div className="profile-header">
          <div className="avatar-container">
            <User size={40} color="#2563eb" />
          </div>
          <div className="user-info">
            <h1 className="user-name">{userInfo.name}</h1>
            <p className="member-since">Member since {userInfo.memberSince}</p>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="tabs">
        <div className="tab-buttons">
          <button 
            className={`tab-button ${activeTab === 'profile' ? 'active' : ''}`}
            onClick={() => setActiveTab('profile')}
          >
            Profile Information
          </button>
          <button 
            className={`tab-button ${activeTab === 'bookings' ? 'active' : ''}`}
            onClick={() => setActiveTab('bookings')}
          >
            My Bookings
          </button>
        </div>

        {/* Profile Tab Content */}
        {activeTab === 'profile' && (
          <div className="profile-card tab-content">
            <div className="info-item">
              <Mail color="#666" size={20} />
              <span>{userInfo.email}</span>
            </div>
            <div className="info-item">
              <Phone color="#666" size={20} />
              <span>{userInfo.phone}</span>
            </div>
            <div className="info-item">
              <MapPin color="#666" size={20} />
              <span>{userInfo.address}</span>
            </div>
          </div>
        )}

        {/* Bookings Tab Content */}
        {activeTab === 'bookings' && (
          <div className="profile-card tab-content">
            {/* Upcoming Bookings */}
            <div className="bookings-section">
              <h2 className="section-title">Upcoming Bookings</h2>
              {upcomingBookings.map(booking => (
                <div key={booking.id} className="booking-card">
                  <h3 className="booking-title">{booking.service}</h3>
                  <div className="booking-details">
                    <Calendar size={16} />
                    <span>{booking.date}</span>
                    <Clock size={16} />
                    <span>{booking.time}</span>
                  </div>
                  <div className="booking-details">
                    <MapPin size={16} />
                    <span>{booking.location}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Past Bookings */}
            <div className="bookings-section">
              <h2 className="section-title">Past Bookings</h2>
              {pastBookings.map(booking => (
                <div key={booking.id} className="booking-card past-booking">
                  <h3 className="booking-title">{booking.service}</h3>
                  <div className="booking-details">
                    <Calendar size={16} />
                    <span>{booking.date}</span>
                    <Clock size={16} />
                    <span>{booking.time}</span>
                  </div>
                  <div className="booking-details">
                    <MapPin size={16} />
                    <span>{booking.location}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserProfilePage;
