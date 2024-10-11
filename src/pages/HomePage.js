import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="hero">
      <h1 className="hero-title">Welcome to the Personal Finance App</h1>
      <p className="hero-subtitle">Manage your finances, track expenses, and more.</p>
      <div className="hero-buttons">
        <Link to="/dashboard">
          <button className="hero-button">Go to Dashboard</button>
        </Link>
        <Link to="/reports">
          <button className="hero-button">View Reports</button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
