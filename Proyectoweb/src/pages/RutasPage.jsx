// RutasPage.js
import React, { useState } from 'react';
import RouteList from '../components/RouteList';
import MapView from '../components/MapView';

const RutasPage = () => {
  const [selectedRoute, setSelectedRoute] = useState(null);  // Solo una ruta seleccionada
  const [selectedMapUrl, setSelectedMapUrl] = useState('');   // URL del mapa seleccionada

  // Función que maneja la selección de una ruta
  const handleRouteSelect = (route) => {
    // Si la misma ruta es seleccionada nuevamente, la desmarcamos
    if (selectedRoute?.routeNumber === route.routeNumber) {
      setSelectedRoute(null);
      setSelectedMapUrl('');
    } else {
      setSelectedRoute(route);  // Seleccionamos la nueva ruta
      const mapUrl = route.map.match(/src='([^']+)'/)?.[1] || '';  // Extraemos la URL del mapa
      setSelectedMapUrl(mapUrl);  // Guardamos la URL del mapa seleccionada
    }
  };

  return (
    <div className="container my-4">
      <div className="row h-100" style={{ height: 'calc(100vh - 100px)' }}>
        {/* Lista de Rutas */}
        <div className="col-md-5 d-flex flex-column h-100">
          <h5 className="mb-4">Lista de Rutas</h5>
          <div className="flex-grow-1 overflow-auto border p-2">
            <RouteList
              onRouteSelect={handleRouteSelect}  // Función de selección de ruta
              selectedRoute={selectedRoute}  // Pasamos la ruta seleccionada
            />
          </div>
        </div>

        {/* Mapa de Rutas */}
        <div className="col-md-7 d-flex flex-column h-100">
          <h5 className="mb-4">Mapa de Rutas</h5>
          <div className="flex-grow-1 border">
            <MapView mapUrl={selectedMapUrl} />  {/* Pasamos la URL del mapa a MapView */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RutasPage;
