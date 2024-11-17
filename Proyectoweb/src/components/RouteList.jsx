import React, { useState, useEffect } from "react";
import axios from "axios";
import { FiSearch } from "react-icons/fi"; // Icono de lupa desde React Icons

const RouteList = ({ onRouteSelect }) => {
  const [routes, setRoutes] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRoutes, setFilteredRoutes] = useState([]);
  const [selectedRoute, setSelectedRoute] = useState(null);
  const [selectedDepartment, setSelectedDepartment] = useState(""); // Estado para departamento seleccionado
  const [departments, setDepartments] = useState([]); // Estado para los departamentos disponibles

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/routes")
      .then((response) => {
        if (Array.isArray(response.data)) {
          setRoutes(response.data);
          setFilteredRoutes(response.data);

          // Obtener lista de departamentos únicos
          const uniqueDepartments = [
            ...new Set(response.data.map(route => route.department)),
          ];
          setDepartments(uniqueDepartments);
        } else {
          console.error("La respuesta de la API no es un arreglo de rutas.");
        }
      })
      .catch((error) => {
        console.error("Error al obtener las rutas:", error);
      });
  }, []);

  const handleSearchChange = (event) => {
    const text = event.target.value;
    setSearchText(text);
    filterRoutes(text, selectedDepartment);
  };

  const handleDepartmentChange = (event) => {
    const department = event.target.value;
    setSelectedDepartment(department);
    filterRoutes(searchText, department);
  };

  const filterRoutes = (search, department) => {
    let filtered = routes.filter(
      (route) =>
        route.routeName.toLowerCase().includes(search.toLowerCase()) || // Usamos `routeName` en lugar de `route`
        route.startTime.toLowerCase().includes(search.toLowerCase()) || // Se puede buscar por `startTime` y `endTime`
        route.endTime.toLowerCase().includes(search.toLowerCase())
    );

    if (department) {
      filtered = filtered.filter(route => route.department === department);
    }

    setFilteredRoutes(filtered);
  };

  const handleCheckboxChange = (routeId) => {
    setSelectedRoute((prevSelectedRoute) =>
      prevSelectedRoute === routeId ? null : routeId
    );
  };

  return (
    <div className="route-list p-2 rounded" style={{ maxHeight: "500px", overflowY: "auto" }}>
      {/* Campo de búsqueda */}
      <div className="input-group mb-3">
        <span className="input-group-text">
          <FiSearch />
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="Buscar ruta..."
          value={searchText}
          onChange={handleSearchChange}
        />
      </div>

      {/* Filtro de departamentos usando Bootstrap */}
      <div className="mb-3">
        <label htmlFor="departmentSelect" className="form-label">
          Selecciona un departamento
        </label>
        <select
          id="departmentSelect"
          className="form-select"
          value={selectedDepartment}
          onChange={handleDepartmentChange}
        >
          <option value="">Todos los departamentos</option>
          {departments.map((department, index) => (
            <option key={index} value={department}>
              {department}
            </option>
          ))}
        </select>
      </div>

      {/* Renderización de rutas filtradas */}
      {filteredRoutes.length > 0 ? (
        filteredRoutes.map((route, index) => (
          <div key={index} className="d-flex align-items-center mb-3 p-2 border rounded">
            <input
              type="checkbox"
              checked={selectedRoute === route.routeNumber} // Cambié de `route.route` a `route.routeNumber`
              onChange={() => handleCheckboxChange(route.routeNumber)} // Cambié de `route.route` a `route.routeNumber`
              className="me-2"
            />
            <div className="d-flex flex-column">
              <div className="mb-2">
                <strong className="text-primary">{route.routeName}</strong> {/* Cambié de `route.route` a `route.routeName` */}
              </div>
              <span className="text-muted mb-1">
                {route.startTime} - {route.endTime} {/* Mostramos `startTime` y `endTime` */}
              </span>
              <strong className="text-success">{route.department}</strong> {/* Mantuvimos `department` */}
            </div>
          </div>
        ))
      ) : (
        <p>No se encontraron rutas.</p>
      )}
    </div>
  );
};

export default RouteList;
