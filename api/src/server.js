// Importa la instancia de la aplicación Express desde el archivo 'app.js'.
// Este archivo contiene la configuración de las rutas y los middlewares para la API.
const app = require('./app');

// Define el puerto en el que el servidor escuchará las solicitudes.
// Si existe una variable de entorno `PORT`, se usará ese valor; si no, se usará el puerto 3000 por defecto.
const PORT = process.env.PORT || 3000;

// Inicia el servidor y hace que la aplicación Express escuche en el puerto definido (PORT).
// El segundo parámetro es una función de callback que se ejecutará cuando el servidor esté listo.
app.listen(PORT, () => {
  // Cuando el servidor esté en funcionamiento, muestra un mensaje en la consola indicando el puerto donde está escuchando.
  console.log(`Server is running on port http://localhost:${PORT}`);
});
