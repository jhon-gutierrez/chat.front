import React from 'react';

const Messages = ({ messages }) => {
    return (
        <div>
            <h2>Mensajes</h2>
            <ul>
                {messages.map((msg, index) => (
                    <li key={index}><strong>{msg.nickName}:</strong> {msg.message}</li>
                ))}
            </ul>
        </div>
    );
};

export default Messages;