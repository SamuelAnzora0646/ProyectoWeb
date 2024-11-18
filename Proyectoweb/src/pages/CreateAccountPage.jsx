import React, { useState, useContext } from "react";
import { Form, Button, Container, Row, Col, Alert } from "react-bootstrap";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { AuthContext } from '../context/AuthContext'; // Importa el contexto
import { useNavigate } from 'react-router-dom'; // Importa useNavigate
import { FaSignInAlt } from 'react-icons/fa'; // Ícono de "Iniciar sesión"

const CreateAccountPage = () => {
  const { setUser } = useContext(AuthContext); // Función para actualizar el estado del usuario
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(""); // Estado para errores
  const [successMessage, setSuccessMessage] = useState(""); // Estado para el mensaje de éxito
  const navigate = useNavigate(); // Hook para redirigir a otras páginas

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Verificar que las contraseñas coincidan
    if (password !== confirmPassword) {
      setError("Las contraseñas no coinciden.");
      setSuccessMessage(""); // Limpiar mensaje de éxito
      return;
    }

    try {
      // Crear el usuario en Firebase
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const newUser = userCredential.user;

      // Actualizar el estado del usuario en el contexto
      setUser(newUser);

      // Mostrar mensaje de éxito
      setSuccessMessage("Cuenta creada con éxito");
      setError(""); // Limpiar cualquier mensaje de error

      // Redirigir al perfil automáticamente después de crear la cuenta
      setTimeout(() => {
        navigate('/perfil');
      }, 2000); // Espera 2 segundos para mostrar el mensaje antes de redirigir
    } catch (error) {
      console.error("Error al crear cuenta:", error.message);

      // Manejo de errores
      if (error.code === 'auth/email-already-in-use') {
        setError("Este correo electrónico ya está registrado.");
      } else {
        setError("Hubo un error al crear la cuenta.");
      }

      setSuccessMessage(""); // Limpiar mensaje de éxito
    }
  };

  const handleGoToLogin = () => {
    // Redirige al LoginPage
    navigate('/login');
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col xs={12} md={6}>
          <h2>Crear cuenta</h2>
          
          {/* Mostrar el mensaje de error o éxito */}
          {error && <Alert variant="danger">{error}</Alert>}
          {successMessage && <Alert variant="success">{successMessage}</Alert>}

          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formEmail">
              <Form.Label>Correo electrónico</Form.Label>
              <Form.Control
                type="email"
                placeholder="Ingresa tu correo"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formPassword" className="mt-3">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Ingresa tu contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formConfirmPassword" className="mt-3">
              <Form.Label>Confirmar contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirma tu contraseña"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="my-4 w-100">
              Crear cuenta
            </Button>
          </Form>

          {/* Opción para redirigir a LoginPage */}
          <div className="mb-5 text-center">
            <span>¿Ya tienes una cuenta?</span>
            <br />
            <Button 
              variant="link" 
              onClick={handleGoToLogin} 
              className="p-0 text-decoration-none text-primary"
            >
              <FaSignInAlt className="" />
              Iniciar sesión
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default CreateAccountPage;
