import React, { useState } from "react";
import RouteList from "../components/RouteList";
import MapView from "../components/MapView";

const RutasPage = () => {
  const [selectedRoute, setSelectedRoute] = useState(null);
  const [selectedMapUrl, setSelectedMapUrl] = useState("");

  const handleRouteSelect = (route) => {
    if (selectedRoute?.routeNumber === route.routeNumber) {
      setSelectedRoute(null);
      setSelectedMapUrl("");
    } else {
      setSelectedRoute(route);
      const mapUrl = route.map.match(/src='([^']+)'/)?.[1] || "";
      setSelectedMapUrl(mapUrl);
    }
  };

  return (
    <div className="container-fluid px-3 my-4 ">
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
          <div className="border flex-grow-1" style={{ minHeight: "400px" }}>
            <MapView mapUrl={selectedMapUrl} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RutasPage;

// Desglose del Código
// 1. Importaciones:

//     React, { useState }: Importa React y el hook useState para manejar el estado en el componente.
//     RouteList: Componente que probablemente muestra una lista de rutas disponibles.
//     MapView: Componente que muestra el mapa de una ruta seleccionada.

// 2. Estados:

//     selectedRoute: Almacena la ruta actualmente seleccionada. Si no hay ruta seleccionada, será null.
//     selectedMapUrl: Almacena la URL del mapa asociado con la ruta seleccionada.

// 3. Funciones:

//     handleRouteSelect: Esta función se llama cuando se selecciona una ruta en el componente RouteList. Si la ruta seleccionada ya está activa, la deselecciona. Si es una nueva ruta, establece la ruta seleccionada y extrae la URL del mapa desde el HTML del objeto route.map.

// 4. Estructura del Componente:

// El componente está dividido en dos secciones principales:

//     Lista de Rutas:
//         Se muestra una lista de rutas en un div con desplazamiento habilitado (overflow-auto).
//         Se pasa la función handleRouteSelect como prop a RouteList, lo que permite seleccionar rutas de la lista.

//     Mapa de Rutas:
//         Muestra el mapa correspondiente a la ruta seleccionada utilizando el componente MapView.
//         La URL del mapa se pasa a MapView a través de la prop mapUrl.

// 5. Estilos:

// El diseño utiliza clases de Bootstrap como container-fluid, row, col-12, y d-flex para hacer la interfaz adaptable y fluida, con columnas que se ajustan según el tamaño de la pantalla (en dispositivos móviles y más grandes).
// 6. Explicación de handleRouteSelect:

// Esta función maneja la selección de una ruta:

//     Si la ruta seleccionada ya está activa (es la misma que la previamente seleccionada), se deselecciona, limpiando tanto selectedRoute como selectedMapUrl.
//     Si es una nueva ruta, se establece como la ruta seleccionada y se extrae la URL del mapa desde el contenido de route.map, que se espera que tenga una estructura HTML (probablemente como un <img> o similar).

// 7. Componente de MapView:

//     El componente MapView recibe la URL del mapa a través de la prop mapUrl y muestra el mapa correspondiente.
