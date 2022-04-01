import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
/* import Dashboard from './Layout/Dashboard'; */
import Gedung from "./Pages/Gedung/index";
import Home from "./Pages/Home/index";
import Lantai from './Pages/Lantai/index.jsx';
import Dashboard from './Layout/Dashboard';

function App() {
  return (
    <BrowserRouter>
    <Dashboard>
      
      <Routes>
        <Route exact path='/' element={<Home />} />
          <Route exact path='/gedung' element={<Gedung />} />
          <Route exact path='Lantai/*' element={<Lantai/>} />
      </Routes>
    </Dashboard>
    </BrowserRouter>
  );
};

export default App;