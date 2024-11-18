import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import { FaBus, FaMapMarkedAlt, FaInfoCircle } from 'react-icons/fa';
import { AuthContext } from '../context/AuthContext'; // Importar el contexto

const NavbarComponent = () => {
  const { user } = useContext(AuthContext); // Usar el contexto para obtener el estado de autenticación

  return (
    <Navbar bg="primary" expand="lg" className="px-5">
      <Navbar.Brand as={Link} to="/" className="text-secondary">
        <FaBus /> Rutas503
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Link to="/" className="nav-link">
            <FaMapMarkedAlt /> Inicio
          </Link>
          <Link to="/rutas" className="nav-link">
            <FaBus /> Rutas
          </Link>
          <Link to="/contacto" className="nav-link">
            <FaInfoCircle /> Contacto
          </Link>
          {user ? (
            // Si el usuario está logueado, mostrar el enlace al perfil
            <Link to="/perfil" className="nav-link">
              Perfil
            </Link>
          ) : (
            // Si el usuario no está logueado, mostrar el enlace de login
            <Link to="/login" className="nav-link">Iniciar sesión</Link>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;
