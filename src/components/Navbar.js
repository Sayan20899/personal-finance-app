import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="w-64 bg-gray-800 text-white h-screen p-6">
      <h1 className="text-2xl font-bold mb-6">Finance Manager</h1>
      <ul>
        <li className="mb-4">
          <Link to="/" className="hover:text-gray-300">
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/reports" className="hover:text-gray-300">
            Reports
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

