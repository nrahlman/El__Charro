import React from 'react';
import './home.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/El Charro/logo.jpg';
import { Container } from 'react-bootstrap';
import SlideShow from '../slideShow/SlideShow';

const handleClick = () => {
  window.open('https://food.google.com/chooseprovider?restaurantId=/g/11kb_w05g4&g2lbs=ADZRdksuARnTtKZze_6WSyUB36lYfCyOIN1JaiGcc2y1l2UzFteAXx3Cse_cw3XxFNeaIPmBXFB9K-AyyayhDxzhltcEMv24KFcjUkAr3MJS2GK5nMFPpm0%3D&hl=en-US&gl=us&ssta=1&fo_m=MfohQo559jFvMUOzJVpjPL1YMfZ3bInYwBDuMfaXTPp5KXh-&gei=6_2RZJmXB5WnptQPusGy4As&ei=6_2RZJmXB5WnptQPusGy4As&fo_s=OA&sei=Ce8IVCtNKCuPEYsyV-fCBmtp&utm_campaign&utm_source=search', '_blank');
};

const Home = ({ language, setLanguage }) => {
  const isSpanish = language % 2 === 1;

  return (
    <div className="home">
      <nav className="navbar">
        <Link to="/" className="navbar-link">
          {isSpanish ? 'Home' : 'Entrada'}
        </Link>
        <button
          onClick={async () => {
            setLanguage(++language);
          }}
          className="nav-link nav-button"
        >
          {isSpanish ? 'Español' : 'English'}
        </button>
        <div className="navbar-logo-container">
          <img src={logo} alt="Logo" className="navbar-logo" />
        </div>
        <Link to="/menu" className="navbar-link">
          {isSpanish ? 'Menu' : 'Menu'}
        </Link>
        <a
          href="https://food.google.com/chooseprovider?restaurantId=/g/11kb_w05g4&g2lbs=ADZRdksuARnTtKZze_6WSyUB36lYfCyOIN1JaiGcc2y1l2UzFteAXx3Cse_cw3XxFNeaIPmBXFB9K-AyyayhDxzhltcEMv24KFcjUkAr3MJS2GK5nMFPpm0%3D&hl=en-US&gl=us&ssta=1&fo_m=MfohQo559jFvMUOzJVpjPL1YMfZ3bInYwBDuMfaXTPp5KXh-&gei=6_2RZJmXB5WnptQPusGy4As&ei=6_2RZJmXB5WnptQPusGy4As&fo_s=OA&sei=Ce8IVCtNKCuPEYsyV-fCBmtp&utm_campaign&utm_source=search"
          target="_blank"
          className="navbar-link"
        >
          {isSpanish ? 'Order' : 'Ordena'}
        </a>
      </nav>
      <h1 className='title1'>
        {isSpanish ? 'Experience Authentic' : 'Sabores Authenticos'}
      </h1>
      <h1 className='title1'>
        {isSpanish ? 'Mexican Food' : 'De Mexico'}
      </h1>
      <button className="order1" onClick={handleClick}>
        {isSpanish ? 'Order Online' : 'Ordena En Linea'}
      </button>
      <div className="content">
        <div className="left-column">
          <p className="lorem-text">
            {isSpanish
              ? 'El CHARRO MEXICAN FOOD IS A SMALL, FAMILY-OWNED RESTAURANT LOCATED IN LINCOLN SQUARE. WE ARE DELIGHTED TO SERVE OUR COMMUNITY OFFERING DELICIOUS TRADITIONAL MEXICAN FOOD AT AFFORDABLE PRICES.'
              : 'EL CHARRO COMIDA MEXICANA ES UN PEQUEÑO RESTAURANTE FAMILIAR UBICADO EN LINCOLN SQUARE. ESTAMOS ENCANTADOS DE SERVIR A NUESTRA COMUNIDAD OFRECIENDO DELICIOSA COMIDA TRADICIONAL MEXICANA A PRECIOS ACCESIBLES.'}
          </p>
        </div>
        <div className="right-column">
          <h2>{isSpanish ? 'Order take-out' : 'PEDIDO PARA LLEVAR'}</h2>
          <h2>773-654-3550</h2>
          <Link to="/location" className="button-styling navbar-link">
            {isSpanish ? 'Location and Hours' : 'Ubicación y Horario'}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
