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
      // Inicia el mapa solo cuando `window.google` está disponible
      const map = new window.google.maps.Map(document.getElementById("map"), {
        center: { lat: 13.69294, lng: -89.21819 }, // Coordenadas iniciales
        zoom: 10, // Nivel de zoom
      });

      // Añadir marcadores para cada ruta seleccionada
      selectedRoutes.forEach(route => {
        new window.google.maps.Marker({
          position: route.coordinates, // Usa las coordenadas proporcionadas en `route`
          map,
          title: route.route, // Título del marcador
        });
      });
    });
  }, [selectedRoutes]); // Se ejecuta cada vez que `selectedRoutes` cambia

  return <div id="map" style={{ height: '500px', width: '100%' }}></div>;
};

export default MapView;
