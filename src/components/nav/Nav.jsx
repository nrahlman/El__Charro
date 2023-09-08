import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/El Charro/logo.jpg';
import './nav.css';

const Nav = ({ language, setLanguage }) => {
  return (
    <nav className="nav-bar">
      <img src={logo} alt="Logo" className="nav-logo" />
      <Link to="/" className="nav-link">Home</Link>
      {language % 2 === 1 ? (
        <button onClick={async () => setLanguage(++language)} className="nav-link nav-button">Español</button>
      ) : (
        <button onClick={async () => setLanguage(++language)} className="nav-link nav-button">English</button>
      )}
      <Link to="/menu" className="nav-link">Menu</Link>
      <a
        href="https://food.google.com/chooseprovider?restaurantId=/g/11kb_w05g4&g2lbs=ADZRdksuARnTtKZze_6WSyUB36lYfCyOIN1JaiGcc2y1l2UzFteAXx3Cse_cw3XxFNeaIPmBXFB9K-AyyayhDxzhltcEMv24KFcjUkAr3MJS2GK5nMFPpm0%3D&hl=en-US&gl=us&ssta=1&fo_m=MfohQo559jFvMUOzJVpjPL1YMfZ3bInYwBDuMfaXTPp5KXh-&gei=6_2RZJmXB5WnptQPusGy4As&ei=6_2RZJmXB5WnptQPusGy4As&fo_s=OA&sei=Ce8IVCtNKCuPEYsyV-fCBmtp&utm_campaign&utm_source=search"
        target="_blank"
        className="nav-link"
      >
        {language % 2 === 1 ? 'Order' : 'Ordena'}
      </a>
    </nav>
  );
};

export default Nav;



