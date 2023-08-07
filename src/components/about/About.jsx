import React from 'react';
import Nav from '../nav/Nav';
import './about.css';

const About = ({language, setLanguage}) => {
  return (
    <div>
      <Nav language={language} setLanguage={setLanguage}/>
      <div className="about-container">
        <div className="about-text">
          <h2>About Us</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum interdum auctor ante, eu malesuada metus vestibulum a. Nulla ut massa euismod, iaculis dui et, venenatis mi. In ut dui bibendum, convallis libero et, pulvinar dolor. Nunc dapibus iaculis arcu, nec efficitur nulla ultricies eu. Fusce in condimentum mauris. Nullam aliquet, libero a imperdiet sagittis, justo odio euismod urna, non fringilla nulla risus eu metus.
          </p>
        </div>
        <div className="about-photo">
          <img src="path/to/photo.jpg" alt="About Us" />
        </div>
      </div>
    </div>
  );
};

export default About;

