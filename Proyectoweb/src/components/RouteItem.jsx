import React, { useState, useEffect } from "react";

const RouteItem = ({ route, onSelect, isSelected }) => {
  const [showStops, setShowStops] = useState(false); // Para controlar la visibilidad de las paradas
  const [mapUrl, setMapUrl] = useState(""); // Variable para almacenar la URL del mapa

  const toggleStops = () => {
    setShowStops((prevState) => !prevState); // Alternar la visibilidad de las paradas
  };

  const handleSelectRoute = () => {
    onSelect(route.routeNumber);
    setMapUrl(route.map); // Guardamos la URL del mapa en la variable de estado `mapUrl`
  };

  // Verificar en la consola que `mapUrl` se actualiza correctamente
  useEffect(() => {
    // Solo se actualiza si route.map tiene un valor
    if (route.map) {
      setMapUrl(route.map);
    }
  }, [route.map]); // Esto se ejecuta cuando `route.map` cambia

  return (
    <div
      className="route-item d-flex align-items-center mb-3 p-2 border rounded"
      style={{ padding: "5px 0" }}
    >
      {/* Checkbox para selección */}
      <input
        type="checkbox"
        checked={isSelected}
        onChange={handleSelectRoute}
        className="me-2"
      />

      {/* Información de la ruta */}
      <div className="d-flex flex-column">
        <div className="mb-1">
          <small>
            <strong>Ruta:</strong> {route.routeNumber}
          </small>
        </div>

        <div className="mb-2">
          <strong className="text-primary">{route.routeName}</strong>
        </div>

        <div className="mb-1">
          <small>
            <strong>Horario:</strong> {route.startTime} - {route.endTime}
          </small>
        </div>

        <div>
          <small>
            <strong>Departamento:</strong> {route.department}
          </small>
        </div>

        {/* Botón para ver las paradas */}
        <button className="btn btn-info mt-2" onClick={toggleStops}>
          Ver paradas
        </button>

        {/* Mostrar las paradas de salida y regreso */}
        {showStops && (
          <div className="stops-info mt-2">
            <div>
              <strong>Paradas de ida:</strong>
              <ul>
                {route.outbound.map((stop, index) => (
                  <li key={index}>{stop}</li>
                ))}
              </ul>
            </div>
            {route.return && route.return.length > 0 && (
              <div>
                <strong>Paradas de regreso:</strong>
                <ul>
                  {route.return.map((stop, index) => (
                    <li key={index}>{stop}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {/* Mostrar el mapa como texto (usando la variable mapUrl) */}
        {mapUrl && (
          <div className="map-text mt-3">
            {/* <strong>Mapa de la Ruta:</strong> */}
            {/* <p>{mapUrl}</p>  */}
          </div>
        )}
      </div>
    </div>
  );
};

export default RouteItem;
