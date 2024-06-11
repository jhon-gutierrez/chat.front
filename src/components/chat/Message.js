import React from 'react';

const Message = ({ user, text, type, status }) => {
    return (
        <div className={`message ${type}`}>

            <p><strong> {user}: </strong> {text} </p>

            <div className={`status ${status}`}>

                {status === 'read' ? (
                    <svg viewBox="0 0 24 24">
                        <path d="M10 17l-4-4 1.41-1.41L10 14.17l7.59-7.59L19 8m-9 9l-4-4 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                    </svg>
                ) : (
                    <svg viewBox="0 0 24 24">
                        <path d="M10 17l-4-4 1.41-1.41L10 14.17l7.59-7.59L19 8m-9 9l-4-4 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                    </svg>
                )}

            </div>
        </div>
    );
};

export default Message;