// Importa el módulo de Express para crear un router
const express = require('express');

// Crea una nueva instancia de un router en Express
const router = express.Router();

// Importa el controlador que maneja las rutas de la API
// Asegúrate de que la ruta sea correcta y apunte al archivo adecuado
const routeController = require('../controllers/routesController.js');

// Definir la ruta para obtener todas las rutas
// Esta ruta responderá a las solicitudes GET en '/api/routes'
// y delegará la lógica de la respuesta al método getAllRoutes del controlador
router.get('/routes', routeController.getAllRoutes);

// Definir la ruta para crear una nueva ruta
// Esta ruta responderá a las solicitudes POST en '/api/routes'
// y delegará la lógica de la creación al método createRoute del controlador
router.post('/routes', routeController.createRoute);

// Definir la ruta para actualizar una ruta existente
// Esta ruta responderá a las solicitudes PUT en '/api/routes/:id'
// ':id' es un parámetro de ruta que se usará para identificar la ruta a actualizar
// La lógica de la actualización se delegará al método updateRoute del controlador
router.put('/routes/:id', routeController.updateRoute);

// Definir la ruta para eliminar una ruta existente
// Esta ruta responderá a las solicitudes DELETE en '/api/routes/:id'
// ':id' es un parámetro de ruta que se usará para identificar la ruta a eliminar
// La lógica de la eliminación se delegará al método deleteRoute del controlador
router.delete('/routes/:id', routeController.deleteRoute);

// Exporta el router para que pueda ser utilizado en otros archivos, como en 'app.js' o 'server.js'
module.exports = router;
