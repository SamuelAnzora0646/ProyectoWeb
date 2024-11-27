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


// Explicación del Código de Configuración de Firebase

// Este código configura Firebase en nuestra aplicación para poder usar sus servicios, como la autenticación, la base de datos Firestore y el almacenamiento de archivos en Firebase Storage. Aquí te explico cada parte:
// 1. Importación de Funciones del SDK de Firebase

//     initializeApp: Esta función inicializa Firebase con la configuración de nuestro proyecto. Es el primer paso para configurar Firebase en nuestra aplicación, y sin ella, Firebase no funcionará correctamente.

//     getAuth: Nos proporciona la instancia del servicio de autenticación de Firebase. Con esta instancia podemos gestionar el inicio de sesión, registro de usuarios y otras funcionalidades relacionadas con la autenticación.

//     updateProfile: Esta función permite actualizar el perfil del usuario autenticado. Por ejemplo, podemos cambiar el nombre o la foto de perfil del usuario.

//     GoogleAuthProvider: Es el proveedor que nos permite autenticar a los usuarios utilizando sus cuentas de Google. Lo usaremos en nuestra aplicación para permitir que los usuarios inicien sesión con su cuenta de Google.

//     getFirestore: Esta función nos da acceso a Firestore, la base de datos en tiempo real de Firebase. Con ella, podemos almacenar y recuperar datos de manera eficiente y en tiempo real.

//     getStorage: Esta función nos permite acceder a Firebase Storage, un servicio que nos permite subir y descargar archivos, como imágenes, videos y otros tipos de documentos.

// 2. Configuración del Proyecto de Firebase

// En esta sección se define la configuración específica de nuestro proyecto de Firebase, que obtenemos de la consola de Firebase cuando creamos el proyecto.

//     apiKey: Es la clave API única de nuestro proyecto. Esta clave se utiliza para autenticar nuestra aplicación con los servicios de Firebase. Es importante no exponerla en lugares públicos como repositorios abiertos.

//     authDomain: Especifica el dominio para la autenticación. Firebase utiliza este dominio para gestionar las solicitudes de inicio de sesión y registro.

//     projectId: Es el identificador único de nuestro proyecto de Firebase. Firebase usa este ID para gestionar los recursos asociados con el proyecto.

//     storageBucket: Es la URL del "bucket" de Firebase Storage, que es donde se almacenan los archivos en la nube.

//     messagingSenderId: Este ID se usa para el envío de mensajes a través de Firebase Cloud Messaging (FCM), un servicio que permite enviar notificaciones push.

//     appId: Es el identificador único de la aplicación dentro de Firebase. Este ID permite distinguir nuestra aplicación de otras.

// 3. Inicialización de Firebase y Servicios

// Una vez que tenemos la configuración, la inicializamos utilizando initializeApp(firebaseConfig), lo que prepara nuestra aplicación para interactuar con Firebase.

//     getAuth(app): Inicializa el servicio de autenticación de Firebase. Nos da acceso a funciones como el inicio de sesión, registro, y la gestión del perfil del usuario.

//     getFirestore(app): Inicializa el servicio de Firestore, lo que nos permite trabajar con la base de datos en tiempo real de Firebase.

//     getStorage(app): Inicializa Firebase Storage, lo que nos permite almacenar y recuperar archivos desde la nube.

// 4. Exportación de Instancias y Proveedores

// Finalmente, exportamos las instancias de los servicios que hemos inicializado para poder usarlos en otras partes de la aplicación:

//     googleProvider: Creamos una instancia de GoogleAuthProvider, que es la que utilizamos para permitir el inicio de sesión mediante Google.

//     Exportación de auth, db, storage: Exportamos las instancias de los servicios de autenticación, Firestore y Storage para que puedan ser utilizadas en otras partes de la aplicación. Esto permite que nuestra aplicación interactúe con Firebase de forma centralizada.