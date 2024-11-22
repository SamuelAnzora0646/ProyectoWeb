import React, { useState } from "react";

const RouteItem = ({ route, onSelect, isSelected }) => {
  const [showStops, setShowStops] = useState(false);
  const [isOutbound, setIsOutbound] = useState(true); // Renombrado a `isOutbound`

  const handleSelectRoute = () => {
    onSelect(route);
  };

  const toggleStops = () => {
    setShowStops((prev) => !prev);
  };

  const toggleDirection = () => {
    setIsOutbound((prev) => !prev);
  };

  return (
    <div className="route-item border rounded p-3 mb-3">
      <div className="d-flex align-items-start">
        {/* Checkbox */}
        <input
          type="checkbox"
          className="form-check-input me-3"
          checked={isSelected}
          onChange={handleSelectRoute}
        />

        {/* Información de la ruta */}
        <div className="flex-grow-1">
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
        </div>
      </div>

      {/* Botón para ver paradas */}
      <div className="d-flex justify-content-center mt-3">
        <button
          className="btn btn-info btn-sm"
          onClick={toggleStops}
        >
          {showStops ? "Ocultar paradas" : "Ver paradas"}
        </button>
      </div>

      {/* Mostrar paradas si showStops es true */}
      {showStops && (
        <div className="mt-3">
          <h6>Paradas:</h6>

          {/* Botón para alternar entre paradas */}
          <div className="d-flex justify-content-center mb-2">
            <button
              className="btn btn-secondary btn-sm"
              onClick={toggleDirection}
            >
              {isOutbound ? "Ver paradas de vuelta" : "Ver paradas de ida"}
            </button>
          </div>

          {/* Lista de paradas */}
          <ul className="list-group">
            {/* Mostrar las paradas según la dirección */}
            {(isOutbound ? route.outbound : route.return)?.map((stop, index) => (
              <li key={index} className="list-group-item p-2">
                {stop}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default RouteItem;
