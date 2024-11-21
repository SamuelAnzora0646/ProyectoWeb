import React, { useState } from "react";

const RouteItem = ({ route, onSelect, isSelected }) => {
  // Estado para manejar la visibilidad de las paradas
  const [showStops, setShowStops] = useState(false);
  const [showOutbound, setShowOutbound] = useState(true); // Controla si se muestran las paradas de ida o vuelta

  // Función que maneja el evento del checkbox
  const handleSelectRoute = () => {
    onSelect(route);  // Enviar la ruta al componente padre (RutasPage)
  };

  // Función que maneja el evento del botón "Ver paradas"
  const toggleStops = () => {
    setShowStops(prev => !prev);  // Alterna la visibilidad de las paradas
  };

  // Función para alternar entre paradas de ida y vuelta
  const toggleDirection = () => {
    setShowOutbound(prev => !prev);  // Alterna entre outbound (ida) y return (vuelta)
  };

  return (
    <div className="route-item d-flex align-items-center mb-3 p-2 border rounded" style={{ padding: "5px 0" }}>
      {/* Checkbox para selección */}
      <input
        type="checkbox"
        checked={isSelected}  // Esto asegura que el checkbox esté marcado correctamente
        onChange={handleSelectRoute}  // Enviar al padre cuando el checkbox cambie
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
          {showStops ? "Ocultar paradas" : "Ver paradas"}
        </button>

        {/* Mostrar las paradas si showStops es true */}
        {showStops && (
          <div className="mt-2">
            <h6>Paradas:</h6>

            {/* Botón para alternar entre paradas de ida y vuelta */}
            <button className="btn btn-secondary mb-2" onClick={toggleDirection}>
              {showOutbound ? "Ver paradas de vuelta" : "Ver paradas de ida"}
            </button>

            {/* Lista de paradas */}
            <ul>
              {(showOutbound ? route.outbound : route.return)?.map((stop, index) => (
                <li key={index}>{stop}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default RouteItem;
