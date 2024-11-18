import React, { useState, useContext, useEffect } from 'react';
import { Button, Container, Row, Col, Form, Image, Card, Toast } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext'; // Importa el contexto
import { signOut } from 'firebase/auth'; // Importa el método signOut de Firebase
import { auth, storage } from '../firebaseConfig'; // Importa la configuración de Firebase
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'; // Importa funciones de Firebase Storage
import { updateProfile } from 'firebase/auth';  // Importa updateProfile para actualizar el perfil

const ProfilePage = () => {
  const { user, setUser } = useContext(AuthContext); // Accede al usuario y la función para actualizar el estado
  const navigate = useNavigate();

  // Si no hay usuario, redirige al login
  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  // Usa el estado vacío si no hay un usuario autenticado
  const [name, setName] = useState(user ? user.displayName : '');
  const [email, setEmail] = useState(user ? user.email : '');
  const [password, setPassword] = useState('');
  const [profilePicture, setProfilePicture] = useState(localStorage.getItem('profilePicture') || (user ? user.photoURL : null));
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false); // Para mostrar un indicador de carga
  const [successMessage, setSuccessMessage] = useState(''); // Estado para mostrar mensaje de éxito

  // Verifica si ya existe una URL de la imagen de perfil en localStorage
  useEffect(() => {
    const savedProfilePicture = localStorage.getItem('profilePicture');
    if (savedProfilePicture) {
      setProfilePicture(savedProfilePicture);
    }
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth); // Cierra la sesión de Firebase
      setUser(null); // Elimina el estado de usuario en el contexto
      navigate('/login'); // Redirige a la página de login
    } catch (error) {
      console.error("Error al cerrar sesión:", error.message);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      console.log('Archivo seleccionado:', file.name);
      const storageRef = ref(storage, `profile_pictures/${user.uid}/${file.name}`);
      setLoading(true); // Activar carga

      // Subir la imagen a Firebase Storage
      uploadBytes(storageRef, file)
        .then((snapshot) => {
          console.log("Archivo subido con éxito:", snapshot); // Verifica el snapshot

          // Obtener la URL de la imagen subida
          getDownloadURL(snapshot.ref).then((downloadURL) => {
            console.log("URL de descarga:", downloadURL); // Verifica la URL obtenida
            setProfilePicture(downloadURL); // Actualiza la URL de la imagen
            setLoading(false); // Desactivar carga

            // Guardar la URL localmente (en localStorage)
            localStorage.setItem('profilePicture', downloadURL);

            // Actualizar el perfil en Firebase Authentication
            updateProfile(auth.currentUser, {
              photoURL: downloadURL, // Establece la URL de la imagen
            }).then(() => {
              console.log("Perfil actualizado exitosamente");
              setSuccessMessage('Imagen de perfil actualizada con éxito');
            }).catch((error) => {
              console.error("Error al actualizar el perfil:", error);
              setSuccessMessage('Error al actualizar la imagen de perfil');
            });
          }).catch((error) => {
            console.error("Error al obtener la URL de descarga:", error);
            setLoading(false);
            setSuccessMessage('Error al obtener la imagen');
          });
        })
        .catch((error) => {
          console.error("Error al subir imagen:", error); // Manejo de errores de la subida
          setLoading(false);
          setSuccessMessage('Error al subir la imagen');
        });
    }
  };

  const handleSaveChanges = (e) => {
    e.preventDefault();

    // Asegúrate de que el nombre no esté vacío antes de actualizar el perfil
    if (name.trim() === '') {
      setSuccessMessage('El nombre no puede estar vacío');
      return;
    }

    console.log("Guardando cambios:", name, password); // Depuración

    // Si el usuario desea cambiar la contraseña, se debe implementar aquí
    if (password.trim() !== '') {
      // Aquí podrías llamar a `updatePassword` para cambiar la contraseña
      // Firebase Auth no soporta el cambio de contraseña directamente con `updateProfile`
      // Tendrías que usar `updatePassword` de Firebase
      console.log("Cambiar contraseña:", password); // Implementar cambio de contraseña si es necesario
    }

    // Actualizar el nombre de usuario
    updateProfile(auth.currentUser, { displayName: name })
      .then(() => {
        setIsEditing(false);
        setSuccessMessage('Cambios guardados exitosamente');
      })
      .catch((error) => {
        console.error("Error al guardar cambios:", error);
        setSuccessMessage('Error al guardar los cambios');
      });
  };

  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col xs={12} md={8}>
          <Card className="shadow-sm">
            <Card.Body>
              <h2 className="text-center mb-4">Perfil de Usuario</h2>
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
                      onChange={handleImageChange}
                    />
                    {loading && <p>Cargando...</p>} {/* Mostrar carga */}
                  </Form.Group>
                )}
              </div>

              {isEditing ? (
                <Form onSubmit={handleSaveChanges}>
                  <Form.Group controlId="formName" className="mb-3">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Ingresa tu nombre"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group controlId="formEmail" className="mb-3">
                    <Form.Label>Correo electrónico</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Ingresa tu correo"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      disabled
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

                  <Button variant="primary" type="submit">
                    Guardar cambios
                  </Button>
                </Form>
              ) : (
                <div>
                  <p><strong>Nombre:</strong> {name || "No establecido"}</p>
                  <p><strong>Correo electrónico:</strong> {email || "No disponible"}</p>
                  <Button variant="primary" onClick={() => setIsEditing(true)}>Editar perfil</Button>
                  <Button variant="danger" onClick={handleLogout} className="ms-2">Cerrar sesión</Button>
                </div>
              )}

              {/* Mensaje de éxito o error */}
              {successMessage && (
                <Toast onClose={() => setSuccessMessage('')} show={!!successMessage} delay={3000} autohide>
                  <Toast.Body>{successMessage}</Toast.Body>
                </Toast>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ProfilePage;
