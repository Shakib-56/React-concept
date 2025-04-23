import React from 'react';
import { useLoaderData } from 'react-router';

const UserDetails = () => {
    const userData=useLoaderData();
    const {name,phone,website}=userData;
    console.log(userData);
    return (
        <div className='bg-gray-500 p-6 rounded-3xl text-white'>
            <h3>User Details here</h3>
            <h5>Name: {name}</h5>
            <p>Website: {website}</p>
            <p>Phone:{phone}</p>
        </div>
    );
};

export default UserDetails;