// routes/router.js

// Importa el módulo 'express' para usar su funcionalidad de enrutamiento
const express = require('express');

// Crea una nueva instancia de un router de Express, que se encargará de gestionar las rutas
const router = express.Router();

// Importa el controlador que maneja las rutas de la API
// Este archivo contiene la lógica de negocio para cada ruta (GET, POST, PUT, DELETE)
const routeController = require('../controllers/routesController.js');

// --- Rutas de la API ---

// Ruta para obtener todas las rutas registradas
// Esta ruta responde a solicitudes GET en '/api/routes' y ejecuta la función 'getAllRoutes' del controlador
router.get('/routes', routeController.getAllRoutes);

// Ruta para crear una nueva ruta
// Esta ruta responde a solicitudes POST en '/api/routes' y ejecuta la función 'createRoute' del controlador
router.post('/routes', routeController.createRoute);

// Ruta para actualizar una ruta existente
// Esta ruta responde a solicitudes PUT en '/api/routes/:id'.
// El parámetro ':id' en la ruta es utilizado para identificar qué ruta se quiere actualizar.
// La función 'updateRoute' del controlador se encargará de la actualización
router.put('/routes/:id', routeController.updateRoute);

// Ruta para eliminar una ruta existente
// Esta ruta responde a solicitudes DELETE en '/api/routes/:id'.
// El parámetro ':id' en la ruta es utilizado para identificar qué ruta se quiere eliminar.
// La función 'deleteRoute' del controlador se encargará de la eliminación
router.delete('/routes/:id', routeController.deleteRoute);

// Exporta el router para que pueda ser utilizado en otros archivos (por ejemplo, en 'app.js' o 'server.js')
module.exports = router;
