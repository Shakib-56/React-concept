import React from 'react';
import { useLoaderData } from 'react-router';
import User from './User';

const Users = () => {
    const data=useLoaderData();
    console.log(data);
    return (
        <div>
            {data.map((user,index)=><User index={index} user={user}></User>)}
        </div>
    );
};

export default Users;