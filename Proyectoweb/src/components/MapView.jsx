import React, { useEffect } from "react";

const MapView = ({ mapUrl }) => {
  useEffect(() => {
    if (!mapUrl) return; // No renderizar nada si no hay URL

    // Limpiar el contenedor del mapa antes de agregar un nuevo iframe
    const mapContainer = document.getElementById("map");
    mapContainer.innerHTML = ""; // Limpiamos el contenedor

    // Crear un iframe con la URL del mapa
    const iframe = document.createElement("iframe");
    iframe.src = mapUrl;
    iframe.width = "100%"; // Ancho del iframe al 100% del contenedor
    iframe.height = "100%"; // Alto del iframe al 100% del contenedor
    iframe.style.border = "none"; // Sin borde
    mapContainer.appendChild(iframe); // Añadir el iframe al contenedor
  }, [mapUrl]); // Se ejecuta cuando `mapUrl` cambia

  return (
    <div
      id="map"
      className="d-flex flex-column w-100 h-100"
      style={{ height: "100%" }}
    ></div> // Contenedor donde se monta el iframe
  );
};

export default MapView;

// Explicación del Código:

//     Importaciones:
//         React, { useEffect }: Importas React y el hook useEffect para manejar efectos secundarios, como la manipulación del DOM.

//     Componente MapView:
//         Propiedades (props): El componente recibe una propiedad llamada mapUrl, que contiene la URL del mapa que se mostrará dentro del iframe.

//     Uso de useEffect:
//         useEffect es un hook que se utiliza para ejecutar efectos secundarios en un componente funcional. En este caso, se utiliza para actualizar el mapa cada vez que cambia la propiedad mapUrl.
//         useEffect tiene un arreglo de dependencias ([mapUrl]), lo que significa que solo se ejecutará cuando el valor de mapUrl cambie. Si mapUrl no ha cambiado, el efecto no se ejecutará de nuevo.

//     Lógica dentro de useEffect:
//         Condición Inicial: Primero, el código verifica si mapUrl no está definido. Si no hay una URL proporcionada, simplemente retorna y no hace nada. Esto previene que el componente intente renderizar un mapa sin URL.
//         Limpiar el Contenedor del Mapa: Luego, selecciona el contenedor del mapa (un <div> con id map) y limpia su contenido (mapContainer.innerHTML = '';). Esto es necesario porque cada vez que se cambia la URL del mapa, el componente debe limpiar el contenido previo para evitar que se agreguen múltiples iframes innecesarios.
//         Crear y Agregar el iframe: Después, crea un nuevo <iframe>, le asigna la URL del mapa a través de iframe.src = mapUrl, y ajusta sus dimensiones (iframe.width = "100%", iframe.height = "100%") para que ocupe todo el espacio disponible en el contenedor.
//             También se establece iframe.style.border = "none" para quitar el borde del iframe.
//             Finalmente, el iframe se añade al contenedor del mapa con mapContainer.appendChild(iframe).

//     Renderizado del Componente:
//         En la parte de renderizado del componente (return), se devuelve un <div> con el id map. Este es el contenedor donde se insertará el iframe. Se usan las clases de Bootstrap d-flex flex-column w-100 h-100 para asegurarse de que el contenedor ocupe todo el espacio disponible, tanto en ancho como en altura, y se renderice de manera flexible.
//         El estilo height: '100%' asegura que el contenedor tenga una altura completa.

// Flujo del Componente:

//     El componente recibe una URL de mapa a través de la propiedad mapUrl.
//     Cuando mapUrl cambia, el efecto useEffect se dispara:
//         Si mapUrl es válido (no null o vacío), limpia el contenedor donde se insertará el mapa.
//         Luego, crea un nuevo <iframe> con la URL del mapa y lo inserta en el contenedor.
//     El iframe se ajusta a las dimensiones del contenedor, ocupando todo el espacio disponible.
