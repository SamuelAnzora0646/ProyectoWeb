import React, { useEffect } from "react";
import { Loader } from "@googlemaps/js-api-loader";

// Datos de prueba: rutas predefinidas
const testRoutes = [
  {
    name: "Ruta 1",
    startPoint: { lat: 13.69294, lng: -89.21819 },
    endPoint: { lat: 13.71000, lng: -89.24000 },
    path: [
      { lat: 13.69294, lng: -89.21819 },
      { lat: 13.70000, lng: -89.22000 },
      { lat: 13.71000, lng: -89.24000 },
    ],
  },
  {
    name: "Ruta 2",
    startPoint: { lat: 13.70000, lng: -89.23000 },
    endPoint: { lat: 13.70500, lng: -89.24000 },
    path: [
      { lat: 13.70000, lng: -89.23000 },
      { lat: 13.70200, lng: -89.23500 },
      { lat: 13.70500, lng: -89.24000 },
    ],
  },
];

// Accede a la API Key desde las variables de entorno
const GMAPS = import.meta.env.VITE_MAPS_API_KEY;

const MapView = () => {
  useEffect(() => {
    // Carga la API de Google Maps usando la API Key
    const loader = new Loader({
      apiKey: GMAPS,
      version: "weekly",
      libraries: ["places"],
    });

    loader.load().then(() => {
      // Crea el mapa
      const map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 13.69294, lng: -89.21819 },
        zoom: 12,
      });

      // Añade las rutas de prueba al mapa
      testRoutes.forEach((route) => {
        // Marcador del punto de inicio
        new google.maps.Marker({
          position: route.startPoint,
          map,
          title: `Inicio: ${route.name}`,
        });

        // Marcador del punto final
        new google.maps.Marker({
          position: route.endPoint,
          map,
          title: `Final: ${route.name}`,
        });

        // Dibuja la ruta como Polyline
        new google.maps.Polyline({
          path: route.path,
          geodesic: true,
          strokeColor: "#FF0000",
          strokeOpacity: 1.0,
          strokeWeight: 4,
          map,
        });
      });
    });
  }, []);

  return (
      <iframe src="https://www.google.com/maps/d/u/1/embed?mid=1w52p3b-BY7d1gvAqBJ01MZAY3QkWUX4&ehbc=2E312F&noprof=1" width="640" height="480"></iframe>
  );
};

export default MapView;
