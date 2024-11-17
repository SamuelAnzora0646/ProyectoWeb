// Importa dotenv para cargar las variables del archivo .env
require('dotenv').config();

// Importa la instancia de la aplicación Express desde el archivo 'app.js'
const app = require('./app');

// Define el puerto en el que el servidor escuchará las solicitudes.
// Si existe una variable de entorno `PORT`, se usará ese valor; si no, se usará el puerto 3000 por defecto.
const PORT = process.env.PORT || 3000;

// Inicia el servidor y hace que la aplicación Express escuche en el puerto definido.
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
