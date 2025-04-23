import React from 'react';
import { useLoaderData } from 'react-router';
import User from './User';

const Users = () => {
    const data=useLoaderData();
    console.log(data);
    return (
        <div className=' max-w-4xl grid grid-cols-3 gap-4'>
            {data.map((user,index)=><User index={index} user={user}></User>)}
        </div>
    );
};

export default Users;