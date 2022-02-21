import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';
import Categories from './pages/Categories';
import Home from './pages/Home';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/categories' element={<Categories />} />
    </Routes>
  );
}

export default App;
