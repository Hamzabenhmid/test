import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import DriverInfo from './components/Driverinfo'; // Ensure the file name matches
import RideDetails from './components/RideDetails';
import Rides from './components/Rides';
import UserLocation from './components/UserLocation';



// Uncomment and import Title if you have this component
// import Title from './components/Title';

function Home() {
  const navigate = useNavigate();

  return (
    <>
      {/* Uncomment Title component if you have it */}
      {/* <Title /> */}
      <header className="hero">
        <div className="hero-content">
          <h1>Welcome to Covoiturage</h1>
          <p>Share your ride, save money, and reduce your carbon footprint.</p>
          <button className="cta-button" onClick={() => navigate('/driver-info')}>Add ride</button>
          <button className="cta-button" onClick={() => navigate('/user-location')}>Put your location</button>
          <button className="cta-button" onClick={() => navigate('/rides')}>Show all rides</button>
        </div>
      </header>
      <section id="features" className="features">
        <div className="feature">
          <img src="data:image/jpeg;base64,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" alt="Easy to Use" />
          <h2>Easy to Use</h2>
          <p>Quickly find and share rides with our user-friendly interface.</p>
        </div>
        <div className="feature">
          <img src="data:image/png;base64,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" alt="Secure" />
          <h2>Secure</h2>
          <p>Verified users and secure payments ensure a safe experience.</p>
        </div>
        <div className="feature">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQflMxvZw43eHW9NeiruppLGfrl66b-Dws7JQ&s" alt="Eco-Friendly" />
          <h2>Eco-Friendly</h2>
          <p>Help reduce traffic and pollution by carpooling.</p>
        </div>
      </section>
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>About Us</h3>
            <p>Covoiturage is committed to providing an easy and secure way to share rides and contribute to a greener planet.</p>
          </div>
          <div className="footer-section">
            <h3>Contact</h3>
            <p>Email: support@covoiturage.com</p>
            <p>Phone: +123 456 7890</p>
            <p>Address: 123 Covoiturage Street, City, Country</p>
          </div>
          <div className="footer-section">
            <h3>Follow Us</h3>
            <ul className="social-media">
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">LinkedIn</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Navigation</h3>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/driver-info">Add Ride</a></li>
              <li><a href="/user-location">Put Your Location</a></li>
              <li><a href="/rides">Show All Rides</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Covoiturage. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/driver-info" element={<DriverInfo />} />
      <Route path="/ride-details" element={<RideDetails />} />
      <Route path="/rides" element={<Rides />} />
      <Route path="/user-location" element={<UserLocation />} />
    </Routes>
  );
}

export default App;
