import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import LoginPage from './pages/LoginPage';
import CreateAccountPage from './pages/CreateAccountPage';
import ContactPage from './pages/ContactPage';
import RutasPage from './pages/RutasPage';
import RutaDetailPage from './pages/RutaDetailPage';
import Footer from './components/Footer';
import { AuthProvider } from './context/AuthContext'; // Asegúrate de importar el AuthProvider

const App = () => {
  return (
    <AuthProvider> {/* Envolver la aplicación con AuthProvider */}
      <Router>
        <Navbar /> {/* Navbar ahora usa el AuthContext directamente */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/perfil" element={<ProfilePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/crear-cuenta" element={<CreateAccountPage />} />
          <Route path="/contacto" element={<ContactPage />} />
          <Route path="/rutas" element={<RutasPage />} />
          <Route path="/ruta/:id" element={<RutaDetailPage />} />
        </Routes>
        <Footer />
      </Router>
    </AuthProvider>
  );
};

export default App;
