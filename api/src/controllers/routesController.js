// controllers/routesController.js

// Se importa el archivo de datos `routesData.js`, que contiene la información de las rutas
const routes = require('../data/routesData');

// Obtener todas las rutas
exports.getAllRoutes = (req, res) => {
  try {
    // Si la operación es exitosa, responde con un estado 200 (OK) y el array de rutas
    res.status(200).json(routes);
  } catch (error) {
    // Si ocurre un error, responde con un estado 500 (Error interno del servidor) y el mensaje de error
    res.status(500).json({ message: 'Error al obtener las rutas', error });
  }
};

// Agregar una nueva ruta
exports.createRoute = (req, res) => {
  try {
    // Desestructura los datos recibidos en la solicitud (req.body) y los extrae
    const { route, path, department, startTime, endTime } = req.body;

    // --- Validación de campos obligatorios ---
    // Verifica si falta algún campo obligatorio
    if (!route || !path || !department || !startTime || !endTime) {
      return res.status(400).json({ message: 'Todos los campos son obligatorios' });
    }

    // --- Validación de tipos de datos ---
    // Asegura que los campos `route`, `path` y `department` sean de tipo cadena (string)
    if (typeof route !== 'string' || typeof path !== 'string' || typeof department !== 'string') {
      return res.status(400).json({ message: 'Los campos route, path y department deben ser cadenas de texto.' });
    }

    // Asegura que los campos `startTime` y `endTime` sean de tipo cadena
    if (typeof startTime !== 'string' || typeof endTime !== 'string') {
      return res.status(400).json({ message: 'Los campos startTime y endTime deben ser cadenas de texto (formato de hora).' });
    }

    // --- Validación de URL ---
    // Usa una expresión regular (regex) para verificar si el campo `path` tiene una URL válida
    const pathRegex = /^(https?:\/\/)?([a-zA-Z0-9.-]+)(:[0-9]+)?(\/[^\s]*)?$/; // Regex para URL
    if (!pathRegex.test(path)) {
      return res.status(400).json({ message: 'El campo "path" debe ser una URL válida.' });
    }

    // Si todas las validaciones son correctas, crea una nueva ruta
    const newRoute = { route, path, department, startTime, endTime };
    
    // Agrega la nueva ruta al array de `routes` y la devuelve como respuesta
    routes.push(newRoute);

    // Responde con un estado 201 (Creado) y el objeto de la nueva ruta
    res.status(201).json(newRoute);
  } catch (error) {
    // Si ocurre un error durante la creación, responde con un error 500 (Error interno del servidor)
    res.status(500).json({ message: 'Error al agregar la ruta', error });
  }
};

// Actualizar una ruta existente
exports.updateRoute = (req, res) => {
  try {
    // Obtiene el `id` de la ruta que se va a actualizar desde los parámetros de la solicitud
    const { id } = req.params;

    // Desestructura los datos recibidos en la solicitud (req.body) para actualizar la ruta
    const { route, path, department, startTime, endTime } = req.body;

    // --- Validación de tipos de datos ---
    // Verifica que los campos `route`, `path` y `department` sean cadenas de texto
    if (typeof route !== 'string' || typeof path !== 'string' || typeof department !== 'string') {
      return res.status(400).json({ message: 'Los campos route, path y department deben ser cadenas de texto.' });
    }

    // Verifica que `startTime` y `endTime` sean cadenas de texto
    if (typeof startTime !== 'string' || typeof endTime !== 'string') {
      return res.status(400).json({ message: 'Los campos startTime y endTime deben ser cadenas de texto (formato de hora).' });
    }

    // --- Validación de URL ---
    // Usa una expresión regular para asegurarse de que el campo `path` sea una URL válida
    const pathRegex = /^(https?:\/\/)?([a-zA-Z0-9.-]+)(:[0-9]+)?(\/[^\s]*)?$/; // Regex para URL
    if (!pathRegex.test(path)) {
      return res.status(400).json({ message: 'El campo "path" debe ser una URL válida.' });
    }

    // --- Verificación de existencia de la ruta ---
    // Busca el índice de la ruta en el array de `routes` usando el `id`
    const index = routes.findIndex(r => r.route === id);

    // Si no se encuentra la ruta con el `id` proporcionado, responde con un error 404 (No encontrada)
    if (index === -1) {
      return res.status(404).json({ message: 'Ruta no encontrada' });
    }

    // --- Actualización de la ruta ---
    // Si la ruta existe, actualiza la ruta con los nuevos datos
    routes[index] = { ...routes[index], route, path, department, startTime, endTime };
    
    // Responde con un estado 200 (OK) y la ruta actualizada
    res.status(200).json(routes[index]);
  } catch (error) {
    // Si ocurre un error durante la actualización, responde con un error 500 (Error interno del servidor)
    res.status(500).json({ message: 'Error al actualizar la ruta', error });
  }
};

// Eliminar una ruta
exports.deleteRoute = (req, res) => {
  try {
    // Obtiene el `id` de la ruta a eliminar desde los parámetros de la solicitud
    const { id } = req.params;

    // --- Validación de que el `id` sea una cadena de texto ---
    if (typeof id !== 'string') {
      return res.status(400).json({ message: 'El id debe ser una cadena de texto.' });
    }

    // --- Verificación de existencia de la ruta ---
    // Busca el índice de la ruta en el array de `routes` usando el `id`
    const index = routes.findIndex(r => r.route === id);

    // Si no se encuentra la ruta con el `id` proporcionado, responde con un error 404 (No encontrada)
    if (index === -1) {
      return res.status(404).json({ message: 'Ruta no encontrada' });
    }

    // --- Eliminación de la ruta ---
    // Si la ruta existe, la elimina del array `routes` usando el índice encontrado
    const deletedRoute = routes.splice(index, 1);

    // Responde con un estado 200 (OK) y el objeto de la ruta eliminada
    res.status(200).json(deletedRoute);
  } catch (error) {
    // Si ocurre un error durante la eliminación, responde con un error 500 (Error interno del servidor)
    res.status(500).json({ message: 'Error al eliminar la ruta', error });
  }
};
