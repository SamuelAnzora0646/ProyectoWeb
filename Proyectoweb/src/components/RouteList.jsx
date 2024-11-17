import React, { useState, useEffect } from "react";
import axios from "axios";
import { FiSearch } from "react-icons/fi"; // Icono de lupa desde React Icons
import RouteItem from "./RouteItem"; // Importa el componente RouteItem

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
    filterRoutes(text.trim(), selectedDepartment); // Usamos `.trim()` para quitar los espacios extra
  };

  const handleDepartmentChange = (event) => {
    const department = event.target.value;
    setSelectedDepartment(department);
    filterRoutes(searchText.trim(), department); // También se quitan los espacios al filtrar
  };

  const filterRoutes = (search, department) => {
    let filtered = routes.filter(
      (route) =>
        route.routeName.toLowerCase().includes(search.toLowerCase()) || // Buscamos por nombre de la ruta
        route.startTime.toLowerCase().includes(search.toLowerCase()) || // Buscamos por hora de inicio
        route.endTime.toLowerCase().includes(search.toLowerCase()) || // Buscamos por hora de fin
        route.routeNumber.toLowerCase().includes(search.toLowerCase()) // Buscamos por número de ruta
    );

    if (department) {
      filtered = filtered.filter(route => route.department === department); // Filtramos por departamento si se selecciona
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
          <RouteItem
            key={index}
            route={route}
            onSelect={handleCheckboxChange}
            isSelected={selectedRoute === route.routeNumber}
          />
        ))
      ) : (
        <p>No se encontraron rutas.</p>
      )}
    </div>
  );
};

export default RouteList;
