// Importa el módulo 'express' para crear la aplicación de servidor
const express = require('express');

// Importa la configuración de CORS desde un archivo separado
const corsConfig = require('./config/corsConfig');

// Importa las rutas definidas en el archivo 'routes/routes.js'
const routeRoutes = require('./routes/routes'); // Asegúrate de que la ruta sea correcta

// Crea una instancia de la aplicación Express
const app = express();

// --- Middlewares ---
// Aplica la configuración de CORS a todas las solicitudes entrantes.
// Esto permite que la API pueda aceptar solicitudes desde diferentes orígenes (dominios).
app.use(corsConfig); 

// Middleware para permitir que la aplicación pueda parsear (interpretar) cuerpos de solicitud en formato JSON.
// Esto es útil cuando recibimos datos en formato JSON en los cuerpos de las solicitudes (POST, PUT, etc.).
app.use(express.json()); 

// --- Ruta raíz ("/") ---
// Define una ruta que responderá a las solicitudes GET en la raíz de la API (por ejemplo, http://localhost:3000/).
// Esta ruta simplemente devuelve un mensaje de bienvenida y un consejo para que el usuario vaya a la ruta '/api/routes'.
// Esto es útil como una especie de "página de inicio" o como punto de referencia en caso de que el cliente quiera saber qué hacer.
app.get('/', (req, res) => {
  res.send("Bienvenido a la api de rutas 503 Dirígete a /api/routes");
});

// --- Rutas de la API ---
// La siguiente línea asegura que todas las rutas definidas en 'routes/routes.js' se servirán con el prefijo '/api'.
// Esto significa que, por ejemplo, la ruta '/routes' definida en 'routes.js' será accesible a través de '/api/routes'.
// De esta forma, todas las rutas de la API estarán bajo un único prefijo, lo cual es una buena práctica para organizar la estructura de la API.
app.use('/api', routeRoutes); // Rutas de las rutas

// --- Manejo de rutas no encontradas ---
// Este middleware captura todas las solicitudes que no coinciden con ninguna de las rutas previamente definidas.
// Si un usuario intenta acceder a una ruta que no existe, se le responde con un error 404 (No encontrada),
// junto con un mensaje explicativo de que la ruta no fue encontrada y que debe asegurarse de estar accediendo a una ruta válida.
app.use((req, res) => {
  res.status(404).send("Ruta no encontrada, asegúrate de estar accediendo a una ruta válida de la API.");
});

// Exporta la instancia de la aplicación para que pueda ser utilizada en otros archivos (como en 'server.js')
module.exports = app;
