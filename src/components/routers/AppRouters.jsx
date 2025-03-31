import React from 'react';
import Navbar from "../common/Navbar.jsx";
import {Route, Routes} from "react-router";
import Home from "../home/Home.jsx";
import About from "../about/About.jsx";

const AppRouters = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path='/' />
                <Route path='/home' element={<Home />}/>
                <Route path='/about' element={<About />}/>
            </Routes>


        </>

    );
};

export default AppRouters;