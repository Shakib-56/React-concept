import React from 'react';
import Header from './header/Header';
import { Outlet, useNavigation } from 'react-router';
import Footer from './Footer/Footer';
import Sidebar from './SideBar/Sidebar';


const Root = () => {
    const navigation = useNavigation();
    const isNavigating = Boolean(navigation.location);


    return (
        <div>
            <Header></Header>
            <div className='flex my-20 justify-center gap-5'>
            <Sidebar></Sidebar>
            {isNavigating && <span className='mx-auto text-center text-2xl'>Loading.....</span>}
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;