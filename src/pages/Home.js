import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Chat.css';
import constants from '../utils/constants';
import { createUser } from '../services/userService';

const Home = () => {
  const [user, setUser] = useState('');
  const navigate = useNavigate();

  const loginChat = async () => {
    try {
        const result = await createUser({nickName: user});
        if(result.status === constants.STATUSES.OK){
          navigate('/chat-room');
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
            value={user}
            onChange={(e) => setUser(e.target.value)}
            placeholder="   Digita tu usuario"
          />
          <br></br>
          <br></br>
          <button onClick={loginChat}>Ingresar</button>
          <p>¿Nesecitas ayuda?</p>
        </div>

      </header>
    </div>
  );
};

export default Home;