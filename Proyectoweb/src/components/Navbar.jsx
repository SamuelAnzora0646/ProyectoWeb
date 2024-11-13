import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import { FaBus, FaMapMarkedAlt, FaInfoCircle } from 'react-icons/fa';

const NavbarComponent = ({ isLoggedIn }) => {
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
          {isLoggedIn ? (
            <Link to="/perfil" className="nav-link">
              Perfil
            </Link>
          ) : (
            <Link to="/login" className="nav-link">Login</Link>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;
