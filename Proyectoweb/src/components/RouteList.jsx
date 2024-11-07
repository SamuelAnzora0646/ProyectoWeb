import React, { useState, useEffect } from "react";
import axios from "axios";
import { FiSearch } from "react-icons/fi"; // Icono de lupa desde React Icons

const RouteList = ({ onRouteSelect }) => {
  const [routes, setRoutes] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRoutes, setFilteredRoutes] = useState([]);
  const [selectedRoute, setSelectedRoute] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/routes")
      .then((response) => {
        if (Array.isArray(response.data)) {
          setRoutes(response.data);
          setFilteredRoutes(response.data);
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
    const filtered = routes.filter(
      (route) =>
        route.route.toLowerCase().includes(text.toLowerCase()) ||
        route.path.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredRoutes(filtered);
  };

  const handleCheckboxChange = (routeId) => {
    setSelectedRoute((prevSelectedRoute) =>
      prevSelectedRoute === routeId ? null : routeId
    );
  };

  return (
    <div className="route-list p-2 border rounded" style={{ maxHeight: "500px", overflowY: "auto" }}>
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

      {filteredRoutes.length > 0 ? (
        filteredRoutes.map((route, index) => (
          <div
            key={index}
            className="d-flex align-items-center mb-3 p-2 border rounded"
          >
            <input
              type="checkbox"
              checked={selectedRoute === route.route}
              onChange={() => handleCheckboxChange(route.route)}
              className="me-2"
            />
            <div className="d-flex flex-column">
              <div className="mb-2">
                <strong className="text-primary">{route.route}</strong>
              </div>
              <span className="text-muted mb-1">{route.path}</span>
              <strong className="text-success">{route.department}</strong>
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
