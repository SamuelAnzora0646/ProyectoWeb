import React, { useState, useEffect } from "react";
import axios from "axios";
import RouteItem from "./RouteItem"; // Importa el componente RouteItem

const RouteList = ({ onRouteSelect, selectedRoute }) => {
  const [routes, setRoutes] = useState([]);
  const [filteredRoutes, setFilteredRoutes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/routes")
      .then((response) => {
        if (Array.isArray(response.data)) {
          setRoutes(response.data);
          setFilteredRoutes(response.data);  // Inicializamos el listado filtrado con todas las rutas
          
          // Seleccionamos una ruta por defecto (por ejemplo, la primera de la lista)
          if (response.data.length > 0) {
            const defaultRoute = response.data[0];  // Ruta por defecto (la primera)
            onRouteSelect(defaultRoute);  // Llamamos a la función para marcarla como seleccionada
          }
        } else {
          console.error("La respuesta de la API no es un arreglo de rutas.");
        }
      })
      .catch((error) => {
        console.error("Error al obtener las rutas:", error);
      });
  }, []); // Solo se ejecuta una vez al cargar la página

  // Función que indica si la ruta está seleccionada
  const isRouteSelected = (route) => {
    return selectedRoute?.routeNumber === route.routeNumber;
  };

  // Filtrar rutas según el departamento seleccionado
  const handleDepartmentChange = (e) => {
    const department = e.target.value;
    setSelectedDepartment(department);

    // Filtrar las rutas por departamento
    const filteredByDepartment = routes.filter(
      (route) => !department || route.department.toLowerCase() === department.toLowerCase()
    );
    
    // Filtrar también por el término de búsqueda
    const filteredRoutes = filteredByDepartment.filter((route) =>
      route.routeNumber.toLowerCase().includes(searchTerm.toLowerCase().replace(/\s+/g, '')) ||
      route.routeName.toLowerCase().includes(searchTerm.toLowerCase().replace(/\s+/g, ''))
    );

    setFilteredRoutes(filteredRoutes);
  };

  // Función para manejar la búsqueda
  const handleSearchChange = (e) => {
    const search = e.target.value;  // No recortamos los espacios ahora
    setSearchTerm(search);

    // Filtrar rutas por el término de búsqueda, ignorando los espacios adicionales
    const filteredRoutes = routes.filter((route) =>
      route.routeNumber.toLowerCase().includes(search.toLowerCase().replace(/\s+/g, '')) ||
      route.routeName.toLowerCase().includes(search.toLowerCase().replace(/\s+/g, ''))
    );

    // Aplicar también el filtro por departamento si está seleccionado
    if (selectedDepartment) {
      setFilteredRoutes(filteredRoutes.filter((route) => route.department.toLowerCase() === selectedDepartment.toLowerCase()));
    } else {
      setFilteredRoutes(filteredRoutes);
    }
  };

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
            onSelect={onRouteSelect}  // Función que actualiza el estado de la ruta seleccionada
            isSelected={isRouteSelected(route)}  // Pasamos si la ruta está seleccionada
          />
        ))
      ) : (
        <p>No se encontraron rutas.</p>
      )}
    </div>
  );
};

export default RouteList;
