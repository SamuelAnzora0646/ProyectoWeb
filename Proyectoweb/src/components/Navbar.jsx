import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import { FaBus, FaMapMarkedAlt, FaInfoCircle } from "react-icons/fa";
import { AuthContext } from "../context/AuthContext"; // Importar el contexto

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
            <Link to="/login" className="nav-link">
              Iniciar sesión
            </Link>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;

// Explicación del Código:

//     Importaciones:
//         React, { useContext }: Importas React y el hook useContext para acceder al contexto de autenticación.
//         Link de react-router-dom: Este componente se utiliza para la navegación entre las diferentes páginas de la aplicación.
//         Navbar, Nav de react-bootstrap: Son componentes de Bootstrap que permiten crear una barra de navegación con un diseño responsivo.
//         FaBus, FaMapMarkedAlt, FaInfoCircle de react-icons/fa: Importas los iconos que se usarán en los enlaces de navegación.
//         AuthContext: Importas el contexto de autenticación donde se guarda el estado del usuario, para saber si está autenticado o no.

//     Componente NavbarComponent:
//         Acceso al contexto: Dentro del componente, usas el hook useContext para acceder al contexto de autenticación (AuthContext). De esta manera, obtienes el objeto user, que indica si el usuario está autenticado.

//     Estructura del Componente:
//         <Navbar>: Este es el contenedor principal de la barra de navegación. Tiene un fondo azul (bg="primary"), y se expande de manera responsiva gracias a expand="lg". La clase px-5 añade un padding horizontal.
//         <Navbar.Brand>: Este es el logotipo de la aplicación. Usas el componente Link para que, al hacer clic, el usuario sea redirigido a la página principal. El logotipo incluye un icono de autobús (<FaBus />) y el nombre de la aplicación, "Rutas503".
//         <Navbar.Toggle>: Este botón permite alternar el menú de navegación en pantallas pequeñas (cuando la barra de navegación se colapsa).
//         <Navbar.Collapse>: Este contenedor agrupa los elementos del menú de navegación y los oculta o muestra dependiendo del tamaño de la pantalla.
//         <Nav>: Este componente contiene todos los enlaces de navegación. Los enlaces utilizan Link de React Router, lo que asegura que la navegación sea fluida sin recargar la página.
//             Enlaces de navegación:
//                 Inicio: Enlace a la página principal (/), con un icono de mapa.
//                 Rutas: Enlace a la página de rutas (/rutas), con un icono de autobús.
//                 Contacto: Enlace a la página de contacto (/contacto), con un icono de información.

//     Condicionales basados en el estado de autenticación:
//         Si el usuario está autenticado: Si el objeto user existe (es decir, el usuario está logueado), se muestra un enlace al perfil del usuario (/perfil).
//         Si el usuario no está autenticado: Si user es null o no está definido (es decir, el usuario no ha iniciado sesión), se muestra el enlace para iniciar sesión (/login).

//     Renderizado del Componente:
//         Finalmente, se renderiza la barra de navegación con todos los enlaces. La estructura se adapta automáticamente para pantallas grandes y pequeñas gracias a las clases de Bootstrap.

// Flujo del Componente:

//     El componente NavbarComponent utiliza el hook useContext para acceder al contexto de autenticación (AuthContext).
//     Dependiendo de si user está presente o no (si el usuario está logueado o no), se mostrarán diferentes enlaces de navegación:
//         Si el usuario está autenticado, se mostrará el enlace al perfil.
//         Si el usuario no está autenticado, se mostrará el enlace para iniciar sesión.
//     Los enlaces de navegación permiten al usuario acceder a las diferentes páginas de la aplicación, como "Inicio", "Rutas" y "Contacto".
//     Se utiliza el componente Navbar de Bootstrap para estructurar y diseñar la barra de navegación de manera responsiva.
