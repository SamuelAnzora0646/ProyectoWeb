import React, { useState } from "react";

const RouteItem = ({ route, onSelect, isSelected }) => {
  const [showStops, setShowStops] = useState(false);
  const [isOutbound, setIsOutbound] = useState(true); // Renombrado a `isOutbound`

  const handleSelectRoute = () => {
    onSelect(route);
  };

  const toggleStops = () => {
    setShowStops((prev) => !prev);
  };

  const toggleDirection = () => {
    setIsOutbound((prev) => !prev);
  };

  return (
    <div className="route-item border rounded p-3 mb-3">
      <div className="d-flex align-items-start">
        {/* Checkbox */}
        <input
          type="checkbox"
          className="form-check-input me-3"
          checked={isSelected}
          onChange={handleSelectRoute}
        />

        {/* Información de la ruta */}
        <div className="flex-grow-1">
          <div className="mb-1">
            <small>
              <strong>Ruta:</strong> {route.routeNumber}
            </small>
          </div>

          <div className="mb-2">
            <strong className="text-primary">{route.routeName}</strong>
          </div>

          <div className="mb-1">
            <small>
              <strong>Horario:</strong> {route.startTime} - {route.endTime}
            </small>
          </div>

          <div>
            <small>
              <strong>Departamento:</strong> {route.department}
            </small>
          </div>
        </div>
      </div>

      {/* Botón para ver paradas */}
      <div className="d-flex justify-content-center mt-3">
        <button className="btn btn-info btn-sm" onClick={toggleStops}>
          {showStops ? "Ocultar paradas" : "Ver paradas"}
        </button>
      </div>

      {/* Mostrar paradas si showStops es true */}
      {showStops && (
        <div className="mt-3">
          <h6>Paradas:</h6>

          {/* Botón para alternar entre paradas */}
          <div className="d-flex justify-content-center mb-2">
            <button
              className="btn btn-secondary btn-sm"
              onClick={toggleDirection}
            >
              {isOutbound ? "Ver paradas de vuelta" : "Ver paradas de ida"}
            </button>
          </div>

          {/* Lista de paradas */}
          <ul className="list-group">
            {/* Mostrar las paradas según la dirección */}
            {(isOutbound ? route.outbound : route.return)?.map(
              (stop, index) => (
                <li key={index} className="list-group-item p-2">
                  {stop}
                </li>
              )
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default RouteItem;

// Explicación del Código:

//     Importaciones:
//         React, { useState }: Importas React y el hook useState, que se utiliza para manejar el estado del componente, como la visibilidad de las paradas y la dirección de la ruta.

//     Componente RouteItem: Este componente recibe tres propiedades:
//         route: Un objeto que contiene información sobre la ruta, como el número de ruta, el nombre de la ruta, los horarios, el departamento, y las paradas de ida y vuelta.
//         onSelect: Una función que se llama cuando se selecciona la ruta (por ejemplo, al marcar el checkbox).
//         isSelected: Un valor booleano que indica si esta ruta está seleccionada o no.

//     Estados:
//         showStops: Un estado booleano que controla si las paradas de la ruta deben ser visibles. Inicialmente está en false, lo que significa que las paradas están ocultas.
//         isOutbound: Un estado booleano que controla si se están mostrando las paradas de ida (true) o las paradas de vuelta (false). Inicialmente está en true, lo que significa que se mostrarán las paradas de ida.

//     Funciones:
//         handleSelectRoute: Esta función se llama cuando se cambia el estado del checkbox (cuando el usuario selecciona o deselecciona la ruta). Llama a la función onSelect pasada como propiedad, pasando la ruta seleccionada.
//         toggleStops: Esta función invierte el valor de showStops, lo que cambia si las paradas se deben mostrar u ocultar. Se activa al hacer clic en el botón "Ver paradas" o "Ocultar paradas".
//         toggleDirection: Esta función invierte el valor de isOutbound, alternando entre las paradas de ida y vuelta. Se activa al hacer clic en el botón que permite ver las paradas de ida o vuelta.

//     Renderizado del Componente:
//         Información de la ruta:
//             Se muestra el número de ruta (route.routeNumber), el nombre de la ruta (route.routeName), el horario de la ruta (route.startTime y route.endTime), y el departamento al que pertenece la ruta (route.department).
//         Checkbox para selección:
//             Se utiliza un checkbox para permitir al usuario seleccionar o deseleccionar la ruta. El estado del checkbox se controla con isSelected y se maneja con la función handleSelectRoute.
//         Botón para mostrar/ocultar paradas:
//             Un botón permite al usuario alternar entre ver u ocultar las paradas. Si showStops es true, el botón dice "Ocultar paradas", y si es false, el botón dice "Ver paradas".
//         Mostrar paradas:
//             Si showStops es true, se muestra una lista de paradas. Primero, un botón permite alternar entre las paradas de ida o vuelta. Luego, se renderiza la lista de paradas utilizando el array route.outbound (para las paradas de ida) o route.return (para las paradas de vuelta), según el valor de isOutbound.

//     Lista de Paradas:
//         La lista de paradas se renderiza utilizando un <ul> y un <li> para cada parada. El contenido de las paradas se obtiene de las propiedades outbound o return de la ruta, que son arrays de nombres de paradas.

// Flujo del Componente:

//     El componente recibe la información de la ruta como propiedad (route), que incluye datos como el número de ruta, nombre, horarios, departamento y listas de paradas de ida y vuelta.
//     Los estados showStops y isOutbound determinan si se deben mostrar las paradas y qué dirección mostrar (ida o vuelta).
//     El usuario puede:
//         Seleccionar o deseleccionar la ruta mediante el checkbox.
//         Mostrar u ocultar las paradas de la ruta al hacer clic en el botón "Ver paradas" o "Ocultar paradas".
//         Alternar entre paradas de ida y vuelta al hacer clic en el botón "Ver paradas de ida" o "Ver paradas de vuelta".
//     Las paradas se muestran en una lista, dependiendo de la dirección seleccionada (ida o vuelta).
