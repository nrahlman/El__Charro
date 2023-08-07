import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../home/Home';
import About from '../about/About';
import Menu from '../menu/Menu';
import Location from '../location/Location';
import SlideShow from '../slideShow/SlideShow';

const RRoutes = ({language, setLanguage}) => {
    return (
            <div>
                <Routes>
                    <Route path="/" element={<Home language={language} setLanguage={setLanguage}/>} />
                    <Route path="/about" element={<About language={language} setLanguage={setLanguage}/>} />
                    <Route path="/menu" element={<Menu language={language} setLanguage={setLanguage}/>} />
                    <Route path="/location" element={<Location language={language} setLanguage={setLanguage}/>} />
                    <Route path="/slide" element={<SlideShow/>} />
                    
                </Routes>
            </div>
    );
};

export default RRoutes;
