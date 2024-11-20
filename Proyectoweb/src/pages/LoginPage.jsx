import React, { useState, useContext } from 'react';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext'; // Asegúrate de que la ruta sea correcta
import { signInWithPopup } from 'firebase/auth'; // Necesitamos esta función de Firebase
import { auth, googleProvider } from '../firebaseConfig';  // Importa el googleProvider desde firebaseConfig

const LoginPage = () => {
  const { login } = useContext(AuthContext); // Usamos el login desde el contexto
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null); // Para manejar errores
  const navigate = useNavigate();

  // Función para manejar el inicio de sesión con Google
  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      // Aquí se podría guardar el usuario en el contexto o realizar alguna otra acción
      // Ejemplo: setUser(user);

      navigate('/perfil'); // Redirige al perfil después de iniciar sesión
    } catch (err) {
      setError("Hubo un error al iniciar sesión con Google.");
      console.error(err);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await login(email, password); // Llamada al login desde el contexto
      navigate('/perfil'); // Redirige al perfil después de iniciar sesión
    } catch (err) {
      setError("Correo o contraseña incorrectos. Inténtalo de nuevo."); // Manejo de error claro
    }
  };

  const handleCreateAccount = () => {
    navigate('/crear-cuenta'); // Redirige a la página de creación de cuenta
  };

  return (
    <Container fluid className="d-flex justify-content-center align-items-center my-5 bg-light">
      <Row className="w-100">
        {/* Columna para el formulario */}
        <Col xs={12} md={6} lg={4} className="d-flex justify-content-center align-items-center my-3">
          <Card className="shadow-sm border w-100">
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

                {error && <div className="alert alert-danger mb-3">{error}</div>} {/* Mostrar errores */}

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

              {/* Botón para iniciar sesión con Google */}
              <Button
                variant="outline-success"
                onClick={handleGoogleLogin}
                className="w-100 mt-3"
              >
                Iniciar sesión con Google
              </Button>
            </Card.Body>
          </Card>
        </Col>

        {/* Columna para la imagen */}
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
