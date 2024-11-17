import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const LoginPage = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    onLogin(); // Llama a onLogin para actualizar el estado de login en App.js
    navigate('/perfil'); // Redirige al perfil después de iniciar sesión
  };

  const handleCreateAccount = () => {
    navigate('/crear-cuenta'); // Redirige a la página de creación de cuenta
  };

  return (
    <Container fluid className="d-flex justify-content-center align-items-center my-5 bg-light">
      <Row className="w-100">
        <Col xs={12} md={6} lg={4} className="mx-auto">
          <Card className="shadow-sm border-0">
            <Card.Body>
              <h2 className="text-center mb-4">Iniciar sesión</h2>
              <Form onSubmit={handleLogin}>
                <Form.Group controlId="formEmail" className="mb-3">
                  <Form.Label>Correo electrónico</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Ingresa tu correo"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formPassword" className="mb-4">
                  <Form.Label>Contraseña</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Ingresa tu contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100 py-2 mb-3">
                  Iniciar sesión
                </Button>
              </Form>

              <Button
                variant="link"
                onClick={handleCreateAccount}
                className="w-100 text-center text-decoration-none"
              >
                ¿No tienes una cuenta? Crear cuenta
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={6} lg={8} className="d-flex justify-content-center align-items-center my-3">
          <div className="text-center">
            <img 
              src="../../public/LOGO RUTAS 503.jpg"
              alt="Imagen de bienvenida"
              className="img-fluid"
              style={{ maxWidth: '80%' }}
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
