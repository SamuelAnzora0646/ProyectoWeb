// Importa el módulo 'cors' para habilitar la política de seguridad CORS (Cross-Origin Resource Sharing)
const cors = require('cors');

// Configuración de las opciones CORS
const corsOptions = {
  origin: '*', // Permite solicitudes de cualquier origen. Si deseas restringir el acceso, reemplaza '*' con un dominio específico, como 'https://miapp.com'
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Permite los métodos HTTP que se pueden usar para las solicitudes
  allowedHeaders: ['Content-Type', 'Authorization'], // Define qué encabezados están permitidos en las solicitudes
};

// Exporta el middleware de CORS configurado con las opciones especificadas
module.exports = cors(corsOptions);
