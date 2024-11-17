// Middleware para validar los datos de una ruta antes de procesarlos
const validateRoute = (req, res, next) => {
  
  // Desestructura los campos necesarios del cuerpo de la solicitud (req.body)
  // Esto nos permite acceder a los campos 'route', 'path' y 'department' directamente
  const { route, path, department } = req.body;

  // Verifica si falta alguno de los campos requeridos (route, path, department)
  // Si falta alguno de estos campos, se responde con un error 400 (Bad Request)
  // El mensaje explica qué campos son obligatorios
  if (!route || !path || !department) {
    return res.status(400).json({ message: 'Todos los campos (route, path, department) son obligatorios.' });
  }

  // Validación del tipo de dato para cada campo
  // Asegura que los campos 'route', 'path' y 'department' sean cadenas de texto (strings)
  // Si alguno no es una cadena de texto, se devuelve un error 400
  if (typeof route !== 'string' || typeof path !== 'string' || typeof department !== 'string') {
    return res.status(400).json({ message: 'Los campos deben ser cadenas de texto (strings).' });
  }

  // Validación del formato de 'path' como una URL válida
  // Usamos una expresión regular (regex) para comprobar que 'path' tenga el formato correcto de una URL
  const pathRegex = /^(https?:\/\/)?([a-zA-Z0-9.-]+)(:[0-9]+)?(\/[^\s]*)?$/;  // Regex para validar URLs
  
  // Si 'path' no coincide con el formato de una URL válida, se responde con un error 400
  // Explicando que el campo "path" debe tener una URL válida
  if (!pathRegex.test(path)) {
    return res.status(400).json({ message: 'El campo "path" debe ser una URL válida.' });
  }

  // Si todos los campos son válidos, pasa al siguiente middleware o controlador
  // Llamamos a 'next()' para que la solicitud continúe siendo procesada
  next();
};

// Exporta el middleware para que pueda ser utilizado en otras partes de la aplicación
module.exports = validateRoute;
