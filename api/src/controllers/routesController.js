// controllers/routesController.js
const routes = require('../data/routesData');

// Obtener todas las rutas
exports.getAllRoutes = (req, res) => {
  try {
    res.status(200).json(routes);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener las rutas', error });
  }
};

// Agregar una nueva ruta
exports.createRoute = (req, res) => {
  try {
    const { route, path, department, startTime, endTime } = req.body;

    // Validación simple
    if (!route || !path || !department || !startTime || !endTime) {
      return res.status(400).json({ message: 'Todos los campos son obligatorios' });
    }

    // Crear nueva ruta
    const newRoute = { route, path, department, startTime, endTime };
    routes.push(newRoute);

    res.status(201).json(newRoute);
  } catch (error) {
    res.status(500).json({ message: 'Error al agregar la ruta', error });
  }
};

// Actualizar una ruta existente
exports.updateRoute = (req, res) => {
  try {
    const { id } = req.params; // id es el campo `route`
    const { route, path, department, startTime, endTime } = req.body;

    const index = routes.findIndex(r => r.route === id);

    if (index === -1) {
      return res.status(404).json({ message: 'Ruta no encontrada' });
    }

    // Actualizar la ruta
    routes[index] = { ...routes[index], route, path, department, startTime, endTime };
    
    res.status(200).json(routes[index]);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar la ruta', error });
  }
};

// Eliminar una ruta
exports.deleteRoute = (req, res) => {
  try {
    const { id } = req.params; // id es el campo `route`
    const index = routes.findIndex(r => r.route === id);

    if (index === -1) {
      return res.status(404).json({ message: 'Ruta no encontrada' });
    }

    // Eliminar la ruta
    const deletedRoute = routes.splice(index, 1);

    res.status(200).json(deletedRoute);
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar la ruta', error });
  }
};
