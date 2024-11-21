import React, { useEffect } from "react";

const MapView = ({ mapUrl }) => {
  useEffect(() => {
    if (!mapUrl) return;  // No renderizar nada si no hay URL

    // Limpiar el contenedor del mapa antes de agregar un nuevo iframe
    const mapContainer = document.getElementById("map");
    mapContainer.innerHTML = '';  // Limpiamos el contenedor

    // Crear un iframe con la URL del mapa
    const iframe = document.createElement("iframe");
    iframe.src = mapUrl;
    iframe.width = "100%";    // Ancho del iframe al 100% del contenedor
    iframe.height = "100%";   // Alto del iframe al 100% del contenedor
    iframe.style.border = "none";  // Sin borde
    mapContainer.appendChild(iframe);  // Añadir el iframe al contenedor
  }, [mapUrl]);  // Se ejecuta cuando `mapUrl` cambia

  return (
    <div
      id="map"
      className="d-flex flex-column w-100 h-100"
      style={{ height: '100%' }}
    ></div>  // Contenedor donde se monta el iframe
  );
};

export default MapView;
