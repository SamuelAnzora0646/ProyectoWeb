import React, { useEffect } from 'react';

const GMAPS = import.meta.env.VITE_MAPS_URL;
// Función para inicializar el mapa
const initMap = async (selectedRoutes) => {
  // Importa la librería de Google Maps de forma asíncrona
  const { Map, Marker } = await google.maps.importLibrary("maps");
  const map = new Map(document.getElementById("map"), {
    center: { lat: 13.69294, lng: -89.21819 },
    zoom: 12,
  });

  // Añade un marcador por cada ruta seleccionada
  selectedRoutes.forEach(route => {
    new Marker({
      position: route.coordinates,
      map,
      title: route.route,
    });
  });
};

// Componente principal que muestra el mapa
const MapView = ({ selectedRoutes }) => {
  useEffect(() => {
    // Cargar el script de Google Maps y luego inicializar el mapa
    const loadGoogleMapsScript = () => {
      const script = document.createElement('script');
      script.src = `${GMAPS}`;
      script.async = true;
      script.onload = () => initMap(selectedRoutes); // Llama a `initMap` cuando el script está cargado
      document.head.appendChild(script);
    };

    // Verifica si `google` ya está cargado, de lo contrario carga el script
    if (!window.google) {
      loadGoogleMapsScript();
    } else {
      initMap(selectedRoutes);
    }
  }, [selectedRoutes]); // Ejecuta el efecto cada vez que `selectedRoutes` cambia

  // Renderiza el contenedor del mapa
  return (
    <div className="container-fluid p-2">
      <div id="map" className="w-100" style={{ height: '500px' }}></div>
    </div>
  );
};

export default MapView;
