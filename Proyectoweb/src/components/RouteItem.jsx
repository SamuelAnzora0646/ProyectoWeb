import React from 'react';

const RouteItem = ({ route, onSelect, isSelected }) => {
  return (
    <div
      className="route-item d-flex align-items-center mb-3 p-2 border rounded"
      style={{ padding: '5px 0' }}
    >
      {/* Checkbox para selección */}
      <input
        type="checkbox"
        checked={isSelected}
        onChange={() => onSelect(route.routeNumber)}
        className="me-2"
      />

      {/* Información de la ruta */}
      <div className="d-flex flex-column">
        {/* Número de ruta primero */}
        <div className="mb-1">
          <small><strong>Ruta:</strong> {route.routeNumber}</small>
        </div>
        
        {/* Nombre de la ruta */}
        <div className="mb-2">
          <strong className="text-primary">{route.routeName}</strong>
        </div>
        
        {/* Horario */}
        <div className="mb-1">
          <small><strong>Horario:</strong> {route.startTime} - {route.endTime}</small>
        </div>
        
        {/* Departamento */}
        <div>
          <small><strong>Departamento:</strong> {route.department}</small>
        </div>
      </div>
    </div>
  );
};

export default RouteItem;
