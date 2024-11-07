import React, { useState, useEffect } from "react";
import axios from "axios";
import { FiSearch } from "react-icons/fi"; // Importamos el icono de lupa desde React Icons
import RouteItem from "./RouteItem";

const RouteList = ({ onRouteSelect }) => {
  // Lista completa de rutas
  const [routes, setRoutes] = useState([]); 
  // Texto de búsqueda
  const [searchText, setSearchText] = useState(""); 
  // Rutas filtradas
  const [filteredRoutes, setFilteredRoutes] = useState([]);
  // ID de la ruta seleccionada
  const [selectedRoute, setSelectedRoute] = useState(null);

  // Cuando se carga el componente, obtenemos las rutas de la API
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/routes")
      .then((response) => {
        // Asegúrate de que los datos son correctos
        console.log("Datos de la API:", response.data); 
        if (Array.isArray(response.data)) {
          // Guarda las rutas completas
          setRoutes(response.data); 
          // Inicializa las rutas filtradas
          setFilteredRoutes(response.data); 
        } else {
          console.error("La respuesta de la API no es un arreglo de rutas.");
        }
      })
      .catch((error) => {
        console.error("Error al obtener las rutas:", error);
      });
  }, []);

  // Maneja el cambio en el campo de búsqueda
  const handleSearchChange = (event) => {
    const text = event.target.value;
    // Actualiza el texto de búsqueda
    setSearchText(text); 

    // Filtra las rutas según el texto de búsqueda
    const filtered = routes.filter(
      (route) =>
        route.route.toLowerCase().includes(text.toLowerCase()) ||
        route.path.toLowerCase().includes(text.toLowerCase())
    );

    // Actualiza las rutas filtradas
    setFilteredRoutes(filtered); 
  };

  // Maneja la selección de rutas (checkbox)
  const handleCheckboxChange = (routeId) => {
    setSelectedRoute((prevSelectedRoute) =>
      // Si ya está seleccionado, desmarcarlo, sino seleccionarlo
      prevSelectedRoute === routeId ? null : routeId 
    );
  };

  return (
    <div
      className="route-list p-2"
      style={{
        maxHeight: "500px",
        overflowY: "scroll",
        border: "1px solid #ddd",
        borderRadius: "5px",
      }}
    >
      <div className="input-group mb-3 ">
        <span className="input-group-text">
           {/* Usamos el icono de lupa de React Icons */}
          <FiSearch />
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="Buscar ruta..."
          value={searchText}
          // Maneja el evento de cambio
          onChange={handleSearchChange} 
        />
      </div>
      {filteredRoutes.length > 0 ? (
        filteredRoutes.map((route, index) => (
          <div
            key={index}
            className="d-flex align-items-center mb-3 p-2 border rounded"
          >
            {/* Checkbox para seleccionar la ruta */}
            <input
              type="checkbox"
              // Verifica si la ruta está seleccionada
              checked={selectedRoute === route.route} 
              // Llama a la función cuando cambie
              onChange={() => handleCheckboxChange(route.route)} 
              // Clase de margen a la derecha para separar el checkbox
              className="me-3" 
            />
            {/* Contenedor para la información de la ruta */}
            <div className="route-info d-flex flex-column">
              <div className="d-flex justify-content-between mb-2">
                {/* Azul para el nombre de la ruta */}
                <strong className="route-name text-primary">
                  {route.route}
                </strong>
              </div>
              <div className="d-flex flex-column">
                {/* Gris para el recorrido */}
                <span className="route-path mb-3">{route.path}</span>
                {/* Verde para el departamento */}
                <strong>
                  <span className="route-department text-primary">
                    {route.department}
                  </span>
                </strong>
              </div>
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
