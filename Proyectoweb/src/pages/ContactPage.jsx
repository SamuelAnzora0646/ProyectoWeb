// src/pages/ContactPage.js
import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';

const ContactPage = () => {
  // Estado para manejar los campos del formulario
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulamos una validación simple
    if (name && email && message) {
      setShowSuccess(true);
      setShowError(false);
      // Aquí se podría enviar la información a un servidor o API
      console.log({ name, email, message });
      // Resetear el formulario
      setName('');
      setEmail('');
      setMessage('');
    } else {
      setShowSuccess(false);
      setShowError(true);
    }
  };

  return (
    <Container className=" border my-4 p-3">
      <Row className="justify-content-center">
        <Col xs={12} md={8}>
          <h2 className="text-center mb-4">Contáctanos</h2>

          {/* Mostrar mensaje de éxito o error */}
          {showSuccess && (
            <Alert variant="success">
              ¡Tu mensaje ha sido enviado con éxito! Nos pondremos en contacto pronto.
            </Alert>
          )}
          {showError && (
            <Alert variant="danger">
              Todos los campos son obligatorios. Por favor, completa todos los campos.
            </Alert>
          )}

          {/* Formulario de contacto */}
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName" className="mb-3">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingresa tu nombre"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="formEmail" className="mb-3">
              <Form.Label>Correo electrónico</Form.Label>
              <Form.Control
                type="email"
                placeholder="Ingresa tu correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="formMessage" className="mb-4">
              <Form.Label>Mensaje</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Escribe tu mensaje aquí"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </Form.Group>

            <div className="d-flex justify-content-between">
              <Button variant="primary" type="submit" className='mb-4'>
                Enviar mensaje
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactPage;
