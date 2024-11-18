import React, { createContext, useState, useEffect } from 'react';
import { auth } from '../firebaseConfig'; // Asegúrate de que esto esté configurado correctamente
import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';

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
      console.error('Error al iniciar sesión:', error.message);
      throw new Error(error.message); // Maneja el error de forma apropiada
    }
  };

  return (
    <AuthContext.Provider value={{ user, setUser, login }}>
      {children}
    </AuthContext.Provider>
  );
};
