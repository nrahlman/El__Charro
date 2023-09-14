import React from 'react';
import './menu2.css';
import Nav from '../nav/Nav';
import SlideShow from '../slideShow/SlideShow';

const handleClick = () => {
  window.open('https://food.google.com/chooseprovider?restaurantId=/g/11kb_w05g4&g2lbs=ADZRdksuARnTtKZze_6WSyUB36lYfCyOIN1JaiGcc2y1l2UzFteAXx3Cse_cw3XxFNeaIPmBXFB9K-AyyayhDxzhltcEMv24KFcjUkAr3MJS2GK5nMFPpm0%3D&hl=en-US&gl=us&ssta=1&fo_m=MfohQo559jFvMUOzJVpjPL1YMfZ3bInYwBDuMfaXTPp5KXh-&gei=6_2RZJmXB5WnptQPusGy4As&ei=6_2RZJmXB5WnptQPusGy4As&fo_s=OA&sei=Ce8IVCtNKCuPEYsyV-fCBmtp&utm_campaign&utm_source=search', '_blank');
};

const menuSections = [
  {
    title: 'Burritos',
    description: 'Served with beans, lettuce, tomato, sour cream, cilantro, and cheese.',
    items: [
      { name: 'Burrito Suizo', price: '$13.99' },
      { name: 'Pastor (Seasoned Pork)', price: '$10.49' },
      { name: 'Asada (Steak)', price: '$10.99' },
      { name: 'Pollo (Chicken)', price: '$10.49' },
      { name: 'Lomo De Res (Ribeye Steak W/Onion & Peppers)', price: '$10.99' },
      { name: 'Chorizo (Mex Sausage)', price: '$10.49' },
      { name: 'Suadero', price: '$10.49' },
      { name: 'Tripa (Tripe)', price: '$10.99' },
      { name: 'Lengua (Tongue)', price: '$10.99' },
      { name: 'Vegetariano (Vegetarian)', price: '$10.49' },
      { name: 'Picadillo (Ground Beef)', price: '$10.49' },
      { name: 'Rajas De Poblano', price: '$10.49' },
    ],
  },
  {
    title: 'Sopes Y Tostadas',
    description: 'Served with beans, cheese, lettuce, tomato, sour cream, cilantro, and onion.',
    items: [
      { name: 'Chorizo (Mex Sausage)', price: '$6.49' },
      { name: 'Asada (Steak)', price: '$6.99' },
      { name: 'Pastor (Seasoned Beef)', price: '$6.49' },
      { name: 'Pollo (Chicken)', price: '$6.49' },
      { name: 'Picadillo (Ground Beef)', price: '$6.49' },
      { name: 'Lomo de Res (Beef Tenderloin)', price: '$6.99' },
      { name: 'Tripa (Tripe)', price: '$6.99' },
      { name: 'Lengua (Tongue)', price: '$6.99' },
      { name: 'Suadero', price: '$6.49' },
      { name: 'Vegetariano (Vegetarian)', price: '$6.49' },
      { name: 'Carnitas', price: '$6.49' },
    ],
  },
  {
    title: 'Tortas',
    description: 'Served with beans, cheese, lettuce, tomato, onion, sour cream, and avocado.',
    items: [
      { name: 'Pastor (Seasoned Pork)', price: '$9.99' },
      { name: 'Asada (Steak)', price: '$10.99' },
      { name: 'Pollo (Chicken)', price: '$9.99' },
      { name: 'Lomo De Res (Beef Tenderloin)', price: '$10.99' },
      { name: 'Chorizo con Huevo (Mex Sausage W Eggs)', price: '$9.99' },
      { name: 'Jamon Con Huevo (Ham W Eggs)', price: '$9.99' },
      { name: 'Milanesa de Pollo (Breaded Chicken Breast)', price: '$9.99' },
      { name: 'Milanesa de Res (Breaded Steak)', price: '$9.99' },
      { name: 'Salchicha (Sausage)', price: '$9.99' },
      { name: 'Lengua (Tongue)', price: '$10.99' },
      { name: 'Vegetariana (Vegetarian)', price: '$9.99' },
      { name: 'Chile Relleno (Stuffed Peppers)', price: '$9.99' },
      { name: 'Carnitas', price: '$9.99' },
      { name: 'Cubana', price: '$14.99' },
    ],
  },
  {
    title: 'Tacos',
    description: 'Served with cilantro & onion.',
    items: [
      { name: 'Asada (Steak)', price: '$3.95' },
      { name: 'Pastor (Seasoned Pork)', price: '$3.49' },
      { name: 'Suadero', price: '$3.49' },
      { name: 'Pollo (Chicken)', price: '$3.49' },
      { name: 'Chorizo (Mex Sausage)', price: '$3.49' },
      { name: 'Chile Relleno (Stuffed Peppers)', price: '$4.09' },
      { name: 'Bistec De Lomo (Ribeye Steak)', price: '$4.09' },
      { name: 'Tripa (Tripe)', price: '$4.09' },
      { name: 'Lengua (Tongue)', price: '$4.09' },
      { name: 'Alambre', price: '$3.95' },
      { name: 'Picadillo (Ground Beef)', price: '$3.49' },
      { name: 'Vegetariano (Vegetarian)', price: '$3.49' },
      { name: 'Carnitas', price: '$3.49' },
      { name: 'Rancherito', price: '$3.95' },
      { name: 'Taco El Charro', price: '$4.49' },
    ],
  },
  {
    title: 'Taco Dinner',
    description: 'Served with rice & beans.',
    items: [
      { name: 'Taco Dinner De Asada (Steak Taco Dinner)', price: '$15.99' },
      { name: 'Taco Dinner De Pollo (Chicken Taco Dinner)', price: '$14.49' },
      { name: 'Taco Dinner Al Pastor (Seasoned Pork Taco Dinner)', price: '$14.49' },
      { name: 'Taco Dinner De Picadillo (Ground Beef Taco Dinner)', price: '$14.49' },
      { name: 'Taco Dinner De Chorizo (Mex Sausage Taco Dinner)', price: '$14.49' },
      { name: 'Taco Dinner De Suadero', price: '$14.49' },
      { name: 'Taco Dinner De Lomo (Ribeye Taco Dinner)', price: '$16.99' },
      { name: 'Taco Dinner De Lengua (Tongue Taco Dinner)', price: '$15.99' },
    ],
  },
  {
    title: 'Platillos/Dinner',
    description: 'Served with rice, beans, and salad.',
    items: [
      { name: 'Carne Asada (Skirt Steak)', price: '$21.99' },
      { name: 'Tampiquena', price: '$23.99' },
      { name: 'Bistec Ranchero (Steak W Ranchera Sauce)', price: '$18.99' },
      { name: 'Lomo En Chile De Arbol (Steak W Red Sauce)', price: '$18.99' },
      { name: 'Bistec A La Mexicana (Mexican Style Steak)', price: '$18.99' },
      { name: 'Fajitas Mixtas (Steak, Chicken & Shrimp Fajitas)', price: '$21.99' },
      { name: 'Fajitas De Pollo (Chicken Fajitas)', price: '$20.99' },
      { name: 'Fajitas De Asada (Steak Fajitas)', price: '$20.99' },
      { name: 'Fajitas De Camaron (Shrimp Fajitas)', price: '$21.99' },
      { name: 'Pollo Asado (Grilled Chicken)', price: '$18.99' },
      { name: 'Pechuga Ranchera (Ranchera Chicken Breast)', price: '$19.99' },
      { name: 'Enchiladas De Pollo (Chicken Enchiladas)', price: '$14.99' },
      { name: 'Enchiladas Suizas', price: '$14.99' },
      { name: 'Chiles Rellenos (Stuffed Peppers)', price: '$18.99' },
      { name: 'Filete Tilapia (Tilapia Fish)', price: '$19.99' },
      { name: 'Lengua en salsa Ranchera (Tongue in Ranchera salsa)', price: '$19.99' },
      { name: 'Milanesa De Pollo (Breaded Chicken)', price: '$19.99' },
      { name: 'Milanesa De Res (Breaded Steak)', price: '$19.99' },
      { name: 'Alambre', price: '$19.99' },
      { name: 'Pollo En Mole Verde', price: '$18.99' },
      { name: 'Pollo En Mole Poblano', price: '$18.99' },
      { name: 'Bistec Encebollado (Steak W/Onion)', price: '$18.99' },
      { name: 'Pechuga Asada (Grilled Chicken)', price: '$18.99' },
      { name: 'Pechuga Rellena de Hongo, Espinaca Y Cebolla (Chicken Breast Stuffed with Mushrooms, spinach and onions)', price: '$18.99' },
      { name: 'Pechuga En Salsa (Chicken Breast in Sauce)', price: '$19.99' },
      { name: 'Arroz Con Camarones (Shrimp & Rice)', price: '$19.99' },
      { name: 'Camarones A la Diabla', price: '$19.99' },
      { name: 'Camarones Al Ajillo (Shrimp W/Garlic)', price: '$19.99' },
      { name: 'Camarones Al Mojo De Ajo (Shrimp in Garlic Sauce)', price: '$19.99' },
      { name: 'Camarones A La Plancha (Grilled Shrimp)', price: '$19.99' },
    ],
  },
  {
    title: 'Quesadillas',
    description: 'Corn or flour tortillas.',
    items: [
      { name: 'Quesadillas', price: '$2.99' },
      { name: 'Asada (Steak)', price: '$4.49' },
      { name: 'Pastor (Seasoned Pork)', price: '$4.49' },
      { name: 'Pollo (Chicken)', price: '$4.49' },
      { name: 'Chorizo (Mex Sausage)', price: '$4.49' },
      { name: 'Hongos (Mushrooms)', price: '$4.49' },
    ],
  },
  {
    title: 'Quesabirria',
    description: 'House Special!',
    items: [
      { name: 'Orden De Quesabirria (3 Quesabirrias)', price: '$15.99' },
      { name: 'Quesabirria Dinner (3 Quesabirrias with Rice and Beans)', price: '$18.99' },
      { name: 'One Quesabirria', price: '$3.99' },
      { name: 'Consome', price: '$2.99' },
    ],
  },
  {
    title: 'Quesadillas Gigantes',
    description: 'Flour tortilla.',
    items: [
      { name: 'Quesadilla', price: '$5.99' },
      { name: 'Asada (Steak)', price: '$8.99' },
      { name: 'Pastor (Seasoned Pork)', price: '$7.99' },
      { name: 'Pollo (Chicken)', price: '$7.99' },
      { name: 'Chorizo (Mex Sausage)', price: '$7.99' },
      { name: 'Hongos (Mushrooms)', price: '$7.99' },
    ],
  },
  {
    title: 'Caldos/Soups',
    items: [
      { name: 'Caldo De Res (Beef Soup)', price: '$16.99' },
      { name: 'Caldo De Pollo (Chicken Soup)', price: '$15.99' },
      { name: 'Mole De Hoya', price: '$16.99' },
      { name: 'Menudo', price: '$16.99' },
      { name: 'Pozole', price: '$16.99' },
    ],
  },
  {
    title: 'Nachos',
    description: 'Beans, Cheese, Guacamole, Jalapeno, Sour Cream, Lettuce, and Tomato.',
    items: [
      { name: 'Asada (Steak)', price: '$10.99' },
      { name: 'Pastor (Seasoned Pork)', price: '$10.99' },
      { name: 'Pollo (Chicken)', price: '$10.99' },
      { name: 'Chorizo (Mex Sausage)', price: '$10.99' },
    ],
  },
  {
    title: 'Hamburguesas/Burgers',
    description: 'Served with lettuce, tomato, and mayo.',
    items: [
      { name: 'Cheeseburger W/Fries', price: '$11.99' },
      { name: 'Hamburger W/Fries', price: '$10.99' },
      { name: 'Bacon & Cheeseburger W/Fries', price: '$13.99' },
      { name: 'Grilled Chicken W/Fries', price: '$10.99' },
    ],
  },
  {
    title: 'Desayuno/Breakfast',
    description: 'Served with rice & beans.',
    items: [
      { name: 'Chilaquiles Verdes O Rojos (Green or Red Chilaquiles)', price: 'Market Price' },
      { name: 'Chilaquiles sencillos', price: '$9.99' },
      { name: 'Chilaquiles C/Huevos (Chilaquiles W/Eggs)', price: '$12.99' },
      { name: 'Chilaquiles C/Carne (Chilaquiles W/Meat)', price: '$16.99' },
      { name: 'Chilaquiles C/Carne Y Huevo (Chilaquiles W/ Meat and Eggs)', price: '$19.99' },
      { name: 'Huevos Rancheros (Eggs with Ranchero Sauce)', price: '$9.99' },
      { name: 'Huevos A La Mexicana (Mexican Style Eggs)', price: '$9.99' },
      { name: 'Huevos C/Jamon (Eggs W/Ham)', price: '$9.99' },
      { name: 'Huevos C/Chorizo (Eggs W/Mexican Sausage)', price: '$9.99' },
      { name: 'Huevos Con Tocino (Bacon & Eggs)', price: '$10.99' },
      { name: 'Huevos Con Bistec (Steak & Eggs)', price: '$14.99' },
      { name: 'Huevo Al Albanil', price: '$10.99' },
      { name: 'Huevos El Charro', price: '$14.99' },
    ],
  },
  {
    title: 'Omelets',
    items: [
      { name: 'A La Mexicana (Mexican Omelet)', price: '$9.99' },
      { name: 'Con Jamon Y Queso (Omelet W/Ham & Cheese)', price: '$10.99' },
      { name: 'Con Hongos Y Queso (Omelet W/Mushrooms & Cheese)', price: '$10.99' },
      { name: 'Queso (W/Cheese)', price: '$9.99' },
      { name: 'Tocino Y Queso (Bacon & Cheese)', price: '$10.99' },
      { name: 'Rajas Y Queso (Slices W/Cheese)', price: '$10.99' },
      { name: 'Papas, Chorizo Y Queso (Potatoes, Mex Sausage & Cheese)', price: '$10.99' },
      { name: 'Salchica Y Queso (Sausage & Cheese)', price: '$10.99' },
      { name: 'Espinaca Y Queso (Spinach & Cheese)', price: '$9.99' },
    ],
  },
  {
    title: 'Pambazos',
    description: 'Guajillo Lettuce, Sour Cream & Cheese.',
    items: [
      { name: 'Asada (Steak)', price: '$9.99' },
      { name: 'Pastor (Seasoned Pork)', price: '$9.99' },
      { name: 'Pollo (Chicken)', price: '$9.99' },
      { name: 'Chorizo (Mex Sausage)', price: '$9.99' },
      { name: 'Chorizo Con Papa (Mex Sausage & Potatoes)', price: '$9.99' },
      { name: 'Picadillo (Ground Beef)', price: '$9.99' },
    ],
  },
  {
    title: 'Appetizers',
    items: [
      { name: 'Guacamole', price: '$9.59' },
      { name: 'Sincronizadas', price: '$8.99' },
      { name: 'Queso Fundido Con Tortilla De Harina', price: '$4.99' },
      { name: 'Queso Fundido Con Chorizo', price: '$7.99' },
      { name: 'Queso Fundido Con Chorizo Y Rajas', price: '$8.99' },
      { name: 'Queso Fundido Con Rajas', price: '$7.99' },
      { name: 'Steak Extra', price: '$3.50' },
    ],
  },
  {
    title: 'Extras',
    items: [
      { name: 'Crema (Sour Cream)', price: '$2.00' },
      { name: 'Queso (Cheese)', price: '$2.00' },
      { name: 'Aguacate (Avocado)', price: '$2.00' },
      { name: 'Papas Fritas (Fries)', price: '$4.59' },
      { name: 'Arroz Y Frijoles (Rice & Beans)', price: '$4.59' },
      { name: 'Chips & Salsa', price: '$4.99' },
      { name: 'Cheese Fries', price: '$5.99' },
      { name: 'Cebollitas Cambray', price: '$3.99' },
      { name: 'Chiles Asados', price: '$3.99' },
    ],
  },
  {
    title: 'Kids Menu',
    description: 'Comes with soda or water.',
    items: [
      { name: 'Taco W Rice and Beans', price: '$6.99' },
      { name: 'Quesadilla W Rice and Beans', price: '$6.99' },
      { name: '6pz Chicken Nuggets W/Fries', price: '$6.99' },
    ],
  },
  {
    title: 'Ensalada/Salad',
    description: 'Lettuce, Tomato, Onion, Cucumber, Orange, Avocado, and Strawberry.',
    items: [
      { name: 'Asada (Steak)', price: '$12.59' },
      { name: 'Pollo (Chicken)', price: '$11.59' },
      { name: 'Camaron (Shrimp)', price: '$13.59' },
    ],
  },
  {
    title: 'Licuados/Milkshakes',
    items: [
      { name: 'Fresa (Strawberry)', price: '$3.99 / $5.99' },
      { name: 'Plátano (Banana)', price: '$3.99 / $5.99' },
      { name: 'Avena (Oats)', price: '$3.99 / $5.99' },
    ],
  },
  {
    title: 'Bebidas/Drinks',
    items: [
      { name: 'Jarrito', price: '$3.49' },
      { name: 'Sidral', price: '$3.49' },
      { name: 'Coca Cola', price: '$3.49' },
      { name: 'Diet Coke', price: '$3.49' },
      { name: 'Pepsi', price: '$3.49' },
      { name: 'Fanta', price: '$3.49' },
      { name: 'Aguas Frescas (Fresh Juices)', price: '$3.50 / $5.99' },
      { name: 'Horchata', price: '$3.99 / $5.99' },
      { name: 'Jamaica', price: '$3.99 / $5.99' },
      { name: 'Cafe (Coffee)', price: '$2.50' },
    ],
  }
];

const Menu = ({ language, setLanguage }) => {
    return (
      <div>
        <Nav className="Nav" language={language} setLanguage={setLanguage} />
        <div className="menu">
          {menuSections.map((section, index) => (
            <div className="menu-section" key={index}>
              <div className="title">
                <h2>{section.title}</h2>
              </div>
              <p>{section.description}</p>
              <ul>
                {section.items.map((item, itemIndex) => (
                  <li className="menu-item" key={itemIndex}>
                    <span className="item-name">{item.name}</span>
                    <span className="item-price">{item.price}</span>
                  </li>
                ))}
                {([1, 4, 7, 10, 13, 16, 19].includes(index)) && (
                  <button className="order" onClick={handleClick}>
                    {language % 2 === 1 ? 'Order Online' : 'Ordena en Linea'}
                  </button>
                )}
              </ul>
            </div>
          ))}
        </div>
        <SlideShow /> 
      </div>
    );
  };

export default Menu;
