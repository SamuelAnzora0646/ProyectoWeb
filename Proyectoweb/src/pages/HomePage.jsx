import React, { useState } from 'react';
import RouteList from '../components/RouteList';
import MapView from '../components/MapView';

const HomePage = () => {
  const [selectedRoutes, setSelectedRoutes] = useState([]);

  const handleRouteSelect = (route) => {
    setSelectedRoutes(prevRoutes => [...prevRoutes, route]);
  };

  return (
    <div className="container my-4">
      <div className="row">
        <div className="col-md-4 mb-4">
          <h5 className="mb-4">Lista de Rutas</h5>
          <RouteList onRouteSelect={handleRouteSelect} />
        </div>
        <div className="col-md-8">
          <h5 className="mb-3">Mapa de Rutas</h5>
          <MapView selectedRoutes={selectedRoutes} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
