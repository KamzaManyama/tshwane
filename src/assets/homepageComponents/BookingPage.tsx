import React, { useState } from 'react';
import { Calendar, Clock, Users, Map, CreditCard, Bot} from 'lucide-react';
import '../Componentcss/BookingPage.css';

interface PointOfInterest {
  id: number;
  name: string;
  description: string;
  price: number;
}

interface PaymentMethod {
  id: string;
  name: string;
}

const BookingPage: React.FC = () => {
  const [formData, setFormData] = useState<{
    selectedPoint: string;
    tourType: 'single' | 'group';
    groupSize: string;
    date: string;
    time: string;
    aiGuide: boolean;
    paymentMethod: string;
    specialRequests: string;
    language: string;
  }>({
    selectedPoint: '',
    tourType: 'single',
    groupSize: '1',
    date: '',
    time: '',
    aiGuide: false,
    paymentMethod: '',
    specialRequests: '',
    language: 'english',
  });

  const pointsOfInterest: PointOfInterest[] = [
    { id: 1, name: 'Union Buildings', description: 'Historical government seat with panoramic city views', price: 350 },
    { id: 2, name: 'Voortrekker Monument', description: 'Massive granite structure commemorating the Pioneer history', price: 300 },
    { id: 3, name: 'Pretoria Botanical Gardens', description: 'Beautiful gardens featuring indigenous plants', price: 250 },
  ];

  const paymentMethods: PaymentMethod[] = [
    { id: 'ozow', name: 'Ozow Instant EFT' },
    { id: 'card', name: 'Credit/Debit Card' },
    { id: 'paypal', name: 'PayPal' },
  ];

  const languages = ['English', 'Afrikaans', 'Zulu', 'Xhosa', 'Spanish', 'French', 'German'];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;

    // Use type guard to check if the target is an HTMLInputElement
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const calculateTotal = () => {
    const basePrice = pointsOfInterest.find((p) => p.name === formData.selectedPoint)?.price || 0;
    const groupMultiplier = formData.tourType === 'group' ? Number(formData.groupSize) : 1;
    const aiGuidePrice = formData.aiGuide ? 150 : 0;
    return (basePrice * groupMultiplier + aiGuidePrice).toFixed(2);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Booking submitted:', formData);
    // Handle payment processing here
  };

  return (
    <div className="booking-page">
      <div className="booking-container">
        <div className="booking-card">
          <div className="booking-header">
            <h1 className="booking-title">Book Your Pretoria Tour Experience</h1>
            <p className="booking-subtitle">
              Discover the beauty and history of Pretoria with our guided tours
            </p>
          </div>
          
          <div className="booking-content">
            <form onSubmit={handleSubmit} className="booking-form">
              {/* Destination Selection */}
              <div className="form-section">
                <label className="form-label">
                  <Map className="icon" />
                  Select Destination
                </label>
                <div className="destinations-grid">
                  {pointsOfInterest.map((point) => (
                    <div
                      key={point.id}
                      className={`destination-card ${formData.selectedPoint === point.name ? 'selected' : ''}`}
                      onClick={() => handleInputChange({
                        target: { name: 'selectedPoint', value: point.name } as HTMLInputElement,
                      } as React.ChangeEvent<HTMLInputElement>)}
                    >
                      <h3>{point.name}</h3>
                      <p>{point.description}</p>
                      <p className="price">R{point.price}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tour Type & Group Size */}
              <div className="form-grid">
                <div className="form-section">
                  <label className="form-label">
                    <Users className="icon" />
                    Tour Type
                  </label>
                  <div className="radio-group">
                    {['single', 'group'].map((type) => (
                      <label key={type} className="radio-label">
                        <input
                          type="radio"
                          name="tourType"
                          value={type}
                          checked={formData.tourType === type}
                          onChange={handleInputChange}
                        />
                        <span>{type}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {formData.tourType === 'group' && (
                  <div className="form-section">
                    <label className="form-label">Group Size</label>
                    <input
                      type="number"
                      name="groupSize"
                      value={formData.groupSize}
                      onChange={handleInputChange}
                      min="2"
                      max="20"
                      className="form-input"
                    />
                  </div>
                )}
              </div>

              {/* Date and Time */}
              <div className="form-grid">
                <div className="form-section">
                  <label className="form-label">
                    <Calendar className="icon" />
                    Date
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    className="form-input"
                    required
                  />
                </div>
                <div className="form-section">
                  <label className="form-label">
                    <Clock className="icon" />
                    Time
                  </label>
                  <select
                    name="time"
                    value={formData.time}
                    onChange={handleInputChange}
                    className="form-input"
                    required
                  >
                    <option value="">Select a time</option>
                    <option value="09:00">09:00 AM</option>
                    <option value="11:00">11:00 AM</option>
                    <option value="14:00">02:00 PM</option>
                    <option value="16:00">04:00 PM</option>
                  </select>
                </div>
              </div>

              {/* AI Guide Option */}
              <div className="ai-guide-section">
                <div className="ai-guide-checkbox">
                  <input
                    type="checkbox"
                    name="aiGuide"
                    checked={formData.aiGuide}
                    onChange={handleInputChange}
                    id="aiGuide"
                  />
                  <label htmlFor="aiGuide" className="form-label">
                    <Bot className="icon" />
                    Add AI Tour Guide (+R150)
                  </label>
                </div>
                <p className="ai-guide-description">
                  Get personalized insights and interactive guidance through our AI assistant
                </p>
              </div>

              {formData.aiGuide && (
                <div className="form-section">
                  <label className="form-label">Preferred Language</label>
                  <select
                    name="language"
                    value={formData.language}
                    onChange={handleInputChange}
                    className="form-input"
                  >
                    {languages.map(lang => (
                      <option key={lang.toLowerCase()} value={lang.toLowerCase()}>
                        {lang}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              {/* Payment Section */}
              <div className="payment-section">
                <h3 className="section-title">
                  <CreditCard className="icon" />
                  Payment Details
                </h3>
                <div className="payment-options">
                  {paymentMethods.map((method) => (
                    <label key={method.id} className="payment-option">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value={method.id}
                        checked={formData.paymentMethod === method.id}
                        onChange={handleInputChange}
                      />
                      <span>{method.name}</span>
                    </label>
                  ))}
                </div>
                <textarea
                  name="specialRequests"
                  placeholder="Special Requests"
                  value={formData.specialRequests}
                  onChange={handleInputChange}
                  className="form-input"
                />
              </div>

              {/* Total Price Display */}
              <div className="total-price">
                <h4>Total Price: R{calculateTotal()}</h4>
              </div>

              {/* Submit Button */}
              <button type="submit" className="btn">
                Confirm Booking
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
