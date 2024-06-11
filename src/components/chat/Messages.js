import React from 'react';
import Message from './Message';

const Messages = ({ messages }) => {
    return (
        
        <div className="messages">
            <ul>
                {messages.map((msg, index) => (
                    <li key={index}> <Message user={msg.nickName} text={msg.message} type='sent' status='read'/> </li>
                ))}
            </ul>
        </div>
    );
};


export default Messages;