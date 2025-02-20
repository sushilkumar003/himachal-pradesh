import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul className="nav-list">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/destinations">Destinations & Itineraries</Link>
        </li>
        <li>
          <Link to="/adventure">Adventure Activities</Link>
        </li>
        <li>
          <Link to="/culture">Cultural Experiences</Link>
        </li>
        <li>
          <Link to="/travel-tips">Travel Tips & Resources</Link>
        </li>
        <li>
          <Link to="/gallery">Visual Gallery</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
