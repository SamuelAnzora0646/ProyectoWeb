import React, { useState } from "react";

const RouteItem = ({ route, onSelect, isSelected }) => {
  const [showStops, setShowStops] = useState(false); // Para controlar la visibilidad de las paradas

  const toggleStops = () => {
    setShowStops((prevState) => !prevState); // Alternar la visibilidad de las paradas
  };

  const handleSelectRoute = () => {
    onSelect(route.routeNumber); // Informa al padre de la selección
  };

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

        {/* Mostrar el iframe solo si se ha seleccionado */}
        {isSelected && route.map && (
          <div className="map-container mt-3">
            <iframe
              src={route.map.match(/src='([^']+)'/)?.[1] || ""}
              width="640"
              height="480"
              style={{ border: "none" }}
              title={`Mapa de la Ruta ${route.routeNumber}`}
            ></iframe>
          </div>
        )}
      </div>
    </div>
  );
};

export default RouteItem;
