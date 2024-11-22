import React, { useState } from 'react';
import RouteList from '../components/RouteList';
import MapView from '../components/MapView';

const RutasPage = () => {
  const [selectedRoute, setSelectedRoute] = useState(null);
  const [selectedMapUrl, setSelectedMapUrl] = useState('');

  const handleRouteSelect = (route) => {
    if (selectedRoute?.routeNumber === route.routeNumber) {
      setSelectedRoute(null);
      setSelectedMapUrl('');
    } else {
      setSelectedRoute(route);
      const mapUrl = route.map.match(/src='([^']+)'/)?.[1] || '';
      setSelectedMapUrl(mapUrl);
    }
  };

  return (
    <div className="container-fluid px-3">
      <div className="row g-3 mb-5">
        {/* Lista de Rutas */}
        <div className="col-12 col-md-5 d-flex flex-column">
          <h5 className="mb-3 text-center text-md-start">Lista de Rutas</h5>
          <div className="border flex-grow-1 p-2 overflow-auto">
            <RouteList
              onRouteSelect={handleRouteSelect}
              selectedRoute={selectedRoute}
            />
          </div>
        </div>

        {/* Mapa de Rutas */}
        <div className="col-12 col-md-7 d-flex flex-column">
          <h5 className="mb-3 text-center text-md-start">Mapa de Rutas</h5>
          <div className="border flex-grow-1" style={{ minHeight: '400px' }}>
            <MapView mapUrl={selectedMapUrl} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RutasPage;
