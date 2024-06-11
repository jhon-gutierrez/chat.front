import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ChatRoom from './pages/ChatRoom';
import './App.css';

function App() {
  return (

    <Router >                {/*Envuelve la aplicación para habilitar la funcionalidad de enrutamiento*/}
      <div className='App'>   {/* Define las rutas de la aplicación */}
        <Routes>
          <Route path='/' exact Component={Home}/>    {/* Define una ruta para el componente Home */}
          <Route path='/chat-room' exact Component={ChatRoom}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
