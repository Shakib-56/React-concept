import React from 'react';
import { Link } from 'react-router';

const User = ({user}) => {
    const {id,name,email,username}=user;
    return (
        <div>
            <div className='border-1 mt-2 rounded-2xl bg-gray-400 border-amber-200 p-5 text-center'>
                <p className='text-lg font-semibold'>User:{name}</p>
                <small className='text-sm font-bold'>User Name: {username}</small>
                <p className='underline text-red-500'>Email: {email}</p>
                <Link to={`/user/${id}`}>Show Details</Link>
            </div>
        </div>
    );
};

export default User;