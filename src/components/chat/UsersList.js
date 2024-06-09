import React from 'react';

const UsersList = ({users}) => {
    return (
        <div className='users-list'>
            <h2>Usuarios</h2>
            <ul>
                {users.map(user => (
                    <li key={user.id}>{user.nickName}</li>
                ))}
            </ul>
        </div>
    );
};

export default UsersList