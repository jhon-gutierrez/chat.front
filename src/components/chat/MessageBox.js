import React from 'react';

const MessageBox = ({handleSendMessage, message , setMessage}) => {

    return (
        <div onSubmit={handleSendMessage} className='message-input'>
            <input
                type='text'
                value={message}
                placeholder="Ingrese su mensaje"
                onChange={(e) => setMessage(e.target.value)}
            />
            <button type='button' onClick={handleSendMessage}>Enviar</button>
        </div>
    );
};

export default MessageBox;