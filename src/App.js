import React from 'react';
import './App.css';
import Navbar from './Navbar';
import { BrowserRouter as Router, Routes, Route}
  from 'react-router-dom';
import Home from './pages/home';
import About from './pages/aboutus';
import Rooms from './pages/rooms';
import Signin from './pages/signin';
import Register from './register.js';

function App() {
  return (
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/home' exact element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/rooms' element={<Rooms/>}/>
          <Route path='/sign-in' element={<Signin/>}/>
          <Route path='/register' element={<Register/>}/>

        </Routes>
      </Router>
  );
}

export default App;