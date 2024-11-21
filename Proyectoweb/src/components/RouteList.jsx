// RouteList.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import RouteItem from "./RouteItem"; // Importa el componente RouteItem

const RouteList = ({ onRouteSelect, selectedRoute }) => {
  const [routes, setRoutes] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/routes")
      .then((response) => {
        if (Array.isArray(response.data)) {
          setRoutes(response.data);
        } else {
          console.error("La respuesta de la API no es un arreglo de rutas.");
        }
      })
      .catch((error) => {
        console.error("Error al obtener las rutas:", error);
      });
  }, []);

  // Función que indica si la ruta está seleccionada
  const isRouteSelected = (route) => {
    return selectedRoute?.routeNumber === route.routeNumber;
  };

  return (
    <div className="route-list p-2 rounded" style={{ maxHeight: "500px", overflowY: "auto" }}>
      {/* Renderización de rutas */}
      {routes.length > 0 ? (
        routes.map((route, index) => (
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
