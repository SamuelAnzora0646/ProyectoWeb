import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // Importar el hook de navegación

const HomePage = () => {
  const navigate = useNavigate(); // Hook para manejar la navegación

  // Función para manejar el clic en el botón
  const handleRegisterClick = () => {
    navigate('/login'); // Cambiar la ruta a "/login"
  };

  return (
    <Container fluid className="mb-5 px-4">
      {/* Sección de encabezado con título y logo */}
      <Row className="align-items-center mb-5">
        <Col xs={12} md={6} className="mb-4 mb-md-0">
          <h1 className="fw-bold display-5 text-center text-md-start">Rutas 503</h1>
          <p className="lead text-muted text-center text-md-start">
            Rutas503, donde puedes conocer y planificar tus rutas disponibles en San Salvador. Encuentra información actualizada de las rutas, tarifas y horarios.
          </p>
          <div className="text-center text-md-start">
            <Button variant="primary" size="lg" onClick={handleRegisterClick}>
              Registro
            </Button>
          </div>
        </Col>
        <Col xs={12} md={6} className="text-center">
          <img
            src="../../public/LOGO RUTAS 503.jpg"
            alt="Logo Rutas 503"
            className="img-fluid"
            style={{ maxWidth: '80%' }}
          />
        </Col>
      </Row>

      {/* Sección de características y ventajas */}
      <Row className="justify-content-center mb-5">
        {/* Lista numerada de características */}
        <Col xs={12} lg={6} className="mb-4 mb-lg-0">
          <Card className="border-primary mb-3">
            <Card.Body>
              <Card.Title className="text-primary fw-bold">01 - Información en tiempo real</Card.Title>
              <Card.Text>
                Consulta las diferentes rutas con horarios actualizados y datos para facilitar tu trayecto.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="border-primary mb-3">
            <Card.Body>
              <Card.Title className="text-primary fw-bold">02 - Fácil de usar</Card.Title>
              <Card.Text>
                Nuestra interfaz intuitiva te ayudará a encontrar las rutas más fácilmente y te brindará información sobre ellas.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="border-primary">
            <Card.Body>
              <Card.Title className="text-primary fw-bold">03 - Personalización</Card.Title>
              <Card.Text>
                Guarda tus rutas favoritas y accede fácilmente a ellas en diferentes dispositivos.
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
              <p className="text-muted">Accede a rutas verificadas y confiables para un viaje seguro.</p>
            </div>
          </div>
          <div className="d-flex align-items-start mb-4">
            <span className="badge bg-warning p-3 rounded-circle me-3">⭐</span>
            <div>
              <h5>Sencillo y accesible para todos</h5>
              <p className="text-muted">Una experiencia diseñada para ser intuitiva y accesible.</p>
            </div>
          </div>
          <div className="d-flex align-items-start">
            <span className="badge bg-purple p-3 rounded-circle me-3">🔍</span>
            <div>
              <h5>Encuentra la ruta ideal en segundos</h5>
              <p className="text-muted">Planea tu viaje en poco tiempo con resultados precisos.</p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
