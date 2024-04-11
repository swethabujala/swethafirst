import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li>
          <Link to="/services" className="nav-link">Services</Link>
        </li>
        <li>
          <Link to="/contact" className="nav-link">Contact</Link>
        </li>
        <li>
          <Link to="/login" className="nav-linka">Login</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
