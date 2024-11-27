import React, { createContext, useState, useEffect } from "react";
import { auth } from "../firebaseConfig"; // Asegúrate de que esto esté configurado correctamente
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";

// Creamos el contexto
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Monitoriza el estado de autenticación
    const unsubscribe = onAuthStateChanged(auth, setUser);

    // Limpiar suscripción al desmontar el componente
    return () => unsubscribe();
  }, []);

  const login = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error("Error al iniciar sesión:", error.message);
      throw new Error(error.message); // Maneja el error de forma apropiada
    }
  };

  return (
    <AuthContext.Provider value={{ user, setUser, login }}>
      {children}
    </AuthContext.Provider>
  );
};

// Explicación del Código:
// 1. Contexto de Autenticación (AuthContext):

//     El contexto de autenticación se crea utilizando createContext(), lo que permite compartir el estado de la autenticación a través de toda la aplicación sin necesidad de pasar explícitamente las propiedades entre componentes.

// 2. AuthProvider:

// El componente AuthProvider es un wrapper (envoltorio) que proporciona el contexto de autenticación a los componentes hijos.

//     Estado user:
//         Se usa el hook useState para mantener el estado del usuario autenticado. Inicialmente, user se establece como null, ya que no hay un usuario autenticado cuando la aplicación se carga por primera vez.

//     useEffect para la monitorización de la autenticación:
//         Dentro del useEffect, se usa onAuthStateChanged de Firebase para escuchar los cambios en el estado de la autenticación (cuando el usuario se autentica o cierra sesión).
//         onAuthStateChanged recibe dos parámetros:
//             auth: La instancia de autenticación de Firebase.
//             setUser: La función que actualizará el estado de user con el usuario autenticado.
//         El unsubscribe() en el retorno de la función de efecto limpia la suscripción cuando el componente se desmonta, evitando posibles fugas de memoria.

//     Método login:
//         La función login permite a un usuario iniciar sesión con su correo electrónico y contraseña.
//         Usa signInWithEmailAndPassword de Firebase Authentication para autenticar al usuario.
//         Si el inicio de sesión es exitoso, el usuario se almacena en el estado user.
//         Si ocurre un error, se captura y se muestra el mensaje de error.

//     AuthContext.Provider:
//         El componente AuthProvider utiliza el AuthContext.Provider para proporcionar el contexto a todos los componentes hijos. Dentro del value del Provider, se pasan los valores user, setUser y login para que puedan ser accedidos en cualquier componente que consuma este contexto.

// 3. Propiedades del AuthContext.Provider:

//     user: Representa el usuario autenticado (o null si no hay usuario autenticado).
//     setUser: Función para actualizar el estado del usuario, generalmente usada para cerrar sesión.
//     login: Función para iniciar sesión con un correo electrónico y una contraseña.

// 4. Uso del AuthProvider en la Aplicación:

// El AuthProvider debe envolver el componente principal de la aplicación (App.js o el que maneje las rutas) para que los componentes dentro de la aplicación puedan acceder a la información de autenticación.
