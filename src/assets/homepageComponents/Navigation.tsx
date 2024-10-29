import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Home, MapPin, Calendar, User } from 'lucide-react';
import '../Componentcss/LndingNavigation.css';

const BottomNav = () => {
  const [activeTab, setActiveTab] = useState(0);

  const navItems = [
    { icon: Home, label: 'Home', path: '/HomePages' },
    { icon: MapPin, label: 'Routes', path: '/Routs' },
    { icon: Calendar, label: 'Booking', path: '/Booking' },
    { icon: User, label: 'User', path: '/User' }, 
  ];

  return (
    <div className="bottom-nav">
      {navItems.map((item, index) => {
        const Icon = item.icon;
        return (
          <Link
            key={index}
            to={item.path}
            onClick={() => setActiveTab(index)}
            className={`nav-item ${activeTab === index ? 'active' : ''}`}
          >
            <Icon className="nav-icon" />
            <span className="nav-label">{item.label}</span>
          </Link>
        );
      })}
    </div>
  );
};

export default BottomNav;
