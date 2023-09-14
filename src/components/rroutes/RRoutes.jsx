import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../home/Home';
import Menu2 from '../menu2/Menu2';
import Location from '../location/Location';
import SlideShow from '../slideShow/SlideShow';

const RRoutes = ({language, setLanguage}) => {
    return (
            <div>
                <Routes>
                    <Route path="/" element={<Home language={language} setLanguage={setLanguage}/>} />
                    <Route path="/menu" element={<Menu2 language={language} setLanguage={setLanguage}/>} />
                    <Route path="/location" element={<Location language={language} setLanguage={setLanguage}/>} />
                    <Route path="/slide" element={<SlideShow/>} />
                    
                </Routes>
            </div>
    );
};

export default RRoutes;
