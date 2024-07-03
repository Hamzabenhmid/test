import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './UserLocation.css';

function UserLocation() {
  const [location, setLocation] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('userLocation', location);
    navigate('/rides');
  };

  return (
    <div className="user-location-container">
      <div className="hero-small">
        <div className="hero-content-small">
          <h1>Find Your Ride</h1>
          <p>Enter your location to see available carpool options near you.</p>
        </div>
      </div>
      <div className="form-container">
        <h2>Enter Your Location</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Location:
            <input 
              type="text" 
              value={location} 
              onChange={(e) => setLocation(e.target.value)} 
              required 
            />
          </label>
          <button type="submit">Find Rides</button>
        </form>
      </div>
    </div>
  );
}

export default UserLocation;
