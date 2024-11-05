// Importa los datos de las rutas desde un archivo o base de datos simulada
let routes = require('../data/routesData');

// Obtener todas las rutas
exports.getAllRoutes = (req, res) => {
  // Responde con un código de estado 200 (OK) y todas las rutas en formato JSON
  res.status(200).json(routes);
};

// Agregar una nueva ruta
exports.createRoute = (req, res) => {
  // Obtiene los datos de la nueva ruta desde el cuerpo de la solicitud (req.body)
  const newRoute = req.body;

  // Agrega la nueva ruta al array de rutas
  routes.push(newRoute);

  // Responde con un código de estado 201 (Creado) y la ruta recién agregada
  res.status(201).json(newRoute);
};

// Actualizar una ruta existente
exports.updateRoute = (req, res) => {
  // Desestructura el 'id' de los parámetros de la solicitud (req.params)
  const { id } = req.params;

  // Busca el índice de la ruta que coincide con el id proporcionado
  const index = routes.findIndex(r => r.route === id);

  // Si no se encuentra la ruta, responde con un error 404 (No encontrada)
  if (index === -1) {
    return res.status(404).json({ message: 'Ruta no encontrada' });
  }

  // Si la ruta se encuentra, actualiza sus datos combinando los antiguos con los nuevos proporcionados en el cuerpo de la solicitud
  routes[index] = { ...routes[index], ...req.body };

  // Responde con un código de estado 200 (OK) y los datos actualizados de la ruta
  res.status(200).json(routes[index]);
};

// Eliminar una ruta
exports.deleteRoute = (req, res) => {
  // Desestructura el 'id' de los parámetros de la solicitud (req.params)
  const { id } = req.params;

  // Busca el índice de la ruta que coincide con el id proporcionado
  const index = routes.findIndex(route => route.route === id);

  // Si no se encuentra la ruta, responde con un error 404 (No encontrada)
  if (index === -1) {
    return res.status(404).json({ message: 'Ruta no encontrada' });
  }

  // Si la ruta se encuentra, elimina la ruta del array 'routes'
  const deletedRoute = routes.splice(index, 1);

  // Responde con un código de estado 200 (OK) y la ruta eliminada
  res.status(200).json(deletedRoute);
};
