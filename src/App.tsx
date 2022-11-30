import React from 'react';
import './App.css';
import Footer from './components/estaticos/footer/Footer';
import Navbar from './components/estaticos/navbar/Navbar';
import Sobre from './paginas/sobre/Sobre';
import Contato from './paginas/contato/Contato';
import Equipe from './paginas/equipe/Equipe';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Sobre />} />
        <Route path='/contato' element={<Contato />} />
        <Route path='/equipe' element={<Equipe />} />
      </Routes>
      <Footer />
    </Router>

  );
}

export default App;
