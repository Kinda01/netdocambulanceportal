import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <ul className="flex justify-around">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/request">Request Ambulance</Link></li>
        <li><Link to="/admin">Admin Dashboard</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
