import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pags/home';
import Login from './pags/login';
import Registro from './pags/register';
import Pag1 from './pags/pag1';
import Perfil from './pags/perfil';
import Docs from './pags/docs';
import Creardocs from './pags/creardoc';



function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registro />} />
          <Route path="/pag1" element={<Pag1 />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/docs" element={<Docs />} />
          <Route path="/creardoc" element={<Creardocs/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
