import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import LoginPage from "./pages/LoginPage";
import CreateAccountPage from "./pages/CreateAccountPage";
import ContactPage from "./pages/ContactPage";
import RutasPage from "./pages/RutasPage";
import Footer from "./components/Footer";
import { AuthProvider } from "./context/AuthContext"; // Proveedor de autenticación

const App = () => {
  return (
    <AuthProvider>
      {" "}
      {/* Proporciona el contexto de autenticación a toda la aplicación */}
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
  );
};

export default App;

// Desglose del Código
// 1. Importaciones:

//     React: Importa React para poder usar JSX y los hooks de React.
//     BrowserRouter, Routes, Route de react-router-dom: Son los componentes encargados de gestionar el enrutamiento dentro de la aplicación. BrowserRouter es el contenedor que maneja el historial de navegación, y Routes y Route son los que definen las rutas específicas.
//     Navbar y Footer: Son los componentes de la barra de navegación y el pie de página que se incluyen en cada página de la aplicación.
//     HomePage, ProfilePage, LoginPage, CreateAccountPage, ContactPage, RutasPage: Son las páginas que se mostrarán en las diferentes rutas.
//     AuthProvider: Es el proveedor que gestionará el contexto de autenticación a lo largo de toda la aplicación.

// 2. Estructura de la Aplicación:

//     AuthProvider: El componente AuthProvider envuelve toda la aplicación, proporcionando el contexto de autenticación a los componentes hijos. Esto permite a los componentes acceder al estado de autenticación globalmente mediante el hook useContext.

//     Router: El componente Router envuelve toda la aplicación y permite que React Router gestione las rutas. Es necesario para que el enrutamiento funcione correctamente.

//     Navbar: El componente Navbar se renderiza en todas las páginas y contiene los enlaces de navegación.

//     Routes y Route: Las rutas se definen dentro del componente Routes. Cada Route especifica una ruta URL y el componente que debe renderizarse cuando esa ruta es visitada.
//         Ruta principal (/): Redirige al componente HomePage, que será la página principal de la aplicación.
//         Ruta /perfil: Redirige al componente ProfilePage, donde el usuario puede ver y editar su perfil.
//         Ruta /login: Redirige al componente LoginPage, donde los usuarios pueden iniciar sesión.
//         Ruta /crear-cuenta: Redirige al componente CreateAccountPage, donde los usuarios pueden crear una nueva cuenta.
//         Ruta /contacto: Redirige al componente ContactPage, donde los usuarios pueden contactar con el soporte.
//         Ruta /rutas: Redirige al componente RutasPage, donde los usuarios pueden ver las rutas disponibles.

//     Footer: El componente Footer se renderiza después de las rutas, generalmente mostrando información adicional como derechos de autor o enlaces a políticas.

// 3. Funcionamiento del Enrutamiento:

//     Cuando el usuario navega por las diferentes URL de la aplicación, React Router gestiona la renderización del componente correspondiente sin recargar la página.
//     La URL que aparece en la barra de direcciones cambia según la ruta seleccionada, pero la página no se recarga (lo que hace que la aplicación sea una SPA, o Aplicación de Una Sola Página).

// 4. Contexto de Autenticación (AuthProvider):

//     El AuthProvider probablemente contiene el estado relacionado con el usuario autenticado (como el usuario actual), y proporciona funciones para autenticar al usuario y gestionarlo globalmente.
//     Al envolver toda la aplicación con AuthProvider, cualquier componente dentro de la aplicación puede acceder a la autenticación utilizando useContext(AuthContext).

// 5. Componentes de la Aplicación:

//     Navbar: Generalmente contiene enlaces de navegación que permiten al usuario moverse entre las distintas secciones de la aplicación.
//     Footer: Un pie de página comúnmente usado para información adicional, como derechos de autor, enlaces a la política de privacidad, etc.
//     Páginas de la Aplicación: Las páginas como HomePage, ProfilePage, LoginPage, etc., son componentes que contienen la lógica y la presentación para cada vista de la aplicación.

// Mejoras y Consideraciones:

//     Manejo de Redirecciones y Protección de Rutas:
//         Asegúrate de que las rutas como /perfil estén protegidas para usuarios autenticados. Si un usuario no está autenticado y trata de acceder a /perfil, sería bueno redirigirlo a la página de login.
//         Puedes hacer esto mediante un componente de Protección de Rutas que verifique si el usuario está autenticado antes de permitir el acceso.

//     Componente Navbar Dinámico:
//         Puedes cambiar el contenido de Navbar dependiendo de si el usuario está autenticado o no. Por ejemplo, si está autenticado, muestra un enlace al perfil y un botón de logout, si no lo está, muestra un enlace a login y registro.

//     Optimización de la Ruta /perfil:
//         Si la página de perfil tiene mucha información o lógica (como cargar datos del usuario o editar su perfil), es posible que desees cargar esa información solo después de que el usuario haya iniciado sesión.

//     Prueba de Navegación:
//         Asegúrate de probar la navegación en dispositivos móviles y con diferentes tamaños de pantalla para garantizar que el diseño se vea bien y sea funcional en todos los dispositivos.

//     SEO (Optimización para Motores de Búsqueda):
//         Aunque las SPA como esta generalmente no son amigables con el SEO de forma predeterminada, podrías considerar herramientas como React Helmet para gestionar los metadatos (como el título de la página y las descripciones) para mejorar el SEO de la aplicación.
