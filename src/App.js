import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} 
from "react-router-dom";
import Gedung from "./Pages/Gedung/index";
import Home from "./Pages/Home/index";
import Lantai from './Pages/Lantai/index.jsx';
import Dashboard from './Layout/Dashboard';
import CountProvider from './Pages/ComContext/index';
import GedungContext  from './Pages/GedungContext';
import { GedungProvider } from './Pages/GedungContext/Context';
import { LantaiProvider } from './Pages/LantaiContext/Context';
import LantaiContext from './Pages/LantaiContext';
import Login from './Login/Login';

function App() {
  return (
    <BrowserRouter>
    <Dashboard>
      <Routes>
        <Route exact path='/' element={<Home />} />
          <Route exact path='/gedung' element={<Gedung />} />
          <Route exact path='lantai/*' element={<Lantai/>} />
          <Route exact path='/context' element={<CountProvider/>} />
          <Route extach path='/gedungcontext' element={<GedungProvider><GedungContext/></GedungProvider>} />
          <Route extach path='/lantaicontext' element={<LantaiProvider><LantaiContext/></LantaiProvider> }/> 
      </Routes>
    </Dashboard>
    <Routes>
      <Route extach path='/' element={<Login />} />
    </Routes>
    </BrowserRouter>
  );
};

export default App;
