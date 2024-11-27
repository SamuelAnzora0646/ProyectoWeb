import React, { useState, useContext, useEffect } from "react";
import {
  Button,
  Container,
  Row,
  Col,
  Form,
  Image,
  Card,
  Toast,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext"; // Importa el contexto
import { signOut } from "firebase/auth"; // Importa el método signOut de Firebase
import { auth, storage } from "../firebaseConfig"; // Importa la configuración de Firebase
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"; // Importa funciones de Firebase Storage
import { updateProfile } from "firebase/auth"; // Importa updateProfile para actualizar el perfil

const ProfilePage = () => {
  const { user, setUser } = useContext(AuthContext); // Accede al usuario y la función para actualizar el estado
  const navigate = useNavigate();

  // Si no hay usuario, redirige al login
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  // Usa el estado vacío si no hay un usuario autenticado
  const [name, setName] = useState(user ? user.displayName : "");
  const [email, setEmail] = useState(user ? user.email : "");
  const [password, setPassword] = useState("");
  const [profilePicture, setProfilePicture] = useState(
    localStorage.getItem("profilePicture") || (user ? user.photoURL : null)
  );
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false); // Para mostrar un indicador de carga
  const [successMessage, setSuccessMessage] = useState(""); // Estado para mostrar mensaje de éxito

  // Verifica si ya existe una URL de la imagen de perfil en localStorage
  useEffect(() => {
    const savedProfilePicture = localStorage.getItem("profilePicture");
    if (savedProfilePicture) {
      setProfilePicture(savedProfilePicture);
    }
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth); // Cierra la sesión de Firebase
      setUser(null); // Elimina el estado de usuario en el contexto
      navigate("/login"); // Redirige a la página de login
    } catch (error) {
      console.error("Error al cerrar sesión:", error.message);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      console.log("Archivo seleccionado:", file.name);
      const storageRef = ref(
        storage,
        `profile_pictures/${user.uid}/${file.name}`
      );
      setLoading(true); // Activar carga

      // Subir la imagen a Firebase Storage
      uploadBytes(storageRef, file)
        .then((snapshot) => {
          console.log("Archivo subido con éxito:", snapshot); // Verifica el snapshot

          // Obtener la URL de la imagen subida
          getDownloadURL(snapshot.ref)
            .then((downloadURL) => {
              console.log("URL de descarga:", downloadURL); // Verifica la URL obtenida
              setProfilePicture(downloadURL); // Actualiza la URL de la imagen
              setLoading(false); // Desactivar carga

              // Guardar la URL localmente (en localStorage)
              localStorage.setItem("profilePicture", downloadURL);

              // Actualizar el perfil en Firebase Authentication
              updateProfile(auth.currentUser, {
                photoURL: downloadURL, // Establece la URL de la imagen
              })
                .then(() => {
                  console.log("Perfil actualizado exitosamente");
                  setSuccessMessage("Imagen de perfil actualizada con éxito");
                })
                .catch((error) => {
                  console.error("Error al actualizar el perfil:", error);
                  setSuccessMessage("Error al actualizar la imagen de perfil");
                });
            })
            .catch((error) => {
              console.error("Error al obtener la URL de descarga:", error);
              setLoading(false);
              setSuccessMessage("Error al obtener la imagen");
            });
        })
        .catch((error) => {
          console.error("Error al subir imagen:", error); // Manejo de errores de la subida
          setLoading(false);
          setSuccessMessage("Error al subir la imagen");
        });
    }
  };

  const handleSaveChanges = (e) => {
    e.preventDefault();

    // Asegúrate de que el nombre no esté vacío antes de actualizar el perfil
    if (name.trim() === "") {
      setSuccessMessage("El nombre no puede estar vacío");
      return;
    }

    console.log("Guardando cambios:", name, password); // Depuración

    // Si el usuario desea cambiar la contraseña, se debe implementar aquí
    if (password.trim() !== "") {
      // Aquí podrías llamar a `updatePassword` para cambiar la contraseña
      // Firebase Auth no soporta el cambio de contraseña directamente con `updateProfile`
      // Tendrías que usar `updatePassword` de Firebase
      console.log("Cambiar contraseña:", password); // Implementar cambio de contraseña si es necesario
    }

    // Actualizar el nombre de usuario
    updateProfile(auth.currentUser, { displayName: name })
      .then(() => {
        setIsEditing(false);
        setSuccessMessage("Cambios guardados exitosamente");
      })
      .catch((error) => {
        console.error("Error al guardar cambios:", error);
        setSuccessMessage("Error al guardar los cambios");
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
                  src={profilePicture || "https://via.placeholder.com/150"}
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
                  <p>
                    <strong>Nombre:</strong> {name || "No establecido"}
                  </p>
                  <p>
                    <strong>Correo electrónico:</strong>{" "}
                    {email || "No disponible"}
                  </p>
                  <Button variant="primary" onClick={() => setIsEditing(true)}>
                    Editar perfil
                  </Button>
                  <Button
                    variant="danger"
                    onClick={handleLogout}
                    className="ms-2"
                  >
                    Cerrar sesión
                  </Button>
                </div>
              )}

              {/* Mensaje de éxito o error */}
              {successMessage && (
                <Toast
                  onClose={() => setSuccessMessage("")}
                  show={!!successMessage}
                  delay={3000}
                  autohide
                >
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

// Desglose del Código
// 1. Importaciones:

//     React, { useState, useContext, useEffect }: Importa React y hooks como useState, useContext, y useEffect para manejar el estado y efectos secundarios.
//     Button, Container, Row, Col, Form, Image, Card, Toast: Componentes de react-bootstrap que proporcionan una estructura responsiva y bonita para la UI.
//     useNavigate: Hook de react-router-dom para la navegación entre páginas.
//     AuthContext: Contexto para acceder al usuario autenticado y su estado.
//     signOut: Método de Firebase para cerrar sesión.
//     auth, storage: Configuración de Firebase para la autenticación y almacenamiento de archivos.
//     ref, uploadBytes, getDownloadURL: Funciones de Firebase Storage para subir y obtener URL de imágenes.
//     updateProfile: Función de Firebase para actualizar el perfil del usuario (como nombre y foto).

// 2. Estados:

//     name: Almacena el nombre del usuario.
//     email: Almacena el correo electrónico del usuario.
//     password: Almacena la contraseña del usuario, en caso de que quieran cambiarla.
//     profilePicture: Almacena la URL de la imagen de perfil del usuario.
//     isEditing: Controla si el formulario de edición está visible.
//     loading: Indicador de carga para mostrar cuando se está subiendo la imagen de perfil.
//     successMessage: Almacena mensajes de éxito o error para mostrar al usuario.

// 3. Efectos (useEffect):

//     El primer useEffect se asegura de que si no hay un usuario autenticado, redirige al usuario a la página de login.
//     El segundo useEffect se encarga de obtener la URL de la imagen de perfil guardada en localStorage cuando se recarga la página o cuando el componente se monta.

// 4. Funciones:

//     handleLogout: Función que cierra la sesión del usuario y lo redirige al login.
//     handleImageChange: Función para manejar el cambio de la foto de perfil. Al seleccionar una nueva imagen, esta se sube a Firebase Storage, se obtiene su URL y se actualiza el perfil en Firebase Authentication.
//     handleSaveChanges: Función que guarda los cambios del perfil, como el nombre de usuario y la contraseña (aunque el cambio de contraseña no está implementado aquí).
//     handleProfilePictureUpload: (Incorporada en handleImageChange): Sube la nueva foto de perfil a Firebase Storage y actualiza la URL de la imagen en el perfil de Firebase.

// 5. Renderizado del Componente:

//     Vista del perfil: Si no se está editando, muestra la foto de perfil, el nombre y el correo electrónico. También tiene botones para editar el perfil o cerrar sesión.
//     Modo de edición: Si se activa el modo de edición, los campos de nombre, correo electrónico (deshabilitado), y contraseña (opcional) se vuelven editables, y se puede cargar una nueva imagen de perfil.
//     Toast de éxito/error: Muestra un mensaje de éxito o error cuando se guardan los cambios o se realiza alguna acción (como cambiar la imagen de perfil).

// Funcionalidades Principales

//     Visualización del perfil:
//         Los usuarios pueden ver su nombre y correo electrónico, y su foto de perfil (si está configurada).

//     Edición del perfil:
//         Los usuarios pueden editar su nombre.
//         La foto de perfil puede ser cambiada por una nueva imagen subida desde el sistema de archivos local.

//     Cierre de sesión:
//         Los usuarios pueden cerrar sesión en la aplicación, lo que los redirige a la página de login.

//     Actualización de la imagen de perfil:
//         La imagen de perfil es cargada a Firebase Storage. Después de la carga exitosa, la URL de la imagen se obtiene y se guarda en el perfil de Firebase.
//         Se guarda localmente en localStorage para persistir la imagen de perfil en futuras visitas.

//     Mensajes de éxito o error:
//         Se utilizan Toast para mostrar mensajes informativos después de cada acción exitosa o fallida.


