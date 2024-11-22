// src/components/Footer.jsx
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom'; // Importa el componente Link de react-router-dom

const Footer = () => {
  return (
    <footer className="footer bg-primary text-white py-4">
      <Container>
        <Row className="text-center">
          <Col md={4}>
            <h5>Rutas503</h5>
            <p>Accede a rutas verificadas y confiables para un viaje seguro.</p>
          </Col>
          <Col md={4}>
            <h5>Enlaces</h5>
            <ul className="list-unstyled">
              {/* Reemplaza <a> por <Link> */}
              <li>
                <Link to="/" className="text-white text-decoration-none">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/rutas" className="text-white text-decoration-none">
                  Rutas
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="text-white text-decoration-none">
                  Contacto
                </Link>
              </li>
            </ul>
          </Col>

          <Col md={4}>
            <h5>Síguenos</h5>
            <a href="https://facebook.com" className="text-white mx-2">
              <FaFacebook />
            </a>
            <a href="https://twitter.com" className="text-white mx-2">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" className="text-white mx-2">
              <FaInstagram />
            </a>
          </Col>
        </Row>
        <Row>
          <Col className="text-center mt-3">
            <p>© 2024 Rutas503. Todos los derechos reservados.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
