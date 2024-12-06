import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Page1 from './Pages/Page1';
import Page2 from './Pages/Page2';

const App = () => {


  return (
    <>
      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="/page" element={<Page2 />} />
       
      </Routes>
    </>
  );
}

export default App;
