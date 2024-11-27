import React, { useContext } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom"; // Importar el hook de navegación
import { AuthContext } from "../context/AuthContext"; // Asegúrate de que la ruta sea correcta
import logo from "../assets/logo.jpg"; // Importación de la imagen

const HomePage = () => {
  const { user } = useContext(AuthContext); // Obtener el usuario desde el contexto de autenticación
  const navigate = useNavigate(); // Hook para manejar la navegación

  // Función para manejar el clic en el botón de registro
  const handleRegisterClick = () => {
    if (user) {
      // Si el usuario está autenticado, lo redirigimos al perfil
      navigate("/perfil");
    } else {
      // Si el usuario no está autenticado, lo redirigimos a la página de login
      navigate("/login");
    }
  };

  return (
    <Container fluid className="mb-5 px-4">
      {/* Sección de encabezado con título y logo */}
      <Row className="align-items-center mb-5">
        <Col xs={12} md={6} className="mb-4 mb-md-0">
          <h1 className="fw-bold display-5 text-center text-md-start">
            Rutas 503
          </h1>
          <p className="lead text-muted text-center text-md-start">
            Rutas503, donde puedes conocer y planificar tus rutas disponibles en
            San Salvador. Encuentra información actualizada de las rutas,
            tarifas y horarios.
          </p>
          <div className="text-center text-md-start">
            <Button variant="primary" size="lg" onClick={handleRegisterClick}>
              Registro
            </Button>
          </div>
        </Col>
        <Col xs={12} md={6} className="text-center">
          <img
            src={logo} // Usar la variable importada que contiene la ruta de la imagen
            alt="logo"
            className="img-fluid"
            style={{ maxWidth: "80%" }}
          />
        </Col>
      </Row>

      {/* Sección de características y ventajas */}
      <Row className="justify-content-center mb-5">
        {/* Lista numerada de características */}
        <Col xs={12} lg={6} className="mb-4 mb-lg-0">
          <Card className="border-primary mb-3">
            <Card.Body>
              <Card.Title className="text-primary fw-bold">
                01 - Información en tiempo real
              </Card.Title>
              <Card.Text>
                Consulta las diferentes rutas con horarios actualizados y datos
                para facilitar tu trayecto.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="border-primary mb-3">
            <Card.Body>
              <Card.Title className="text-primary fw-bold">
                02 - Fácil de usar
              </Card.Title>
              <Card.Text>
                Nuestra interfaz intuitiva te ayudará a encontrar las rutas más
                fácilmente y te brindará información sobre ellas.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="border-primary">
            <Card.Body>
              <Card.Title className="text-primary fw-bold">
                03 - Personalización
              </Card.Title>
              <Card.Text>
                Guarda tus rutas favoritas y accede fácilmente a ellas en
                diferentes dispositivos.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* Lista de ventajas con íconos */}
        <Col xs={12} lg={6}>
          <div className="d-flex align-items-start mb-4">
            <span className="badge bg-primary p-3 rounded-circle me-3">💙</span>
            <div>
              <h5>Información de rutas confiables</h5>
              <p className="text-muted">
                Accede a rutas verificadas y confiables para un viaje seguro.
              </p>
            </div>
          </div>
          <div className="d-flex align-items-start mb-4">
            <span className="badge bg-warning p-3 rounded-circle me-3">⭐</span>
            <div>
              <h5>Sencillo y accesible para todos</h5>
              <p className="text-muted">
                Una experiencia diseñada para ser intuitiva y accesible.
              </p>
            </div>
          </div>
          <div className="d-flex align-items-start">
            <span className="badge bg-purple p-3 rounded-circle me-3">🔍</span>
            <div>
              <h5>Encuentra la ruta ideal en segundos</h5>
              <p className="text-muted">
                Planea tu viaje en poco tiempo con resultados precisos.
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;

// Explicación del Código
// 1. Importaciones:

//     React, { useContext }: Importa React y el hook useContext para acceder al contexto de autenticación.
//     Container, Row, Col, Button, Card de react-bootstrap: Componentes de la biblioteca react-bootstrap para estructurar y diseñar la página.
//     useNavigate de react-router-dom: Hook para gestionar la navegación entre diferentes páginas de la aplicación.
//     AuthContext: Contexto que proporciona información sobre el usuario autenticado, lo cual permite saber si un usuario está logueado o no.
//     logo: Imagen importada que representa el logo de la aplicación.

// 2. Estados y Funciones:

//     user: Se obtiene desde el AuthContext. Contiene la información sobre el usuario autenticado, si existe.
//     navigate: Se obtiene desde el hook useNavigate de React Router. Es utilizado para redirigir al usuario a diferentes páginas según su estado de autenticación.
//     handleRegisterClick: Esta función maneja el clic en el botón de "Registro". Si el usuario está autenticado, se redirige al perfil. Si no está autenticado, se redirige al login.

// 3. Renderizado del Componente:

//     Encabezado con título y logo:
//         Se muestra el título "Rutas 503" y una descripción breve de la aplicación, que explica su funcionalidad principal.
//         El botón de "Registro" permite al usuario navegar hacia la página de registro o perfil, dependiendo de si está autenticado o no.

//     Imagen: La imagen del logo se muestra en el lado derecho de la página, y su tamaño está restringido al 80% de su contenedor para adaptarse bien a la pantalla.

//     Características y Ventajas:
//         Lista de características: Se presentan tres características de la aplicación en tarjetas (Card):
//             Información en tiempo real: Se proporciona información actualizada de las rutas.
//             Fácil de usar: Se destaca la interfaz amigable.
//             Personalización: Permite a los usuarios guardar sus rutas favoritas.
//         Lista de ventajas: Se muestran tres ventajas utilizando íconos representativos (💙, ⭐, 🔍):
//             Rutas confiables: Acceso a rutas verificadas y seguras.
//             Sencillo y accesible: Una experiencia fácil de usar.
//             Encuentra la ruta ideal rápidamente: Encuentra la mejor ruta en segundos.

// 4. Diseño y Estilos:

//     La página está organizada en una estructura de grid utilizando Container, Row y Col de Bootstrap.
//     Se utiliza la clase img-fluid en la imagen para asegurar que se ajuste correctamente en pantallas de diferentes tamaños.
//     Botones y tarjetas con bordes y títulos en colores definidos para dar énfasis a las características y ventajas.
//     Los íconos en las ventajas están envueltos en un badge con colores distintivos, ayudando a resaltar cada ventaja de manera visual.
