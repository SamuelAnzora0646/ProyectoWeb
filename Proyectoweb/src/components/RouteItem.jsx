import React from 'react';

const RouteItem = ({ route, onSelect }) => {
  return (
    <div className="route-item" style={{ padding: '5px 0' }}>
      {/* Aquí puedes personalizar la vista de cada ruta */}
      <div>
        <strong>{route.route}</strong>
        <p>{route.path}</p>
        <small>{route.department}</small>
      </div>
    </div>
  );
};

export default RouteItem;
