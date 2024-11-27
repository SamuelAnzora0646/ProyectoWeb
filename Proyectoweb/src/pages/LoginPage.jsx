import React, { useState, useContext } from "react";
import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext"; // Asegúrate de que la ruta sea correcta
import { signInWithPopup } from "firebase/auth"; // Necesitamos esta función de Firebase
import { auth, googleProvider } from "../firebaseConfig"; // Importa el googleProvider desde firebaseConfig
import logo from "../assets/logo.jpg"; // Importa la imagen

const LoginPage = () => {
  const { login } = useContext(AuthContext); // Usamos el login desde el contexto
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null); // Para manejar errores
  const navigate = useNavigate();

  // Función para manejar el inicio de sesión con Google
  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      // Aquí se podría guardar el usuario en el contexto o realizar alguna otra acción
      // Ejemplo: setUser(user);

      navigate("/perfil"); // Redirige al perfil después de iniciar sesión
    } catch (err) {
      setError("Hubo un error al iniciar sesión con Google.");
      console.error(err);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await login(email, password); // Llamada al login desde el contexto
      navigate("/perfil"); // Redirige al perfil después de iniciar sesión
    } catch (err) {
      setError("Correo o contraseña incorrectos. Inténtalo de nuevo."); // Manejo de error claro
    }
  };

  const handleCreateAccount = () => {
    navigate("/crear-cuenta"); // Redirige a la página de creación de cuenta
  };

  return (
    <Container
      fluid
      className="d-flex justify-content-center align-items-center my-5 bg-light"
    >
      <Row className="w-100">
        {/* Columna para el formulario */}
        <Col
          xs={12}
          md={6}
          lg={4}
          className="d-flex justify-content-center align-items-center my-3"
        >
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
                {error && (
                  <div className="alert alert-danger mb-3">{error}</div>
                )}{" "}
                {/* Mostrar errores */}
                <Button
                  variant="primary"
                  type="submit"
                  className="w-100 py-2 mb-3"
                >
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
        <Col
          xs={12}
          md={6}
          lg={8}
          className="d-flex justify-content-center align-items-center my-3"
        >
          <div className="text-center">
            <img
              src={logo} // Usamos la variable importada
              alt="Imagen de bienvenida"
              className="img-fluid"
              style={{ maxWidth: "80%" }}
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;

// Desglose del Código
// 1. Importaciones:

//     React, { useState, useContext }: Importa React y el hook useContext para manejar el estado y obtener el contexto de autenticación.
//     Form, Button, Container, Row, Col, Card: Componentes de react-bootstrap que permiten construir la interfaz de usuario de manera estructurada y responsiva.
//     useNavigate: Hook de react-router-dom para manejar la navegación entre las páginas de la aplicación.
//     AuthContext: Contexto para manejar el estado de autenticación de la aplicación.
//     signInWithPopup: Función de Firebase Authentication para manejar el inicio de sesión con Google.
//     auth, googleProvider: La configuración de Firebase que incluye la autenticación y el proveedor de Google.
//     logo: Imagen que se utilizará en la página de inicio de sesión (se usa como logotipo o imagen de bienvenida).

// 2. Estados:

//     email y password: Estados que almacenan el correo electrónico y la contraseña ingresados por el usuario.
//     error: Estado que se utiliza para manejar los errores en caso de que el inicio de sesión falle (por ejemplo, si el correo o la contraseña son incorrectos).
//     navigate: Hook de useNavigate para redirigir al usuario a diferentes páginas después de una acción (como iniciar sesión correctamente).

// 3. Funciones:

//     handleGoogleLogin: Función que maneja el inicio de sesión con Google mediante Firebase. Si el inicio de sesión es exitoso, el usuario es redirigido al perfil.
//     handleLogin: Función que maneja el inicio de sesión con correo electrónico y contraseña. Si los datos son correctos, el usuario es redirigido al perfil.
//     handleCreateAccount: Función que redirige al usuario a la página de creación de cuenta si aún no tiene una cuenta registrada.

// 4. Renderizado del Componente:

//     El componente tiene un diseño basado en react-bootstrap, dividido en dos columnas:
//         Formulario de inicio de sesión: Contiene un formulario con campos para el correo electrónico y la contraseña. También tiene un botón para iniciar sesión, un enlace para crear una cuenta (si el usuario aún no tiene una) y un botón para iniciar sesión con Google.
//         Imagen de bienvenida: A la derecha se muestra una imagen que sirve como bienvenida o branding visual de la aplicación.
//     Manejo de errores: Si hay un error durante el inicio de sesión, se muestra un mensaje de error debajo del formulario.

// 5. Detalles Visuales:

//     El formulario está contenido dentro de un Card para darle un estilo limpio y separado del fondo.
//     Se usan botones (Button) para enviar el formulario, redirigir a la página de creación de cuenta y para iniciar sesión con Google.
//     El diseño es responsivo, y la imagen se adapta al tamaño de la pantalla.

// Explicación en Detalle del Flujo:

//     Formulario de inicio de sesión:
//         El formulario contiene dos campos de entrada (Form.Control) para el correo electrónico y la contraseña, y un botón de tipo submit para enviar los datos.
//         Si el inicio de sesión falla, se muestra un mensaje de error en una alerta (alert alert-danger).

//     Botón de inicio de sesión con Google:
//         Si el usuario prefiere usar Google para iniciar sesión, puede hacer clic en el botón "Iniciar sesión con Google". Esto utiliza el signInWithPopup de Firebase, que abre una ventana emergente para permitir al usuario iniciar sesión con su cuenta de Google.
//         Si el inicio de sesión con Google es exitoso, el usuario es redirigido a la página de perfil (navigate('/perfil')).

//     Redirección a crear cuenta:
//         Si el usuario no tiene una cuenta, puede hacer clic en el enlace "¿No tienes una cuenta? Crear cuenta", que lo llevará a la página de registro (/crear-cuenta).

//     Imagen de bienvenida:
//         La imagen (logo) se muestra a la derecha de la página para dar un toque visual y mostrar la identidad de la aplicación.
