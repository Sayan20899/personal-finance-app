import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { FinanceProvider } from './context/FinanceContext';
import Dashboard from './pages/Dashboard';
import Reports from './pages/Reports';

const App = () => {
  return (
    <FinanceProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/reports" element={<Reports />} />
          </Routes>
        </div>
      </Router>
    </FinanceProvider>
  );
};

export default App;
