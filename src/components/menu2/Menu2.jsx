import React from 'react';
import './menu2.css';
import Nav from '../nav/Nav';
import SlideShow from '../slideShow/SlideShow';

const handleClick = () => {
    window.open('https://food.google.com/chooseprovider?restaurantId=/g/11kb_w05g4&g2lbs=ADZRdksuARnTtKZze_6WSyUB36lYfCyOIN1JaiGcc2y1l2UzFteAXx3Cse_cw3XxFNeaIPmBXFB9K-AyyayhDxzhltcEMv24KFcjUkAr3MJS2GK5nMFPpm0%3D&hl=en-US&gl=us&ssta=1&fo_m=MfohQo559jFvMUOzJVpjPL1YMfZ3bInYwBDuMfaXTPp5KXh-&gei=6_2RZJmXB5WnptQPusGy4As&ei=6_2RZJmXB5WnptQPusGy4As&fo_s=OA&sei=Ce8IVCtNKCuPEYsyV-fCBmtp&utm_campaign&utm_source=search', '_blank');
  };
  

const Menu = ({language, setLanguage}) => {
    
    return (
        <div>
             <Nav className="Nav" language={language} setLanguage={setLanguage}/>
        <div className='menu'>
           
            <div class="menu-section">
            <div class="title">
        <h2>Burritos</h2>
        </div>
        <p>Served with beans, lettuce, tomato, sour cream, cilantro, and cheese.</p>
        <ul>
            <li class="menu-item">
                <span class="item-name">Burrito Suizo</span>
                <span class="item-price">$13.99</span>
            </li>
            <li class="menu-item">
                <span class="item-name">Pastor (Seasoned Pork)</span>
                <span class="item-price">$10.49</span>
            </li>
            <li class="menu-item">
                <span class="item-name">Asada (Steak)</span>
                <span class="item-price">$10.99</span>
            </li>
            <li class="menu-item">
                <span class="item-name">Pollo (Chicken)</span>
                <span class="item-price">$10.49</span>
            </li>
            <li class="menu-item">
                <span class="item-name">Lomo De Res (Ribeye Steak W/Onion & Peppers)</span>
                <span class="item-price">$10.99</span>
            </li>
            <li class="menu-item">
                <span class="item-name">Chorizo (Mex Sausage)</span>
                <span class="item-price">$10.49</span>
            </li>
            <li class="menu-item">
                <span class="item-name">Suadero</span>
                <span class="item-price">$10.49</span>
            </li>
            <li class="menu-item">
                <span class="item-name">Tripa (Tripe)</span>
                <span class="item-price">$10.99</span>
            </li>
            <li class="menu-item">
                <span class="item-name">Lengua (Tongue)</span>
                <span class="item-price">$10.99</span>
            </li>
            <li class="menu-item">
                <span class="item-name">Vegetariano (Vegetarian)</span>
                <span class="item-price">$10.49</span>
            </li>
            <li class="menu-item">
                <span class="item-name">Picadillo (Ground Beef)</span>
                <span class="item-price">$10.49</span>
            </li>
            <li class="menu-item">
                <span class="item-name">Rajas De Poblano</span>
                <span class="item-price">$10.49</span>
            </li>
        </ul>
    </div>
    <div class="menu-section">
<div class="title">
    <h2>Sopes Y Tostadas</h2>
    </div>
    <p>Served with beans, cheese, lettuce, tomato, sour cream, cilantro, and onion.</p>
    <ul>
        <li class="menu-item">
            <span class="item-name">Chorizo (Mex Sausage)</span>
            <span class="item-price">$6.49</span>
        </li>
        <li class="menu-item">
            <span class="item-name">Asada (Steak)</span>
            <span class="item-price">$6.99</span>
        </li>
        <li class="menu-item">
            <span class="item-name">Pastor (Seasoned Beef)</span>
            <span class="item-price">$6.49</span>
        </li>
        <li class="menu-item">
            <span class="item-name">Pollo (Chicken)</span>
            <span class="item-price">$6.49</span>
        </li>
        <li class="menu-item">
            <span class="item-name">Picadillo (Ground Beef)</span>
            <span class="item-price">$6.49</span>
        </li>
        <li class="menu-item">
            <span class="item-name">Lomo de Res (Beef Tenderloin)</span>
            <span class="item-price">$6.99</span>
        </li>
        <li class="menu-item">
            <span class="item-name">Tripa (Tripe)</span>
            <span class="item-price">$6.99</span>
        </li>
        <li class="menu-item">
            <span class="item-name">Lengua (Tongue)</span>
            <span class="item-price">$6.99</span>
        </li>
        <li class="menu-item">
            <span class="item-name">Suadero</span>
            <span class="item-price">$6.49</span>
        </li>
        <li class="menu-item">
            <span class="item-name">Vegetariano (Vegetarian)</span>
            <span class="item-price">$6.49</span>
        </li>
        <li class="menu-item">
            <span class="item-name">Carnitas</span>
            <span class="item-price">$6.49</span>
        </li>
        <button className="order" onClick={handleClick}>
        {language % 2 === 1 ? 'Order Online' : 'Ordena en Linea'}
          </button>
    </ul>
</div>
    <div class="menu-section">
    <div class="title">
    <h2>Tortas</h2>
    </div>
    <p>Served with beans, cheese, lettuce, tomato, onion, sour cream, and avocado.</p>
    <ul>
        <li class="menu-item">
            <span class="item-name">Pastor (Seasoned Pork)</span>
            <span class="item-price">$9.99</span>
        </li>
        <li class="menu-item">
            <span class="item-name">Asada (Steak)</span>
            <span class="item-price">$10.99</span>
        </li>
        <li class="menu-item">
            <span class="item-name">Pollo (Chicken)</span>
            <span class="item-price">$9.99</span>
        </li>
        <li class="menu-item">
            <span class="item-name">Lomo De Res (Beef Tenderloin)</span>
            <span class="item-price">$10.99</span>
        </li>
        <li class="menu-item">
            <span class="item-name">Chorizo con Huevo (Mex Sausage W Eggs)</span>
            <span class="item-price">$9.99</span>
        </li>
        <li class="menu-item">
            <span class="item-name">Jamon Con Huevo (Ham W Eggs)</span>
            <span class="item-price">$9.99</span>
        </li>
        <li class="menu-item">
            <span class="item-name">Milanesa de Pollo (Breaded Chicken Breast)</span>
            <span class="item-price">$9.99</span>
        </li>
        <li class="menu-item">
            <span class="item-name">Milanesa de Res (Breaded Steak)</span>
            <span class="item-price">$9.99</span>
        </li>
        <li class="menu-item">
            <span class="item-name">Salchicha (Sausage)</span>
            <span class="item-price">$9.99</span>
        </li>
        <li class="menu-item">
            <span class="item-name">Lengua (Tongue)</span>
            <span class="item-price">$10.99</span>
        </li>
        <li class="menu-item">
            <span class="item-name">Vegetariana (Vegetarian)</span>
            <span class="item-price">$9.99</span>
        </li>
        <li class="menu-item">
            <span class="item-name">Chile Relleno (Stuffed Peppers)</span>
            <span class="item-price">$9.99</span>
        </li>
        <li class="menu-item">
            <span class="item-name">Carnitas</span>
            <span class="item-price">$9.99</span>
        </li>
        <li class="menu-item">
            <span class="item-name">Cubana</span>
            <span class="item-price">$14.99</span>
        </li>
    </ul>
</div>
<div class="menu-section">
<div class="title">
    <h2>Tacos</h2>
    </div>
    <p>Served with cilantro & onion.</p>
    <ul>
        <li class="menu-item">
            <span class="item-name">Asada (Steak)</span>
            <span class="item-price">$3.95</span>
        </li>
        <li class="menu-item">
            <span class="item-name">Pastor (Seasoned Pork)</span>
            <span class="item-price">$3.49</span>
        </li>
        <li class="menu-item">
            <span class="item-name">Suadero</span>
            <span class="item-price">$3.49</span>
        </li>
        <li class="menu-item">
            <span class="item-name">Pollo (Chicken)</span>
            <span class="item-price">$3.49</span>
        </li>
        <li class="menu-item">
            <span class="item-name">Chorizo (Mex Sausage)</span>
            <span class="item-price">$3.49</span>
        </li>
        <li class="menu-item">
            <span class="item-name">Chile Relleno (Stuffed Peppers)</span>
            <span class="item-price">$4.09</span>
        </li>
        <li class="menu-item">
            <span class="item-name">Bistec De Lomo (Ribeye Steak)</span>
            <span class="item-price">$4.09</span>
        </li>
        <li class="menu-item">
            <span class="item-name">Tripa (Tripe)</span>
            <span class="item-price">$4.09</span>
        </li>
        <li class="menu-item">
            <span class="item-name">Lengua (Tongue)</span>
            <span class="item-price">$4.09</span>
        </li>
        <li class="menu-item">
            <span class="item-name">Alambre</span>
            <span class="item-price">$3.95</span>
        </li>
        <li class="menu-item">
            <span class="item-name">Picadillo (Ground Beef)</span>
            <span class="item-price">$3.49</span>
        </li>
        <li class="menu-item">
            <span class="item-name">Vegetariano (Vegetarian)</span>
            <span class="item-price">$3.49</span>
        </li>
        <li class="menu-item">
            <span class="item-name">Carnitas</span>
            <span class="item-price">$3.49</span>
        </li>
        <li class="menu-item">
            <span class="item-name">Rancherito</span>
            <span class="item-price">$3.95</span>
        </li>
        <li class="menu-item">
            <span class="item-name">Taco El Charro</span>
            <span class="item-price">$4.49</span>
        </li>
    </ul>
</div>
<div class="menu-section">
<div class="title">
    <h2>Taco Dinner</h2>
    </div>
    <p>Served with rice & beans.</p>
    <ul>
        <li class="menu-item">
            <span class="item-name">Taco Dinner De Asada (Steak Taco Dinner)</span>
            <span class="item-price">$15.99</span>
        </li>
        <li class="menu-item">
            <span class="item-name">Taco Dinner De Pollo (Chicken Taco Dinner)</span>
            <span class="item-price">$14.49</span>
        </li>
        <li class="menu-item">
            <span class="item-name">Taco Dinner Al Pastor (Seasoned Pork Taco Dinner)</span>
            <span class="item-price">$14.49</span>
        </li>
        <li class="menu-item">
            <span class="item-name">Taco Dinner De Picadillo (Ground Beef Taco Dinner)</span>
            <span class="item-price">$14.49</span>
        </li>
        <li class="menu-item">
            <span class="item-name">Taco Dinner De Chorizo (Mex Sausage Taco Dinner)</span>
            <span class="item-price">$14.49</span>
        </li>
        <li class="menu-item">
            <span class="item-name">Taco Dinner De Suadero</span>
            <span class="item-price">$14.49</span>
        </li>
        <li class="menu-item">
            <span class="item-name">Taco Dinner De Lomo (Ribeye Taco Dinner)</span>
            <span class="item-price">$16.99</span>
        </li>
        <li class="menu-item">
            <span class="item-name">Taco Dinner De Lengua (Tongue Taco Dinner)</span>
            <span class="item-price">$15.99</span>
        </li>
        <button className="order" onClick={handleClick}>
        {language % 2 === 1 ? 'Order Online' : 'Ordena en Linea'}
          </button>
    </ul>
</div>
<div class="menu-section">
<div class="title">
    <h2>Platillos/Dinner</h2>
    </div>
    <p>Served with rice, beans, and salad.</p>
    <ul>
        <li class="menu-item">
            <span class="item-name">Carne Asada (Skirt Steak)</span>
            <span class="item-price">$21.99</span>
        </li>
        <li class="menu-item">
            <span class="item-name">Tampiquena</span>
            <span class="item-price">$23.99</span>
        </li>
        <li class="menu-item">
            <span class="item-name">Bistec Ranchero (Steak W Ranchera Sauce)</span>
            <span class="item-price">$18.99</span>
        </li>
        <li class="menu-item">
            <span class="item-name">Lomo En Chile De Arbol (Steak W Red Sauce)</span>
            <span class="item-price">$18.99</span>
        </li>
        <li class="menu-item">
            <span class="item-name">Bistec A La Mexicana (Mexican Style Steak)</span>
            <span class="item-price">$18.99</span>
        </li>
        <li class="menu-item">
            <span class="item-name">Fajitas Mixtas (Steak, Chicken & Shrimp Fajitas)</span>
            <span class="item-price">$21.99</span>
        </li>
        <li class="menu-item">
            <span class="item-name">Fajitas De Pollo (Chicken Fajitas)</span>
            <span class="item-price">$20.99</span>
        </li>
        <li class="menu-item">
            <span class="item-name">Fajitas De Asada (Steak Fajitas)</span>
            <span class="item-price">$20.99</span>
        </li>
        <li class="menu-item">
            <span class="item-name">Fajitas De Camaron (Shrimp Fajitas)</span>
            <span class="item-price">$21.99</span>
        </li>
        <li class="menu-item">
            <span class="item-name">Pollo Asado (Grilled Chicken)</span>
            <span class="item-price">$18.99</span>
        </li>
        <li class="menu-item">
            <span class="item-name">Pechuga Ranchera (Ranchera Chicken Breast)</span>
            <span class="item-price">$19.99</span>
        </li>
        <li class="menu-item">
            <span class="item-name">Enchiladas De Pollo (Chicken Enchiladas)</span>
            <span class="item-price">$14.99</span>
        </li>
        <li class="menu-item">
            <span class="item-name">Enchiladas Suizas</span>
            <span class="item-price">$14.99</span>
        </li>
        <li class="menu-item">
            <span class="item-name">Chiles Rellenos (Stuffed Peppers)</span>
            <span class="item-price">$18.99</span>
        </li>
        <li class="menu-item">
            <span class="item-name">Filete Tilapia (Tilapia Fish)</span>
            <span class="item-price">$19.99</span>
        </li>
        <li class="menu-item">
            <span class="item-name">Lengua en salsa Ranchera (Tongue in Ranchera salsa)</span>
            <span class="item-price">$19.99</span>
        </li>
        <li class="menu-item">
            <span class="item-name">Milanesa De Pollo (Breaded Chicken)</span>
            <span class="item-price">$19.99</span>
        </li>
        <li class="menu-item">
            <span class="item-name">Milanesa De Res (Breaded Steak)</span>
            <span class="item-price">$19.99</span>
        </li>
        <li class="menu-item">
            <span class="item-name">Alambre</span>
            <span class="item-price">$19.99</span>
        </li>
        <li class="menu-item">
            <span class="item-name">Pollo En Mole Verde</span>
            <span class="item-price">$18.99</span>
        </li>
        <li class="menu-item">
            <span class="item-name">Pollo En Mole Poblano</span>
            <span class="item-price">$18.99</span>
        </li>
        <li class="menu-item">
            <span class="item-name">Bistec Encebollado (Steak W/Onion)</span>
            <span class="item-price">$18.99</span>
        </li>
        <li class="menu-item">
            <span class="item-name">Pechuga Asada (Grilled Chicken)</span>
            <span class="item-price">$18.99</span>
        </li>
        <li class="menu-item">
            <span class="item-name">Pechuga Rellena de Hongo, Espinaca Y Cebolla (Chicken Breast Stuffed with Mushrooms, spinach and onions)</span>
            <span class="item-price">$18.99</span>
        </li>
        <li class="menu-item">
            <span class="item-name">Pechuga En Salsa (Chicken Breast in Sauce)</span>
            <span class="item-price">$19.99</span>
        </li>
        <li class="menu-item">
            <span class="item-name">Arroz Con Camarones (Shrimp & Rice)</span>
            <span class="item-price">$19.99</span>
        </li>
        <li class="menu-item">
            <span class="item-name">Camarones A la Diabla</span>
            <span class="item-price">$19.99</span>
        </li>
        <li class="menu-item">
            <span class="item-name">Camarones Al Ajillo (Shrimp W/Garlic)</span>
            <span class="item-price">$19.99</span>
        </li>
        <li class="menu-item">
            <span class="item-name">Camarones Al Mojo De Ajo (Shrimp in Garlic Sauce)</span>
            <span class="item-price">$19.99</span>
        </li>
        <li class="menu-item">
            <span class="item-name">Camarones A La Plancha (Grilled Shrimp)</span>
            <span class="item-price">$19.99</span>
        </li>
    </ul>
</div>
<div class="menu-section">
<div class="title">
    <h2>Quesadillas</h2>
    </div>
    <p>Corn or flour tortillas.</p>
    <ul>
        <li class="menu-item">
            <span class="item-name">Quesadillas</span>
            <span class="item-price">$2.99</span>
        </li>
        <li class="menu-item">
            <span class="item-name">Asada (Steak)</span>
            <span class="item-price">$4.49</span>
        </li>
        <li class="menu-item">
            <span class="item-name">Pastor (Seasoned Pork)</span>
            <span class="item-price">$4.49</span>
        </li>
        <li class="menu-item">
            <span class="item-name">Pollo (Chicken)</span>
            <span class="item-price">$4.49</span>
        </li>
        <li class="menu-item">
            <span class="item-name">Chorizo (Mex Sausage)</span>
            <span class="item-price">$4.49</span>
        </li>
        <li class="menu-item">
            <span class="item-name">Hongos (Mushrooms)</span>
            <span class="item-price">$4.49</span>
        </li>
    </ul>
</div>
<div class="menu-section">
<div class="title">
    <h2>Quesabirria</h2>
    </div>
    <p>House Special!</p>
    <ul>
        <li class="menu-item">
            <span class="item-name">Orden De Quesabirria (3 Quesabirrias)</span>
            <span class="item-price">$15.99</span>
        </li>
        <li class="menu-item">
            <span class="item-name">Quesabirria Dinner (3 Quesabirrias with Rice and Beans)</span>
            <span class="item-price">$18.99</span>
        </li>
        <li class="menu-item">
            <span class="item-name">One Quesabirria</span>
            <span class="item-price">$3.99</span>
        </li>
        <li class="menu-item">
            <span class="item-name">Consome</span>
            <span class="item-price">$2.99</span>
        </li>
        <button className="order" onClick={handleClick}>
        {language % 2 === 1 ? 'Order Online' : 'Ordena en Linea'}
          </button>
    </ul>
</div>
<div class="menu-section">
<div class="title">
    <h2>Quesadillas Gigantes</h2>
    </div>
    <p>Flour tortilla.</p>
    <ul>
        <li class="menu-item">
            <span class="item-name">Quesadilla</span>
            <span class="item-price">$5.99</span>
        </li>
        <li class="menu-item">
            <span class="item-name">Asada (Steak)</span>
            <span class="item-price">$8.99</span>
        </li>
        <li class="menu-item">
            <span class="item-name">Pastor (Seasoned Pork)</span>
            <span class="item-price">$7.99</span>
        </li>
        <li class="menu-item">
            <span class="item-name">Pollo (Chicken)</span>
            <span class="item-price">$7.99</span>
        </li>
        <li class="menu-item">
            <span class="item-name">Chorizo (Mex Sausage)</span>
            <span class="item-price">$7.99</span>
        </li>
        <li class="menu-item">
            <span class="item-name">Hongos (Mushrooms)</span>
            <span class="item-price">$7.99</span>
        </li>
    </ul>
</div>
<div class="menu-section">
<div class="title">
    <h2>Caldos/Soups</h2>
    </div>
    <ul>
        <li class="menu-item">
            <span class="item-name">Caldo De Res (Beef Soup)</span>
            <span class="item-price">$16.99</span>
        </li>
        <li class="menu-item">
            <span class="item-name">Caldo De Pollo (Chicken Soup)</span>
            <span class="item-price">$15.99</span>
        </li>
        <li class="menu-item">
            <span class="item-name">Mole De Hoya</span>
            <span class="item-price">$16.99</span>
        </li>
        <li class="menu-item">
            <span class="item-name">Menudo</span>
            <span class="item-price">$16.99</span>
        </li>
        <li class="menu-item">
            <span class="item-name">Pozole</span>
            <span class="item-price">$16.99</span>
        </li>
    </ul>
</div>
<div class="menu-section">
<div class="title">
    <h2>Nachos</h2>
    </div>
    <p>Beans, Cheese, Guacamole, Jalapeno, Sour Cream, Lettuce, and Tomato.</p>
    <ul>
        <li class="menu-item">
            <span class="item-name">Asada (Steak)</span>
            <span class="item-price">$10.99</span>
        </li>
        <li class="menu-item">
            <span class="item-name">Pastor (Seasoned Pork)</span>
            <span class="item-price">$10.99</span>
        </li>
        <li class="menu-item">
            <span class="item-name">Pollo (Chicken)</span>
            <span class="item-price">$10.99</span>
        </li>
        <li class="menu-item">
            <span class="item-name">Chorizo (Mex Sausage)</span>
            <span class="item-price">$10.99</span>
        </li>
        <button className="order" onClick={handleClick}>
        {language % 2 === 1 ? 'Order Online' : 'Ordena en Linea'}
          </button>
    </ul>
</div>
<div class="menu-section">
<div class="title">
    <h2>Hamburguesas/Burgers</h2>
    </div>
    <p>Served with lettuce, tomato, and mayo.</p>
    <ul>
        <li class="menu-item">
            <span class="item-name">Cheeseburger W/Fries</span>
            <span class="item-price">$11.99</span>
        </li>
        <li class="menu-item">
            <span class="item-name">Hamburger W/Fries</span>
            <span class="item-price">$10.99</span>
        </li>
        <li class="menu-item">
            <span class="item-name">Bacon & Cheeseburger W/Fries</span>
            <span class="item-price">$13.99</span>
        </li>
        <li class="menu-item">
            <span class="item-name">Grilled Chicken W/Fries</span>
            <span class="item-price">$10.99</span>
        </li>
    </ul>
</div>
<div class="menu-section">
<div class="title">
    <h2>Desayuno/Breakfast</h2>
    </div>
    <p>Served with rice & beans.</p>
    <ul>
        <li class="menu-item">
            <span class="item-name">Chilaquiles Verdes O Rojos (Green or Red Chilaquiles)</span>
            <span class="item-price">Market Price</span>
        </li>
        <li class="menu-item">
            <span class="item-name">Chilaquiles sencillos</span>
            <span class="item-price">$9.99</span>
        </li>
        <li class="menu-item">
            <span class="item-name">Chilaquiles C/Huevos (Chilaquiles W/Eggs)</span>
            <span class="item-price">$12.99</span>
        </li>
        <li class="menu-item">
            <span class="item-name">Chilaquiles C/Carne (Chilaquiles W/Meat)</span>
            <span class="item-price">$16.99</span>
        </li>
        <li class="menu-item">
            <span class="item-name">Chilaquiles C/Carne Y Huevo (Chilaquiles W/ Meat and Eggs)</span>
            <span class="item-price">$19.99</span>
        </li>
        <li class="menu-item">
            <span class="item-name">Huevos Rancheros (Eggs with Ranchero Sauce)</span>
            <span class="item-price">$9.99</span>
        </li>
        <li class="menu-item">
            <span class="item-name">Huevos A La Mexicana (Mexican Style Eggs)</span>
            <span class="item-price">$9.99</span>
        </li>
        <li class="menu-item">
            <span class="item-name">Huevos C/Jamon (Eggs W/Ham)</span>
            <span class="item-price">$9.99</span>
        </li>
        <li class="menu-item">
            <span class="item-name">Huevos C/Chorizo (Eggs W/Mexican Sausage)</span>
            <span class="item-price">$9.99</span>
        </li>
        <li class="menu-item">
            <span class="item-name">Huevos Con Tocino (Bacon & Eggs)</span>
            <span class="item-price">$10.99</span>
        </li>
        <li class="menu-item">
            <span class="item-name">Huevos Con Bistec (Steak & Eggs)</span>
            <span class="item-price">$14.99</span>
        </li>
        <li class="menu-item">
            <span class="item-name">Huevo Al Albanil</span>
            <span class="item-price">$10.99</span>
        </li>
        <li class="menu-item">
            <span class="item-name">Huevos El Charro</span>
            <span class="item-price">$14.99</span>
        </li>
    </ul>
</div>
<div class="menu-section">
<div class="title">
    <h2>Omelets</h2>
    </div>
    <ul>
        <li class="menu-item">
            <span class="item-name">A La Mexicana (Mexican Omelet)</span>
            <span class="item-price">$9.99</span>
        </li>
        <li class="menu-item">
            <span class="item-name">Con Jamon Y Queso (Omelet W/Ham & Cheese)</span>
            <span class="item-price">$10.99</span>
        </li>
        <li class="menu-item">
            <span class="item-name">Con Hongos Y Queso (Omelet W/Mushrooms & Cheese)</span>
            <span class="item-price">$10.99</span>
        </li>
        <li class="menu-item">
            <span class="item-name">Queso (W/Cheese)</span>
            <span class="item-price">$9.99</span>
        </li>
        <li class="menu-item">
            <span class="item-name">Tocino Y Queso (Bacon & Cheese)</span>
            <span class="item-price">$10.99</span>
        </li>
        <li class="menu-item">
            <span class="item-name">Rajas Y Queso (Slices W/Cheese)</span>
            <span class="item-price">$10.99</span>
        </li>
        <li class="menu-item">
            <span class="item-name">Papas, Chorizo Y Queso (Potatoes, Mex Sausage & Cheese)</span>
            <span class="item-price">$10.99</span>
        </li>
        <li class="menu-item">
            <span class="item-name">Salchica Y Queso (Sausage & Cheese)</span>
            <span class="item-price">$10.99</span>
        </li>
        <li class="menu-item">
            <span class="item-name">Espinaca Y Queso (Spinach & Cheese)</span>
            <span class="item-price">$9.99</span>
        </li>
        <button className="order" onClick={handleClick}>
        {language % 2 === 1 ? 'Order Online' : 'Ordena en Linea'}
          </button>
    </ul>
</div>
<div class="menu-section">
<div class="title">
    <h2>Pambazos</h2>
    </div>
    <p>Guajillo Lettuce, Sour Cream & Cheese.</p>
    <ul>
        <li class="menu-item">
            <span class="item-name">Asada (Steak)</span>
            <span class="item-price">$9.99</span>
        </li>
        <li class="menu-item">
            <span class="item-name">Pastor (Seasoned Pork)</span>
            <span class="item-price">$9.99</span>
        </li>
        <li class="menu-item">
            <span class="item-name">Pollo (Chicken)</span>
            <span class="item-price">$9.99</span>
        </li>
        <li class="menu-item">
            <span class="item-name">Chorizo (Mex Sausage)</span>
            <span class="item-price">$9.99</span>
        </li>
        <li class="menu-item">
            <span class="item-name">Chorizo Con Papa (Mex Sausage & Potatoes)</span>
            <span class="item-price">$9.99</span>
        </li>
        <li class="menu-item">
            <span class="item-name">Picadillo (Ground Beef)</span>
            <span class="item-price">$9.99</span>
        </li>
    </ul>
</div>
<div class="menu-section">
<div class="title">
    <h2>Appetizers</h2>
    </div>
    <ul>
        <li class="menu-item">
            <span class="item-name">Guacamole</span>
            <span class="item-price">$9.59</span>
        </li>
        <li class="menu-item">
            <span class="item-name">Sincronizadas</span>
            <span class="item-price">$8.99</span>
        </li>
        <li class="menu-item">
            <span class="item-name">Queso Fundido Con Tortilla De Harina</span>
            <span class="item-price">$4.99</span>
        </li>
        <li class="menu-item">
            <span class="item-name">Queso Fundido Con Chorizo</span>
            <span class="item-price">$7.99</span>
        </li>
        <li class="menu-item">
            <span class="item-name">Queso Fundido Con Chorizo Y Rajas</span>
            <span class="item-price">$8.99</span>
        </li>
        <li class="menu-item">
            <span class="item-name">Queso Fundido Con Rajas</span>
            <span class="item-price">$7.99</span>
        </li>
        <li class="menu-item">
            <span class="item-name">Steak Extra</span>
            <span class="item-price">$3.50</span>
        </li>
    </ul>
</div>
<div class="menu-section">
<div class="title">
    <h2>Extras</h2>
    </div>
    <ul>
        <li class="menu-item">
            <span class="item-name">Crema (Sour Cream)</span>
            <span class="item-price">$2.00</span>
        </li>
        <li class="menu-item">
            <span class="item-name">Queso (Cheese)</span>
            <span class="item-price">$2.00</span>
        </li>
        <li class="menu-item">
            <span class="item-name">Aguacate (Avocado)</span>
            <span class="item-price">$2.00</span>
        </li>
        <li class="menu-item">
            <span class="item-name">Papas Fritas (Fries)</span>
            <span class="item-price">$4.59</span>
        </li>
        <li class="menu-item">
            <span class="item-name">Arroz Y Frijoles (Rice & Beans)</span>
            <span class="item-price">$4.59</span>
        </li>
        <li class="menu-item">
            <span class="item-name">Chips & Salsa</span>
            <span class="item-price">$4.99</span>
        </li>
        <li class="menu-item">
            <span class="item-name">Cheese Fries</span>
            <span class="item-price">$5.99</span>
        </li>
        <li class="menu-item">
            <span class="item-name">Cebollitas Cambray</span>
            <span class="item-price">$3.99</span>
        </li>
        <li class="menu-item">
            <span class="item-name">Chiles Asados</span>
            <span class="item-price">$3.99</span>
        </li>
        <button className="order" onClick={handleClick}>
        {language % 2 === 1 ? 'Order Online' : 'Ordena en Linea'}
          </button>
    </ul>
</div>
<div class="menu-section">
<div class="title">
    <h2>Kids Menu</h2>
    </div>
    <p>Comes with soda or water.</p>
    <ul>
        <li class="menu-item">
            <span class="item-name">Taco W Rice and Beans</span>
            <span class="item-price">$6.99</span>
        </li>
        <li class="menu-item">
            <span class="item-name">Quesadilla W Rice and Beans</span>
            <span class="item-price">$6.99</span>
        </li>
        <li class="menu-item">
            <span class="item-name">6pz Chicken Nuggets W/Fries</span>
            <span class="item-price">$6.99</span>
        </li>
    </ul>
</div>
<div class="menu-section">
<div class="title">
    <h2>Ensalada/Salad</h2>
    </div>
    <p>Lettuce, Tomato, Onion, Cucumber, Orange, Avocado, and Strawberry.</p>
    <ul>
        <li class="menu-item">
            <span class="item-name">Asada (Steak)</span>
            <span class="item-price">$12.59</span>
        </li>
        <li class="menu-item">
            <span class="item-name">Pollo (Chicken)</span>
            <span class="item-price">$11.59</span>
        </li>
        <li class="menu-item">
            <span class="item-name">Camaron (Shrimp)</span>
            <span class="item-price">$13.59</span>
        </li>
    </ul>
</div>
<div class="menu-section">
<div class="title">
    <h2>Licuados/Milkshakes</h2>
    </div>
    <ul>
        <li class="menu-item">
            <span class="item-name">Fresa (Strawberry)</span>
            <span class="item-price">$3.99 / $5.99</span>
        </li>
        <li class="menu-item">
            <span class="item-name">Plátano (Banana)</span>
            <span class="item-price">$3.99 / $5.99</span>
        </li>
        <li class="menu-item">
            <span class="item-name">Avena (Oats)</span>
            <span class="item-price">$3.99 / $5.99</span>
        </li>
        <button className="order" onClick={handleClick}>
        {language % 2 === 1 ? 'Order Online' : 'Ordena en Linea'}
          </button>
    </ul>
</div>
<div class="menu-section">
<div class="title">
    <h2>Bebidas/Drinks</h2>
    </div>
    <ul>
        <li class="menu-item">
            <span class="item-name">Jarrito</span>
            <span class="item-price">$3.49</span>
        </li>
        <li class="menu-item">
            <span class="item-name">Sidral</span>
            <span class="item-price">$3.49</span>
        </li>
        <li class="menu-item">
            <span class="item-name">Coca Cola</span>
            <span class="item-price">$3.49</span>
        </li>
        <li class="menu-item">
            <span class="item-name">Diet Coke</span>
            <span class="item-price">$3.49</span>
        </li>
        <li class="menu-item">
            <span class="item-name">Pepsi</span>
            <span class="item-price">$3.49</span>
        </li>
        <li class="menu-item">
            <span class="item-name">Fanta</span>
            <span class="item-price">$3.49</span>
        </li>
        <li class="menu-item">
            <span class="item-name">Aguas Frescas (Fresh Juices)</span>
            <span class="item-price">$3.50 / $5.99</span>
        </li>
        <li class="menu-item">
            <span class="item-name">Horchata</span>
            <span class="item-price">$3.99 / $5.99</span>
        </li>
        <li class="menu-item">
            <span class="item-name">Jamaica</span>
            <span class="item-price">$3.99 / $5.99</span>
        </li>
        <li class="menu-item">
            <span class="item-name">Cafe (Coffee)</span>
            <span class="item-price">$2.50</span>
        </li>
    </ul>
</div>
        </div>
        <SlideShow />  
        </div>
    );
};

export default Menu;