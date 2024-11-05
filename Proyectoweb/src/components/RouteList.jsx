import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RouteItem from './RouteItem';

const RouteList = ({ onRouteSelect }) => {
  const [routes, setRoutes] = useState([]);   // Lista completa de rutas
  const [searchText, setSearchText] = useState('');  // Texto de búsqueda
  const [filteredRoutes, setFilteredRoutes] = useState([]);  // Rutas filtradas

  // Cuando se carga el componente, obtenemos las rutas de la API
  useEffect(() => {
    axios.get('http://localhost:3000/api/routes')
      .then(response => {
        console.log("Datos de la API:", response.data); // Asegúrate de que los datos son correctos
        if (Array.isArray(response.data)) {
          setRoutes(response.data);  // Guarda las rutas completas
          setFilteredRoutes(response.data);  // Inicializa las rutas filtradas
        } else {
          console.error("Los datos recibidos no son un arreglo.");
        }
      })
      .catch(error => {
        console.error("Error al obtener las rutas:", error);
      });
  }, []);

  // Maneja el cambio en el campo de búsqueda
  const handleSearchChange = (event) => {
    const text = event.target.value;
    setSearchText(text);
    console.log("Texto de búsqueda:", text);
  
    // Verifica si 'routes' está en el estado y tiene los datos correctos
    console.log("Rutas en el estado:", routes);
  
    // Filtra las rutas
    const filtered = routes.filter(route =>
      route.route.toLowerCase().includes(text.toLowerCase()) ||
      route.path.toLowerCase().includes(text.toLowerCase())
    );
  
    setFilteredRoutes(filtered);  // Actualiza las rutas filtradas
    console.log("Rutas filtradas:", filtered); // Muestra las rutas filtradas en la consola
  };
  

  return (
    <div className="route-list p-3" style={{ maxHeight: '300px', overflowY: 'scroll', border: '1px solid #ddd', borderRadius: '5px' }}>
      <input
        type="text"
        className="form-control mb-3"
        placeholder="Buscar ruta..."
        value={searchText}
        onChange={handleSearchChange}  // Maneja el evento de cambio
      />
      {filteredRoutes.length > 0 ? (
        filteredRoutes.map((route, index) => (
          <RouteItem key={index} route={route} onSelect={onRouteSelect} />
        ))
      ) : (
        <p>No se encontraron rutas.</p>
      )}
    </div>
  );
};

export default RouteList;
