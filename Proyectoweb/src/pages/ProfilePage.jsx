import React, { useState } from 'react';
import { Button, Container, Row, Col, Form, Image, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const ProfilePage = ({ onLogout }) => {
  const navigate = useNavigate();

  // Estado para los datos del perfil
  const [name, setName] = useState('Juan Pérez');
  const [email, setEmail] = useState('juan.perez@email.com');
  const [password, setPassword] = useState('');
  const [profilePicture, setProfilePicture] = useState(null);

  // Estado para controlar si estamos en modo de edición
  const [isEditing, setIsEditing] = useState(false);

  // Función para manejar la subida de imagen de perfil
  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePicture(URL.createObjectURL(file)); // Crea una URL temporal para la imagen
    }
  };

  // Función para manejar el cierre de sesión
  const handleLogout = () => {
    onLogout(); // Cambia el estado de isLoggedIn a false en App.js
    navigate('/login'); // Redirige a la página de login
  };

  // Función para guardar los cambios
  const handleSaveChanges = (e) => {
    e.preventDefault();
    // Aquí podrías agregar lógica para guardar los cambios (ej., hacer una llamada a una API)
    setIsEditing(false); // Vuelve al modo de visualización
    alert('Cambios guardados correctamente.');
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col xs={12} md={8}>
          <Card className="shadow-sm">
            <Card.Body>
              <h2 className="text-center mb-4">Perfil de Usuario</h2>

              {/* Imagen de perfil */}
              <div className="text-center mb-4">
                <Image
                  src={profilePicture || 'https://via.placeholder.com/150'}
                  roundedCircle
                  alt="Foto de perfil"
                  width="150"
                  height="150"
                  className="mb-3"
                />
                {isEditing && (
                  <Form.Group>
                    <Form.Label>Actualizar foto de perfil</Form.Label>
                    <Form.Control
                      type="file"
                      accept="image/*"
                      onChange={handleProfilePictureChange}
                    />
                  </Form.Group>
                )}
              </div>

              {/* Mostrar perfil o editar */}
              {isEditing ? (
                // Formulario de edición
                <Form onSubmit={handleSaveChanges}>
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
                      placeholder="Ingresa tu correo"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </Form.Group>

                  <Form.Group controlId="formPassword" className="mb-4">
                    <Form.Label>Cambiar Contraseña</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Ingresa tu nueva contraseña"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Form.Group>

                  <div className="d-flex justify-content-between">
                    <Button variant="primary" type="submit">
                      Guardar cambios
                    </Button>
                    <Button variant="danger" onClick={handleLogout}>
                      Cerrar sesión
                    </Button>
                  </div>
                </Form>
              ) : (
                // Vista de perfil
                <div>
                  <p><strong>Nombre:</strong> {name}</p>
                  <p><strong>Correo electrónico:</strong> {email}</p>
                  <Button
                    variant="primary"
                    onClick={() => setIsEditing(true)} // Cambia al modo de edición
                  >
                    Editar perfil
                  </Button>
                  <Button variant="danger" onClick={handleLogout} className="ms-2">
                    Cerrar sesión
                  </Button>
                </div>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ProfilePage;
