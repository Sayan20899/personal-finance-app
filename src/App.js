import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { FinanceProvider } from './context/FinanceContext';
import Dashboard from './pages/Dashboard';
import Reports from './pages/Reports';
import Navbar from './components/Navbar';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const notify = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <FinanceProvider>
      <Router>
        <div className={darkMode ? 'dark' : ''}>
          <div className="flex h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
            {/* Navbar for navigation */}
            <Navbar />
            <div className="flex-1 p-6">
              {/* Toggle Dark Mode */}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="mb-4 px-4 py-2 bg-blue-600 text-white rounded-lg"
              >
                Toggle {darkMode ? 'Light' : 'Dark'} Mode
              </button>

              {/* Toast notification button */}
              <button
                onClick={notify}
                className="ml-4 mb-4 px-4 py-2 bg-green-500 text-white rounded-lg"
              >
                Show Toast
              </button>

              {/* Routes for navigating between Dashboard and Reports */}
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/reports" element={<Reports />} />
              </Routes>

              {/* Toast Notification */}
              {showToast && (
                <div className="fixed bottom-4 right-4 bg-blue-500 text-white p-4 rounded-lg shadow-lg">
                  Data saved successfully!
                </div>
              )}
            </div>
          </div>
        </div>
      </Router>
    </FinanceProvider>
  );
};

export default App;

