import React, { use } from 'react';

const Users2 = ({UsersPromise}) => {
    const data=use(UsersPromise)
    console.log(data);
    return (
        <div>
            i am user 2
        </div>
    );
};

export default Users2;