import React, { useEffect } from 'react';

const loadGoogleMapsScript = (callback) => {
  if (typeof window.google === 'undefined') {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap`;
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
      // Inicia el mapa solo cuando `window.google` está disponible
      const map = new window.google.maps.Map(document.getElementById("map"), {
        center: { lat: 13.69294, lng: -89.21819 },
        zoom: 10,
      });

      // Añadir marcadores para cada ruta seleccionada
      selectedRoutes.forEach(route => {
        new window.google.maps.Marker({
          position: route.coordinates, // Usa las coordenadas proporcionadas en `route`
          map,
          title: route.route,
        });
      });
    });
  }, [selectedRoutes]);

  return <div id="map" style={{ height: '500px', width: '100%' }}></div>;
};

export default MapView;
