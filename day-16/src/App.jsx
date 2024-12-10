import React, { useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home'
import About from './Components/About';
import Sports from './Components/Sports';
import Education from './Components/Education';



function App() {
 
  

  return (
  <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/blog/sports' element={<Sports/>}/>
      <Route path='/blog/education' element={<Education/>}/>
    </Routes>
  </>
  );
}

export default App;















