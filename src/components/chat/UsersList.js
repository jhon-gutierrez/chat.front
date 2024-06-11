import React from 'react';

const UsersList = ({users}) => {
    return (
        <div className='user-list'>
            <div className='user-header'> 
                <h2>Usuarios conectados</h2>
            </div>
            
            <ul>
                {users.map(user => (
                    <li key={user.id}>{user.nickName}</li>
                ))}
            </ul>
        </div>
    );
};

export default UsersList