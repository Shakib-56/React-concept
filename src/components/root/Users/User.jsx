import React, { Suspense, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import UserDetails2 from '../../UserDetails2/UserDetails2';

const User = ({user}) => {
    const [showInfo,setShowInfo]=useState(false);
    const {id,name,email,username}=user;
    // const navigate=useNavigate();
    // const handleNavigate=()=>{
    //     navigate(`/mobiles`);

    // }
    const UserPromise=fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(res=>res.json());
    return (
        <div>
            <div className='border-1 mt-2 rounded-2xl bg-gray-400 border-amber-200 p-5 text-center'>
                <p className='text-lg font-semibold'>User:{name}</p>
                <small className='text-sm font-bold'>User Name: {username}</small>
                <p className='underline text-red-500'>Email: {email}</p>
                <Link to={`/user/${id}`}>
                    <button className='bg-gray-100 rounded-2xl px-4 py-2'>Show Details</button>
                </Link>
                {/* <button className='px-4 ml-2 py-2 bg-black text-white rounded-2xl' onClick={handleNavigate}>Details of: {id}</button> */}
                <button className='px-4 ml-2 py-2 bg-black text-white rounded-2xl' onClick={()=>setShowInfo(!showInfo)}>{showInfo ?"Hide":"Show"} info</button>
                {
                    showInfo && <Suspense fallback={<span>Loading.....</span>}>
                        <UserDetails2 UserPromise={UserPromise}></UserDetails2>
                    </Suspense>
                }
            </div>
        </div>
    );
};

export default User;