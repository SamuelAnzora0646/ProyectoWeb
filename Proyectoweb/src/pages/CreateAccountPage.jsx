import React, { useState, useContext } from "react";
import { Form, Button, Container, Row, Col, Alert } from "react-bootstrap";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../firebaseConfig"; // Importa el provider de Google
import { AuthContext } from "../context/AuthContext"; // Importa el contexto
import { useNavigate } from "react-router-dom"; // Importa useNavigate
import { FaSignInAlt } from "react-icons/fa"; // Ícono de "Iniciar sesión"
import { FaGoogle } from "react-icons/fa"; // Ícono de Google

const CreateAccountPage = () => {
  const { setUser } = useContext(AuthContext); // Función para actualizar el estado del usuario
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(""); // Estado para errores
  const [successMessage, setSuccessMessage] = useState(""); // Estado para el mensaje de éxito
  const navigate = useNavigate(); // Hook para redirigir a otras páginas

  // Función para manejar el inicio de sesión con Google
  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      // Actualiza el estado con el usuario
      setUser(user);

      // Redirige al perfil después de iniciar sesión
      navigate("/perfil");
    } catch (error) {
      console.error("Error al iniciar sesión con Google:", error.message);
      setError("Hubo un error al iniciar sesión con Google.");
    }
  };

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
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const newUser = userCredential.user;

      // Actualizar el estado del usuario en el contexto
      setUser(newUser);

      // Mostrar mensaje de éxito
      setSuccessMessage("Cuenta creada con éxito");
      setError(""); // Limpiar cualquier mensaje de error

      // Redirigir al perfil automáticamente después de crear la cuenta
      setTimeout(() => {
        navigate("/perfil");
      }, 2000); // Espera 2 segundos para mostrar el mensaje antes de redirigir
    } catch (error) {
      console.error("Error al crear cuenta:", error.message);

      // Manejo de errores
      if (error.code === "auth/email-already-in-use") {
        setError("Este correo electrónico ya está registrado.");
      } else {
        setError("Hubo un error al crear la cuenta.");
      }

      setSuccessMessage(""); // Limpiar mensaje de éxito
    }
  };

  const handleGoToLogin = () => {
    // Redirige al LoginPage
    navigate("/login");
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
          <div className="mb-3 text-center">
            <span>¿Ya tienes una cuenta?</span>
            <br />
            <Button
              variant="link"
              onClick={handleGoToLogin}
              className="p-0 text-decoration-none text-primary"
            >
              <FaSignInAlt /> Iniciar sesión
            </Button>
          </div>

          {/* Botón de Google para iniciar sesión */}
          <div className="text-center mb-4">
            <Button
              variant="outline-success"
              onClick={handleGoogleLogin}
              className="w-100"
            >
              <FaGoogle className="me-2" /> Iniciar sesión con Google
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default CreateAccountPage;

// Explicación del Código
// 1. Importaciones:

//     React, { useState, useContext }: Importa las herramientas necesarias de React para manejar el estado local (useState) y el contexto (useContext).
//     Form, Button, Container, Row, Col, Alert de react-bootstrap: Componentes de react-bootstrap que facilitan la creación de formularios y la disposición de los elementos en la interfaz de usuario.
//     createUserWithEmailAndPassword, signInWithPopup de firebase/auth: Métodos de Firebase para crear una cuenta y autenticar usuarios con un proveedor de inicio de sesión (en este caso, Google).
//     auth, googleProvider de ../firebaseConfig: Configuración de Firebase, donde se inicializa el proveedor de Google y la instancia de autenticación.
//     AuthContext: Contexto que permite gestionar el estado de autenticación a nivel global en la aplicación.
//     useNavigate de react-router-dom: Hook de React Router para redirigir al usuario a otras páginas.
//     FaSignInAlt, FaGoogle: Iconos de react-icons para representar visualmente las acciones de inicio de sesión.

// 2. Estados del Componente:

//     email, password, confirmPassword: Estados que almacenan los valores de los campos del formulario de creación de cuenta.
//     error: Estado que maneja los errores, como cuando las contraseñas no coinciden o si ya existe una cuenta con el mismo correo electrónico.
//     successMessage: Estado que maneja el mensaje de éxito cuando la cuenta se crea correctamente.
//     navigate: Hook useNavigate para redirigir al usuario a la página de perfil después de la creación de la cuenta o al login en caso de que ya tenga una cuenta.

// 3. Funciones del Componente:

//     handleGoogleLogin: Función que maneja el inicio de sesión con Google utilizando Firebase Authentication. Si el inicio de sesión es exitoso, se actualiza el estado del usuario con los datos del usuario autenticado y se redirige al perfil del usuario.
//     handleSubmit: Función que maneja el envío del formulario. Verifica si las contraseñas coinciden y, si es así, crea una cuenta de usuario con el correo electrónico y la contraseña proporcionados. Si la creación es exitosa, se redirige al perfil del usuario.
//     handleGoToLogin: Función que redirige al usuario a la página de inicio de sesión si ya tiene una cuenta.

// 4. Renderizado del Componente:

//     El formulario de creación de cuenta contiene tres campos:
//         Correo electrónico: Campo para ingresar el correo electrónico.
//         Contraseña: Campo para ingresar la contraseña.
//         Confirmar contraseña: Campo para confirmar la contraseña.
//     Si hay un error, se muestra un mensaje de error con Alert variant="danger". Si la cuenta se crea con éxito, se muestra un mensaje de éxito con Alert variant="success".
//     Botón para crear cuenta: Un botón que al hacer clic ejecuta handleSubmit para crear la cuenta de usuario.
//     Enlace para redirigir a la página de inicio de sesión: Si el usuario ya tiene una cuenta, puede hacer clic en el enlace para ir a la página de inicio de sesión.
//     Botón para iniciar sesión con Google: Utiliza el proveedor de Google para autenticar al usuario de manera rápida y sencilla.

// 5. Estilos y Disposición:

//     El componente usa clases de Bootstrap como my-4, w-100, mt-3, etc., para organizar y darle estilo a los elementos.
//     Los botones y los formularios se ajustan de acuerdo con el tamaño de la pantalla utilizando la grid de react-bootstrap.
