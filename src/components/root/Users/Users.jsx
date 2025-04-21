import React from 'react';
import { useLoaderData } from 'react-router';

const Users = () => {
    const data=useLoaderData();
    console.log(data);
    return (
        <div>
            
        </div>
    );
};

export default Users;