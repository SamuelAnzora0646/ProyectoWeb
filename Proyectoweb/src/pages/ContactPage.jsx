// src/pages/ContactPage.js
import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";

const ContactPage = () => {
  // Estado para manejar los campos del formulario
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
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
      setName("");
      setEmail("");
      setMessage("");
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
              ¡Tu mensaje ha sido enviado con éxito! Nos pondremos en contacto
              pronto.
            </Alert>
          )}
          {showError && (
            <Alert variant="danger">
              Todos los campos son obligatorios. Por favor, completa todos los
              campos.
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
              <Button variant="primary" type="submit" className="mb-4">
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

// Explicación del Código
// 1. Importaciones:

//     React, { useState }: Se importan las herramientas necesarias para usar React y el hook useState, que se utiliza para gestionar el estado del formulario.
//     Container, Row, Col, Form, Button, Alert de react-bootstrap: Se utilizan para el diseño de la página y el formulario. react-bootstrap proporciona componentes listos para usar que hacen que el diseño sea responsivo y fácil de implementar.

// 2. Estados del Componente:

//     name: Estado que almacena el valor del campo de texto para el nombre del usuario.
//     email: Estado que almacena el valor del campo de texto para el correo electrónico.
//     message: Estado que almacena el mensaje que el usuario ingresa.
//     showSuccess: Booleano que se establece a true cuando el formulario se envía correctamente y se muestra un mensaje de éxito.
//     showError: Booleano que se establece a true cuando algún campo del formulario está vacío y se muestra un mensaje de error.

// 3. Función handleSubmit:

//     Se ejecuta cuando el usuario envía el formulario.
//     Simulación de validación: Si los campos name, email y message no están vacíos, se considera que el envío es exitoso y se muestra un mensaje de éxito (showSuccess). Si alguno de los campos está vacío, se muestra un mensaje de error (showError).
//     Después de un envío exitoso, se resetean los campos del formulario.

// 4. Renderizado del Componente:

//     Estructura de la página:
//         Container: Un contenedor para organizar el contenido en el centro de la página, con márgenes y rellenos definidos por las clases de Bootstrap.
//         Row y Col: Para organizar el contenido en una fila y una columna, permitiendo que el formulario sea responsivo y se ajuste según el tamaño de la pantalla.
//         Alert: Se utilizan dos alertas, una de éxito y otra de error, que se muestran según el estado de showSuccess y showError.
//         Formulario: El formulario contiene tres campos de entrada:
//             Nombre: Un campo de texto donde el usuario ingresa su nombre.
//             Correo electrónico: Un campo de texto donde el usuario ingresa su correo electrónico.
//             Mensaje: Un campo de texto grande (área de texto) donde el usuario ingresa el mensaje que desea enviar.
//         El formulario tiene un botón de Enviar mensaje que ejecuta la función handleSubmit al hacer clic.

// 5. Diseño con Bootstrap:

//     Clases de Bootstrap: Se usan clases de Bootstrap como mb-3, d-flex, justify-content-between, entre otras, para darle estilo y organizar el diseño del formulario de manera efectiva y responsiva.
