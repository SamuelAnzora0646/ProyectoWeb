import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import LoginPage from './pages/LoginPage';
import CreateAccountPage from './pages/CreateAccountPage';
import ContactPage from './pages/ContactPage';
import RutasPage from './pages/RutasPage';
import Footer from './components/Footer';
import { AuthProvider } from './context/AuthContext'; // Proveedor de autenticación

const App = () => {
  return (
    <AuthProvider> {/* Proporciona el contexto de autenticación a toda la aplicación */}
      <Router>
        <Navbar /> {/* Barra de navegación */}
        <Routes>
          {/* Página principal */}
          <Route path="/" element={<HomePage />} />
          
          {/* Rutas adicionales */}
          <Route path="/perfil" element={<ProfilePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/crear-cuenta" element={<CreateAccountPage />} />
          <Route path="/contacto" element={<ContactPage />} />
          <Route path="/rutas" element={<RutasPage />} />
        </Routes>
        <Footer /> {/* Pie de página */}
      </Router>
    </AuthProvider>
  );};

export default App;
