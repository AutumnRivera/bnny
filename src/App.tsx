import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

import About from './Components/Pages/About';
import Bnny from './Components/Pages/Bnny';
import Footer from './Components/Features/Footer';
import Home from './Components/Pages/Home';
import NavBar from './Components/Features/Navbar';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/bnny" element={<Bnny />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
