import React, { useState, useEffect } from "react";
import axios from "axios";
import RouteItem from "./RouteItem"; // Importa el componente RouteItem

const RouteList = ({ onRouteSelect, selectedRoute }) => {
  const [routes, setRoutes] = useState([]);
  const [filteredRoutes, setFilteredRoutes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [loading, setLoading] = useState(true); // Estado de carga
  const [error, setError] = useState(null); // Para manejar errores

  useEffect(() => {
    // Cargar las rutas desde la API
    axios
      .get("https://login-565c8-default-rtdb.firebaseio.com/.json")
      .then((response) => {
        if (response.data && typeof response.data === "object") {
          const fetchedRoutes = Object.values(response.data).filter(
            (route) => route && route.department
          );
          setRoutes(fetchedRoutes);
          setFilteredRoutes(fetchedRoutes); // Inicializamos el listado filtrado
          setLoading(false);

          if (fetchedRoutes.length > 0) {
            onRouteSelect(fetchedRoutes[0]); // Selecciona la primera ruta
          }
        } else {
          setError("La respuesta de la API no es válida.");
          setLoading(false);
        }
      })
      .catch((error) => {
        setError("Error al obtener las rutas: " + error.message);
        setLoading(false);
      });
  }, []); // Solo se ejecuta una vez al cargar la página

  // Función que indica si la ruta está seleccionada
  const isRouteSelected = (route) => {
    return selectedRoute?.routeNumber === route.routeNumber;
  };

  // Centralizar la lógica de filtrado de rutas
  const filterRoutes = () => {
    let filtered = routes;

    // Filtrar por término de búsqueda, permitiendo los espacios
    if (searchTerm.trim()) {
      // Solo filtrar si hay texto no vacío
      const searchTermLower = searchTerm.toLowerCase().trim(); // Recortamos el término de búsqueda
      filtered = filtered.filter(
        (route) =>
          route.routeNumber?.toLowerCase().includes(searchTermLower) ||
          route.routeName?.toLowerCase().includes(searchTermLower)
      );
    }

    // Filtrar por departamento
    if (selectedDepartment) {
      filtered = filtered.filter(
        (route) =>
          route.department?.toLowerCase() === selectedDepartment.toLowerCase()
      );
    }

    setFilteredRoutes(filtered);
  };

  // Llamar a la función de filtro cada vez que el término de búsqueda o el departamento cambian
  useEffect(() => {
    if (routes.length > 0) {
      filterRoutes();
    }
  }, [searchTerm, selectedDepartment, routes]); // Dependencias: se ejecuta cada vez que cambian estos valores

  // Función para manejar el cambio de búsqueda
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value); // Actualiza el término de búsqueda
  };

  // Función para manejar el cambio de departamento
  const handleDepartmentChange = (e) => {
    setSelectedDepartment(e.target.value); // Actualiza el departamento seleccionado
  };

  if (loading) {
    return <div>Cargando rutas...</div>; // Estado de carga
  }

  if (error) {
    return <div>Error: {error}</div>; // Mensaje de error
  }

  return (
    <div
      className="route-list p-2 rounded"
      style={{ maxHeight: "500px", overflowY: "auto" }}
    >
      {/* Buscador arriba */}
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Buscar ruta..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <span className="input-group-text">
          <i className="bi bi-search"></i> {/* Icono de búsqueda */}
        </span>
      </div>

      {/* Filtro por Departamento abajo */}
      <div className="d-flex justify-content-between mb-3">
        <select
          className="form-select w-50"
          value={selectedDepartment}
          onChange={handleDepartmentChange}
        >
          <option value="">Todos los departamentos</option>
          {/* Lista de departamentos (puedes obtenerla de la API o usar una lista fija) */}
          {[
            ...new Set(
              routes.map((route) => route.department || "Sin departamento")
            ),
          ].map((department, index) => (
            <option key={index} value={department}>
              {department.charAt(0).toUpperCase() + department.slice(1)}
            </option>
          ))}
        </select>
      </div>
      {/* Renderización de rutas */}
      {filteredRoutes.length > 0 ? (
        filteredRoutes.map((route, index) => (
          <RouteItem
            key={index}
            route={route}
            onSelect={onRouteSelect} // Función que actualiza el estado de la ruta seleccionada
            isSelected={isRouteSelected(route)} // Pasamos si la ruta está seleccionada
          />
        ))
      ) : (
        <p>No se encontraron rutas.</p>
      )}
    </div>
  );
};

export default RouteList;

// Explicación del Código:
// 1. Importaciones:

//     React, { useState, useEffect }: Se importan React y los hooks useState y useEffect para manejar el estado del componente y realizar efectos secundarios como la carga de datos desde una API.
//     axios: Una librería para hacer peticiones HTTP. Se utiliza para obtener las rutas de una base de datos remota.
//     RouteItem: Es el componente que se usará para mostrar cada ruta individualmente.

// 2. Estados del Componente:

//     routes: Un array que almacena todas las rutas obtenidas de la API.
//     filteredRoutes: Un array que almacena las rutas filtradas. Se actualizará según el término de búsqueda o el departamento seleccionado.
//     searchTerm: Un string que almacena el término de búsqueda introducido por el usuario para filtrar las rutas.
//     selectedDepartment: Un string que almacena el departamento seleccionado por el usuario para filtrar las rutas por departamento.
//     loading: Un booleano que indica si los datos aún se están cargando.
//     error: Un string que almacena el mensaje de error en caso de que la carga de rutas falle.

// 3. Efecto para Cargar las Rutas desde la API:

//     En el primer useEffect, se realiza una solicitud GET a la API usando axios para obtener las rutas.
//     Cuando la solicitud es exitosa:
//         Se almacenan las rutas en el estado routes y filteredRoutes.
//         Si la respuesta no es válida o hay un error, se muestra un mensaje de error.
//     Además, si hay rutas, selecciona la primera automáticamente llamando a la función onRouteSelect.

// 4. Filtrado de las Rutas:

//     filterRoutes: Es una función que filtra las rutas de acuerdo con el término de búsqueda (searchTerm) y el departamento seleccionado (selectedDepartment).
//         Filtra las rutas por número de ruta o nombre de la ruta (en caso de que el término de búsqueda esté presente).
//         Filtra las rutas por el departamento seleccionado.
//     useEffect: Este hook se ejecuta cada vez que cambia el searchTerm, selectedDepartment o las rutas (routes). Llama a la función filterRoutes para actualizar filteredRoutes en función de los filtros aplicados.

// 5. Manejo de Eventos:

//     handleSearchChange: Esta función actualiza el estado searchTerm cuando el usuario cambia el término de búsqueda en el campo de texto.
//     handleDepartmentChange: Esta función actualiza el estado selectedDepartment cuando el usuario selecciona un departamento del menú desplegable.

// 6. Renderizado Condicional:

//     Si las rutas están en estado de carga (loading), se muestra un mensaje "Cargando rutas...".
//     Si ocurre un error en la carga de datos, se muestra un mensaje de error con el detalle.
//     Si no hay rutas que coincidan con los filtros, se muestra el mensaje "No se encontraron rutas".
//     Si hay rutas filtradas, se renderiza una lista de RouteItem, pasando la información de cada ruta y el estado de selección.

// 7. Elementos de la Interfaz de Usuario:

//     Campo de búsqueda: Un campo de texto para buscar rutas por número o nombre. El término de búsqueda se usa para filtrar las rutas.
//     Filtro por departamento: Un menú desplegable para seleccionar un departamento. La lista de departamentos se genera a partir de las rutas cargadas, y las rutas se filtran según la selección.
//     Lista de rutas: Se renderiza una lista de RouteItem para cada ruta filtrada. Cada RouteItem tiene la opción de ser seleccionada y muestra detalles de la ruta.

// Flujo del Componente:

//     Carga de rutas: Al montar el componente, se realiza una petición a la API para obtener las rutas.
//     Filtrado de rutas: El usuario puede buscar rutas por término de búsqueda y filtrar por departamento.
//     Selección de rutas: Al hacer clic en una ruta, se marca como seleccionada, y la función onRouteSelect se encarga de actualizar el estado del componente principal con la ruta seleccionada.
//     Mostrar rutas filtradas: Se renderizan las rutas filtradas en la interfaz, mostrando sus detalles y permitiendo la interacción con cada ruta.
