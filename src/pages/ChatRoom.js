import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { connectSocket, disconnectSocket, onEvent, emitEvent } from '../services/socketService';
import UsersList from '../components/chat/UsersList';
import Messages from '../components/chat/Messages';
import MessageBox from '../components/chat/MessageBox';
import './pages.css';

const Chatroom = () => {
  const [users, setUsers] = useState([]);
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const nickName = params.get('nickname');

  useEffect(() => {
    connectSocket();

    onEvent('userList', (userList) => {
      setUsers(userList);
    });

    onEvent('receiveMessage', (msg) => {
      setMessages((prevMessages) => [...prevMessages, msg]);
    });

    emitEvent('joinChat', nickName);

    return () => disconnectSocket();
  }, []);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message) {
      emitEvent('sendMessage', { nickName, message });
      setMessage('');
    }
  };
  return (


    <div class="chat-container">
    
      {users.length &&<UsersList users={users} />}
   
      <div class="chat-content">
        <div class="message-history">
          {messages && <Messages messages={messages} /> }
        </div>        
        <MessageBox  handleSendMessage={handleSendMessage} message={message} setMessage={setMessage} />        
      </div>
    </div>
  );
};

export default Chatroom;