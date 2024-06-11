import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ChatRoom from './pages/ChatRoom';
import './App.css';

function App() {
  return (

    <Router >                
      <div className='App'>   
        <Routes>
          <Route path='/' exact Component={Home}/>    {/* Define una ruta para el componente Home */}
          <Route path='/chat-room' exact Component={ChatRoom}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
