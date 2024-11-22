import React, { useState, useEffect } from "react";
import axios from "axios";
import RouteItem from "./RouteItem"; // Importa el componente RouteItem

const RouteList = ({ onRouteSelect, selectedRoute }) => {
  const [routes, setRoutes] = useState([]);
  const [filteredRoutes, setFilteredRoutes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [loading, setLoading] = useState(true); // Estado de carga
  const [error, setError] = useState(null); // Para manejar errores

  useEffect(() => {
    // Cargar las rutas desde la API
    axios
      .get("https://login-565c8-default-rtdb.firebaseio.com/.json")
      .then((response) => {
        if (Array.isArray(response.data)) {
          setRoutes(response.data);
          setFilteredRoutes(response.data); // Inicializamos el listado filtrado con todas las rutas
          setLoading(false); // Detenemos el estado de carga

          // Seleccionamos una ruta por defecto (por ejemplo, la primera de la lista)
          if (response.data.length > 0) {
            const defaultRoute = response.data[0]; // Ruta por defecto (la primera)
            onRouteSelect(defaultRoute); // Llamamos a la función para marcarla como seleccionada
          }
        } else {
          setError("La respuesta de la API no es un arreglo de rutas.");
          setLoading(false);
        }
      })
      .catch((error) => {
        setError("Error al obtener las rutas: " + error.message);
        setLoading(false);
      });
  }, []); // Solo se ejecuta una vez al cargar la página

  // Función que indica si la ruta está seleccionada
  const isRouteSelected = (route) => {
    return selectedRoute?.routeNumber === route.routeNumber;
  };

  // Centralizar la lógica de filtrado de rutas
  const filterRoutes = () => {
    let filtered = routes;

    // Filtrar por término de búsqueda, permitiendo los espacios
    if (searchTerm.trim()) {  // Solo filtrar si hay texto no vacío
      const searchTermLower = searchTerm.toLowerCase().trim();  // Recortamos el término de búsqueda
      filtered = filtered.filter((route) =>
        route.routeNumber?.toLowerCase().includes(searchTermLower) ||
        route.routeName?.toLowerCase().includes(searchTermLower)
      );
    }

    // Filtrar por departamento
    if (selectedDepartment) {
      filtered = filtered.filter(
        (route) => route.department?.toLowerCase() === selectedDepartment.toLowerCase()
      );
    }

    setFilteredRoutes(filtered);
  };

  // Llamar a la función de filtro cada vez que el término de búsqueda o el departamento cambian
  useEffect(() => {
    if (routes.length > 0) {
      filterRoutes();
    }
  }, [searchTerm, selectedDepartment, routes]); // Dependencias: se ejecuta cada vez que cambian estos valores

  // Función para manejar el cambio de búsqueda
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value); // Actualiza el término de búsqueda
  };

  // Función para manejar el cambio de departamento
  const handleDepartmentChange = (e) => {
    setSelectedDepartment(e.target.value); // Actualiza el departamento seleccionado
  };

  if (loading) {
    return <div>Cargando rutas...</div>; // Estado de carga
  }

  if (error) {
    return <div>Error: {error}</div>; // Mensaje de error
  }

  return (
    <div className="route-list p-2 rounded" style={{ maxHeight: "500px", overflowY: "auto" }}>
      {/* Buscador arriba */}
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Buscar ruta..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <span className="input-group-text">
          <i className="bi bi-search"></i> {/* Icono de búsqueda */}
        </span>
      </div>

      {/* Filtro por Departamento abajo */}
      <div className="d-flex justify-content-between mb-3">
        <select
          className="form-select w-50"
          value={selectedDepartment}
          onChange={handleDepartmentChange}
        >
          <option value="">Todos los departamentos</option>
          {/* Lista de departamentos (puedes obtenerla de la API o usar una lista fija) */}
          {[...new Set(routes.map(route => route.department))].map((department, index) => (
            <option key={index} value={department}>
              {department.charAt(0).toUpperCase() + department.slice(1)}
            </option>
          ))}
        </select>
      </div>

      {/* Renderización de rutas */}
      {filteredRoutes.length > 0 ? (
        filteredRoutes.map((route, index) => (
          <RouteItem
            key={index}
            route={route}
            onSelect={onRouteSelect} // Función que actualiza el estado de la ruta seleccionada
            isSelected={isRouteSelected(route)} // Pasamos si la ruta está seleccionada
          />
        ))
      ) : (
        <p>No se encontraron rutas.</p>
      )}
    </div>
  );
};

export default RouteList;
