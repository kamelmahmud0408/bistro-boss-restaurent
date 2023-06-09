import React from 'react';
import { Outlet, useLocation } from "react-router-dom";
import Footer from '../pages/Sheared/Footer/Footer';
import Navbar from '../pages/Sheared/Navbar/Navbar';

const Main = () => {
    const location =useLocation()
    const noHeaderFooter= location.pathname.includes('login')
    return (
        <div>
            { noHeaderFooter || <Navbar></Navbar>}
            <Outlet></Outlet>
           {noHeaderFooter ||  <Footer></Footer>}
        </div>
    );
};

export default Main;