import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import LoginPage from './pages/LoginPage';
import CreateAccountPage from './pages/CreateAccountPage';
import ContactPage from './pages/ContactPage'; // Página de contacto
import RutasPage from './pages/RutasPage'; // Página de rutas
import RutaDetailPage from './pages/RutaDetailPage'; // Página de detalle de ruta
import Footer from './components/Footer';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <Navbar isLoggedIn={isLoggedIn} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/perfil" element={<ProfilePage onLogout={handleLogout} />} />
        <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
        <Route path="/crear-cuenta" element={<CreateAccountPage />} />
        <Route path="/contacto" element={<ContactPage />} />
        <Route path="/rutas" element={<RutasPage />} />
        {/* Ruta para los detalles de la ruta */}
        <Route path="/ruta/:id" element={<RutaDetailPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
