import React from 'react';
import Nav from '../nav/Nav';
import menu1 from '../../assets/El Charro/menu11.jpg';
import menu2 from '../../assets/El Charro/menu22.jpg';
import menu3 from '../../assets/El Charro/menu33.jpg';
import menu4 from '../../assets/El Charro/menu44.jpg';
import './menu.css';

const handleClick = () => {
  window.open('https://food.google.com/chooseprovider?restaurantId=/g/11kb_w05g4&g2lbs=ADZRdksuARnTtKZze_6WSyUB36lYfCyOIN1JaiGcc2y1l2UzFteAXx3Cse_cw3XxFNeaIPmBXFB9K-AyyayhDxzhltcEMv24KFcjUkAr3MJS2GK5nMFPpm0%3D&hl=en-US&gl=us&ssta=1&fo_m=MfohQo559jFvMUOzJVpjPL1YMfZ3bInYwBDuMfaXTPp5KXh-&gei=6_2RZJmXB5WnptQPusGy4As&ei=6_2RZJmXB5WnptQPusGy4As&fo_s=OA&sei=Ce8IVCtNKCuPEYsyV-fCBmtp&utm_campaign&utm_source=search', '_blank');
};

const Menu = ({language, setLanguage}) => {
  console.log(language)
  if (language%2===1){
  return (
    <div className='menu'>
      <Nav className="Nav" language={language} setLanguage={setLanguage}/>
      <div className='order-container'>
        <div className="menu-images">
          <img className='left' src={menu1} alt="" />
          <button className="order" onClick={handleClick}>
            Order Online
          </button>
          <img className='right' src={menu2} alt="" />
          <img className='left' src={menu3} alt="" />
          <button className="order" onClick={handleClick}>
            Order Online
          </button>
          <img className='right' src={menu4} alt="" />
        </div>
      </div>
    </div>
  );
}
else {
  return (
    <div className='menu'>
     <Nav className="Nav" language={language} setLanguage={setLanguage}/>
      <div className='order-container'>
        <div className="menu-images">
          <img className='left' src={menu1} alt="" />
          <button className="order" onClick={handleClick}>
            Ordena
          </button>
          <img className='right' src={menu2} alt="" />
          <img className='left' src={menu3} alt="" />
          <button className="order" onClick={handleClick}>
            Ordena
          </button>
          <img className='right' src={menu4} alt="" />
        </div>
      </div>
    </div>
  );
}
};

export default Menu;
