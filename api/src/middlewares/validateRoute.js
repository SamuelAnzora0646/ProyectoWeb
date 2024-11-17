// Middleware para validar los datos de una ruta antes de procesarlos
const validateRoute = (req, res, next) => {
  
  // Desestructura los campos necesarios del cuerpo de la solicitud (req.body)
  const { route, path, department } = req.body;

  // Verifica si falta alguno de los campos requeridos (route, path, department)
  if (!route || !path || !department) {
    // Si algún campo falta, responde con un código de estado 400 (Bad Request)
    // y un mensaje indicando que todos los campos son obligatorios
    return res.status(400).json({ message: 'Todos los campos son obligatorios' });
  }

  // Si todos los campos están presentes, pasa al siguiente middleware o función
  next();
};

// Exporta el middleware para que pueda ser utilizado en otras partes de la aplicación
module.exports = validateRoute;
