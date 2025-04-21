import React from 'react';
import Header from './header/Header';
import { Outlet } from 'react-router';
import Footer from './Footer/Footer';
import Sidebar from './SideBar/Sidebar';


const Root = () => {
    return (
        <div>
            <Header></Header>
            <div className='flex my-20 justify-center gap-5'>
            <Sidebar></Sidebar>
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;