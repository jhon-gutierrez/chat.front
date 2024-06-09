import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './pages.css';
import { createUser } from '../services/userService';
import constants from '../utils/constants';

const Home = () => {
  const [nickName, setNickName] = useState('');
  const navigate = useNavigate();

  const joinChat = async (e) => {
    e.preventDefault();
    try {
      const result = await createUser({ nickName });
      if (result.status === constants.STATUSES.OK) {
        navigate(`/chat-room?nickname=${nickName}`);
      }
    } catch (error) {
      console.log(error)
    }

  };

  return (
    <div className="Chat">
      <header className="Chat-header">
        <div className="BoxMain">
          <h1>Chat online</h1>
          <h4>SDH Inc.</h4>
          <input
            type="text"
            value={nickName}
            onChange={(e) => setNickName(e.target.value)}
            placeholder="   Digita tu usuario"
          />
          <br />
          <br />
          <button onClick={joinChat}>Ingresar</button>
          <p>¿Nesecitas ayuda?</p>
        </div>

      </header>
    </div>
  );
};

export default Home;