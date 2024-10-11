import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Import the FinanceProvider from the context
import { FinanceProvider } from './context/FinanceContext';

// Import the page components
import HomePage from './pages/HomePage';
import Dashboard from './pages/Dashboard';
import Reports from './pages/Reports';

// Import the Navbar component (optional if you want it in the cover page)
import Navbar from './components/Navbar'; // Optional, if you want the Navbar globally

// Import the CSS file for styling
import './styles.css';

const App = () => {
  return (
    <FinanceProvider>
      <Router>
        <div className="App">
          {/* Optional: Include Navbar if you want it across all pages */}
          {/* <Navbar /> */}
          
          <Routes>
            <Route path="/" element={<HomePage />} />    {/* Cover page route */}
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/reports" element={<Reports />} />
          </Routes>
        </div>
      </Router>
    </FinanceProvider>
  );
};

export default App;
