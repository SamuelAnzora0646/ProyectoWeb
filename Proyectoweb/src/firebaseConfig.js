// Importar las funciones necesarias del SDK
import { initializeApp } from "firebase/app";
import { getAuth, updateProfile, GoogleAuthProvider } from "firebase/auth";  // Añadimos GoogleAuthProvider
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";  // Importa getStorage para Firebase Storage

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyALUIo337687710e9YLuFLUHrmgtmSl-Io",
  authDomain: "login-565c8.firebaseapp.com",
  projectId: "login-565c8",
  storageBucket: "login-565c8.appspot.com",  // Esta es la configuración correcta de tu bucket
  messagingSenderId: "321532316941",
  appId: "1:321532316941:web:8afff2d2dc54dbfdb37444",
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Inicializar servicios necesarios
export const auth = getAuth(app);  // Instancia de autenticación
export const db = getFirestore(app);  // Instancia de Firestore
export const storage = getStorage(app);  // Instancia de Storage

// Inicializa GoogleAuthProvider
export const googleProvider = new GoogleAuthProvider();  // Esta es la instancia para Google Auth

// Exporta la app principal (opcional, si no es necesaria puedes omitirla)
export default app;
