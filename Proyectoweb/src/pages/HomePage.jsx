import React, { useState } from 'react';
import RouteList from '../components/RouteList';
import MapView from '../components/MapView';

const HomePage = () => {
  const [selectedRoutes, setSelectedRoutes] = useState([]);

  const handleRouteSelect = (route) => {
    setSelectedRoutes((prevRoutes) => [...prevRoutes, route]);
  };

  return (
<div className="container my-4">
  <div className="row h-100" style={{ height: 'calc(100vh - 100px)' }}>
    {/* Lista de Rutas */}
    <div className="col-md-5 d-flex flex-column h-100">
      <h5 className="mb-4">Lista de Rutas</h5>
      <div className="flex-grow-1 overflow-auto border p-2">
        <RouteList onRouteSelect={handleRouteSelect} />
      </div>
    </div>
    
    {/* Mapa de Rutas */}
    <div className="col-md-7 d-flex flex-column h-100">
      {/* Agregando margen inferior al título */}
      <h5 className="mb-4">Mapa de Rutas</h5> 
      <div className="flex-grow-1 border">
        <MapView selectedRoutes={selectedRoutes} />
      </div>
    </div>
  </div>
</div>

  );
};

export default HomePage;
