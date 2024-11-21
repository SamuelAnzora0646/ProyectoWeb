// MapView.js
import React, { useEffect } from "react";

const MapView = ({ mapUrl }) => {
  useEffect(() => {
    if (!mapUrl) return;  // Si no hay URL, no renderizamos nada

    // Usamos un iframe para mostrar el mapa
    const iframe = document.createElement("iframe");
    iframe.src = mapUrl;
    iframe.width = "100%";
    iframe.height = "100%";
    iframe.style.border = "none";
    document.getElementById("map").appendChild(iframe);
  }, [mapUrl]);  // Solo se ejecuta si `mapUrl` cambia

  return <div id="map" style={{ height: "100%" }}></div>;  // Contenedor del mapa
};

export default MapView;
