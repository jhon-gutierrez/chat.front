import React from 'react';

const MessageBox = ({ handleSendMessage, message , setMessage}) => {
    return (
        <div onSubmit={handleSendMessage} className='message-input'>
            <input
                type='text'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Ingrese su mensaje"
            />
            <button type='button' onClick={handleSendMessage}>Enviar</button>
        </div>
    );
};

export default MessageBox;