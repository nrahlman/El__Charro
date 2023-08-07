import React from 'react';
import Nav from '../nav/Nav';
import Map from '../../assets/El Charro/Charro location.jpg';
import './location.css';

const Location = ({language, setLanguage}) => {
    if(language%2===1){return (
        <div>
            <Nav language={language} setLanguage={setLanguage}/>
            <div className="location-container">
                <h1 className="restaurant-name">El Charro Restaurant</h1>
                <div className="details-container">
                    <div className="hours-container">
                        <h2 className="section-title">RESTAURANT HOURS</h2>
                        <h3 className='hours'>Sunday 10AM-8PM</h3>
                        <h3>Monday 11AM-10PM</h3>
                        <h3>Tuesday 11AM-10PM</h3>
                        <h3>Wednesday 11AM-10PM</h3>
                        <h3>Thursday 11AM-10PM</h3>
                        <h3>Friday 11AM-10PM</h3>
                        <h3>Saturday 10AM-10PM</h3>
                    </div>
                    <div className="location-details">
                        <div className="address">
                            <h2 className='section-title'>FIND US AT</h2>
                            <h2 className='section-title'>
                            2547 W Lawrence Ave, Chicago, IL 60625
                            </h2>
                        </div>
                        <img src={Map} alt="Restaurant Location" className="location-image" />
                    </div>
                </div>
            </div>
        </div>
    );
}
else{
    return (
        <div>
            <Nav language={language} setLanguage={setLanguage}/>
            <div className="location-container">
                <h1 className="restaurant-name">El Charro Restaurante</h1>
                <div className="details-container">
                    <div className="hours-container">
                        <h2 className="section-title">HORAS DEL RESTAURANTE</h2>
                        <h3 className='hours'>Domingo 10AM-8PM</h3>
                        <h3>Lunes 11AM-10PM</h3>
                        <h3>Martes 11AM-10PM</h3>
                        <h3>Miércoles 11AM-10PM</h3>
                        <h3>Jueves 11AM-10PM</h3>
                        <h3>Viernes 11AM-10PM</h3>
                        <h3>Sábado 10AM-10PM</h3>
                    </div>
                    <div className="location-details">
                        <div className="address">
                            <h2 className='section-title'>ENCUÉNTRANOS EN</h2>
                            <h2 className='section-title'>
                            2547 W Lawrence Ave, Chicago, IL 60625
                            </h2>
                        </div>
                        <img src={Map} alt="Restaurant Location" className="location-image" />
                    </div>
                </div>
            </div>
        </div>
    );
}};

export default Location;
