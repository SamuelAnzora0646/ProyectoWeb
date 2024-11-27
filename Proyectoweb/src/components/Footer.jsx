// src/components/Footer.jsx
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom"; // Importa el componente Link de react-router-dom

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
                <Link
                  to="/contacto"
                  className="text-white text-decoration-none"
                >
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

// Explicación del Código:

//     Importaciones:
//         React: Importas React porque este es un componente de React.
//         Container, Row, Col de react-bootstrap: Son componentes de Bootstrap que ayudan a estructurar el diseño de manera responsive y ordenada.
//         FaFacebook, FaTwitter, FaInstagram de react-icons/fa: Estas son iconos de redes sociales importados desde la librería react-icons.
//         Link de react-router-dom: Este componente se utiliza para la navegación entre páginas en una aplicación React, sin hacer una recarga completa de la página.

//     Componente Footer:

//         Este es un componente funcional que representa el pie de página de la página web.

//         El pie de página (<footer>) tiene un fondo azul (bg-primary), texto blanco (text-white) y un padding vertical de 4 unidades (py-4).

//         Dentro del <footer>:
//             <Container>: Contenedor general que agrupa el contenido de manera que se alinee adecuadamente en dispositivos móviles y de escritorio.
//             <Row>: Agrupa columnas, y en este caso, se usa para organizar tres secciones:
//                 Primera columna: Muestra el nombre del sitio (Rutas503) y una pequeña descripción.
//                 Segunda columna: Muestra una lista de enlaces de navegación que usan el componente <Link> de React Router en lugar de un <a> tradicional. Esto permite la navegación interna de la app sin recargar la página.
//                 Tercera columna: Muestra los iconos de redes sociales (Facebook, Twitter, Instagram), los cuales están configurados para redirigir al usuario a las respectivas páginas de esas redes.

//         <Row> al final: Esta fila contiene un texto centrado que indica los derechos reservados de la página.

//     Estilos:
//         Los estilos de las clases bg-primary, text-white, py-4, text-center, mx-2, list-unstyled, entre otros, son clases de Bootstrap que facilitan la creación de una interfaz responsiva y con buen diseño sin tener que escribir mucho CSS personalizado.
