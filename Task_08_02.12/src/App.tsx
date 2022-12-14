import React from 'react';
import './App.css';
import Footer from './components/estaticos/footer/Footer';
import Navbar from './components/estaticos/navbar/Navbar';
import Sobre from './paginas/sobre/Sobre';
import Home from './paginas/home/Home';
import Equipe from './paginas/equipe/Equipe';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './paginas/login/Login';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/login' element={<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path='/cadastrousuario' element={<CadastroUsuario />} />
        <Route path='/sobre' element={<Sobre />} />
        <Route path='/equipe' element={<Equipe />} />
      </Routes>
      <Footer />
    </Router>

  );
}

export default App;
