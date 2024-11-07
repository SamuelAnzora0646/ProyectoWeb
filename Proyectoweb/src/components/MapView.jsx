import React, { useEffect } from 'react';

// Función para cargar el script de Google Maps si no está cargado
const loadGoogleMapsScript = (callback) => {
  if (typeof window.google === 'undefined') {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY`;
    script.async = true;
    script.defer = true;
    script.onload = callback;
    document.head.appendChild(script);
  } else {
    callback();
  }
};

const MapView = ({ selectedRoutes }) => {
  useEffect(() => {
    loadGoogleMapsScript(() => {
      const map = new window.google.maps.Map(document.getElementById("map"), {
        center: { lat: 13.69294, lng: -89.21819 },
        zoom: 10,
      });

      // Añadir marcadores para cada ruta seleccionada
      selectedRoutes.forEach(route => {
        new window.google.maps.Marker({
          position: route.coordinates,
          map,
          title: route.route,
        });
      });
    });
  }, [selectedRoutes]);

  return (
    <div className="container-fluid">
      <div id="map" className="w-100" style={{ height: '500px' }}></div>
    </div>
  );
};

export default MapView;
