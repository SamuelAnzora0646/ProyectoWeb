import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { FaBus, FaMapMarkedAlt, FaInfoCircle } from "react-icons/fa";

const NavbarComponent = () => {
  return (
    <Navbar bg="primary" expand="lg" className="px-5">
      <Navbar.Brand href="#home" className="text-secondary">
        <FaBus /> Rutas503
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-white text-secondary"/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link href="#home" className="p-2 ms-4 ">
            <FaMapMarkedAlt /> Inicio
          </Nav.Link>
          <Nav.Link href="#rutas" className="p-2 ms-4">
            <FaBus /> Rutas
          </Nav.Link>
          <Nav.Link href="#contacto" className="p-2 ms-4">
            <FaInfoCircle /> Contacto
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;
