import React from 'react';
import Nav from '../nav/Nav';
import Map from '../../assets/El Charro/Charro location.jpg';
import './location.css';

const Location = ({ language, setLanguage }) => {
  const isSpanish = language % 2 === 1;

  return (
    <div>
      <Nav language={language} setLanguage={setLanguage} />
      <div className="location-container">
        <h1 className="restaurant-name">
          {isSpanish ? 'El Charro Restaurante' : 'El Charro Restaurant'}
        </h1>
        <div className="details-container">
          <div className="hours-container">
            <h2 className="section-title">
              {isSpanish ? 'HORAS DEL RESTAURANTE' : 'RESTAURANT HOURS'}
            </h2>
            <h3 className="hours">{isSpanish ? 'Domingo 10AM-8PM' : 'Sunday 10AM-8PM'}</h3>
            <h3>{isSpanish ? 'Lunes 11AM-10PM' : 'Monday 11AM-10PM'}</h3>
            <h3>{isSpanish ? 'Martes 11AM-10PM' : 'Tuesday 11AM-10PM'}</h3>
            <h3>{isSpanish ? 'Miércoles 11AM-10PM' : 'Wednesday 11AM-10PM'}</h3>
            <h3>{isSpanish ? 'Jueves 11AM-10PM' : 'Thursday 11AM-10PM'}</h3>
            <h3>{isSpanish ? 'Viernes 11AM-10PM' : 'Friday 11AM-10PM'}</h3>
            <h3>{isSpanish ? 'Sábado 10AM-10PM' : 'Saturday 10AM-10PM'}</h3>
          </div>
          <div className="location-details">
            <div className="address">
              <h2 className="section-title">
                {isSpanish ? 'ENCUÉNTRANOS EN' : 'FIND US AT'}
              </h2>
              <h2 className="section-title">
                2547 W Lawrence Ave, Chicago, IL 60625
              </h2>
            </div>
            <img src={Map} alt="Restaurant Location" className="location-image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;

