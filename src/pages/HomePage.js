import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'; // Optional: Add custom styles for the homepage

const HomePage = () => {
  return (
    <div className="home-page">
      <h1>Welcome to the Personal Finance App</h1>
      <p>Manage your finances efficiently with our dashboard and reports.</p>
      
      <div className="links">
        <Link to="/dashboard" className="btn">Go to Dashboard</Link>
        <Link to="/reports" className="btn">View Reports</Link>
      </div>
    </div>
  );
};

export default HomePage;
