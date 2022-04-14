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
import {AuthProvider, Butuhlogin} from './Components/Auth/AuthContext';

function App() {
  return (
    <AuthProvider>

    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Butuhlogin><Dashboard /></Butuhlogin>} >
          <Route exact path='/home' element={<Home />} />
          <Route exact path='/gedung' element={<Gedung />} />
          <Route path='lantai' element={<Lantai/>} />
          <Route exact path='/context' element={<CountProvider/>} />
          <Route exach path='/gedungcontext' element={<GedungProvider><GedungContext/></GedungProvider>} />
          <Route exach path='/lantaicontext' element={<LantaiProvider><LantaiContext/></LantaiProvider> }/>
      </Route>
      <Route exact path='/login' element={<Login />} />
    </Routes>
    </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
