
import React from 'react';
import "./assets/css/main.css";
import Medicine from './components/Medicine/Medicine';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RoaForte from './components/Roa-Forte/Roa-Forte';
import Navbar from './components/Navbar/Navbar';
import NTcuffDetails from './components/Nt-cuff/NTcuff';
import Shhe from './components/Shhe/shhe';
import Ntzyme from './components/Ntzyme/Ntzyme';
import Vvgold from './components/Vvgold/Vvgold';
import Medam from './components/Medam/Medam';
import Laxc from './components/Laxc/Laxc';
import H2liv from './components/H2liv/H2liv';
import Haempure from './components/Haempure/Haempure';
import Flowrine from './components/Flowrine/Flowrine';
import Aloefit from './components/Aloefit/Aloefit';

function App() {
  return (
    <div>
      <Navbar/>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Medicine />} />
        <Route path="/Nt-cuff" element={<NTcuffDetails />} />
        <Route path="/Roa-Forte" element={<RoaForte />} />
        <Route path="/shhe" element={<Shhe />} />
        <Route path="/ntzyme" element={<Ntzyme />} />
        <Route path="/vvgold" element={<Vvgold />} />
        <Route path="/medam" element={<Medam />} />
        <Route path="/laxc" element={<Laxc />} />
        <Route path="/h2liv" element={<H2liv />} />
        <Route path="/haempure" element={<Haempure />} />
        <Route path="/flowrine" element={<Flowrine />} />
        <Route path="/aloefit" element={<Aloefit />} />
        
      </Routes>
    </BrowserRouter>
     
    </div>
    
  );
}

export default App;
