import React from 'react';
import { use } from 'react';

const UserDetails2 = ({UserPromise}) => {
    const user=use(UserPromise);
    console.log(user);
    const {name,phone}=user;
    return (
        <div>
        <h1>Name: {name}</h1>
        <p>Phone: {phone} </p>
        </div>
    );
};

export default UserDetails2;