// Importa el módulo express para crear la aplicación de servidor
const express = require('express');

// Importa la configuración de CORS para permitir solicitudes desde otros dominios si es necesario
const corsConfig = require('./config/corsConfig');

// Importa las rutas de la API definidas en el archivo 'routes/routes.js'
const routeRoutes = require('./routes/routes');

// Crea una instancia de la aplicación Express
const app = express();

// --- Middlewares ---
// El middleware CORS se utiliza para permitir solicitudes de otros dominios (si es necesario)
// Se aplica a todas las solicitudes entrantes antes de procesarlas
app.use(corsConfig);

// El middleware express.json() permite que Express pueda interpretar cuerpos de solicitudes en formato JSON
// Esto es útil para procesar datos enviados con el método POST, PUT o PATCH en el cuerpo de la solicitud
app.use(express.json());

// --- Ruta raíz ("/") ---
// Define una ruta que responderá a solicitudes GET en la raíz de la aplicación (http://localhost:3000/)
// Al acceder a esta ruta, la API responderá con un mensaje que indica que la API de rutas está disponible en '/api/routes'
app.get('/', (req, res) => {
  // En este caso, devuelve un mensaje de bienvenida y sugiere que el usuario vaya a la ruta '/api/routes' para interactuar con la API
  res.send("Bienvenido a la api de rutas 503 Dirígete a /api/routes");
});

// --- Rutas de la API ---
// La línea siguiente asocia el prefijo '/api' a las rutas definidas en el archivo 'routes/routes.js'.
// Esto significa que todas las rutas dentro de 'routeRoutes' estarán bajo el prefijo '/api'.
// Por ejemplo, la ruta '/routes' definida en 'routes.js' será accesible en '/api/routes'.
app.use('/api', routeRoutes);

// --- Manejo de rutas no existentes ---
// Este middleware captura todas las solicitudes que no coinciden con ninguna ruta definida previamente.
// Si alguien intenta acceder a una ruta que no existe en la API, se enviará un error 404 (no encontrada).
// El middleware responde con un mensaje indicando que la ruta no fue encontrada.
app.use((req, res) => {
  // Envía una respuesta con un código de estado 404 y un mensaje explicativo de error
  res.status(404).send("Ruta no encontrada, asegúrate de estar accediendo a una ruta válida de la API.");
});

// Exporta la instancia de la aplicación para que pueda ser utilizada en otros archivos (por ejemplo, en 'server.js')
module.exports = app;