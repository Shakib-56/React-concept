import React from 'react';
import { NavLink} from 'react-router';

const Header = () => {
    return (
        <div className='text-center my-20'>
            <h2>This ia header</h2>
            <nav className='space-x-2'>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/mobiles">Mobiles</NavLink>
                <NavLink to="/laptops">Laptops</NavLink>
                <NavLink to="/users">Users</NavLink>
            </nav>
        </div>
    );  
};

export default Header;