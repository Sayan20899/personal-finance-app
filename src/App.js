import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { FinanceProvider } from './context/FinanceContext';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import Dashboard from './pages/Dashboard';
import Reports from './pages/Reports';

const App = () => {
  return (
    <FinanceProvider>
      <Router>
        <div className="App min-h-screen flex flex-col">
          {/* Navbar Component */}
          <Navbar />
          
          {/* Main content area */}
          <div className="flex-grow p-6 bg-gray-100">
            <Routes>
              {/* Home page as default route */}
              <Route path="/" element={<HomePage />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/reports" element={<Reports />} />
            </Routes>
          </div>
          
          {/* Footer (Optional) */}
          <footer className="bg-gray-800 text-white text-center py-4">
            © 2024 Personal Finance App. All rights reserved.
          </footer>
        </div>
      </Router>
    </FinanceProvider>
  );
};

export default App;
