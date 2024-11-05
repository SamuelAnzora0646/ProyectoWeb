const RouteItem = ({ route, onSelect }) => {
  return (
    <div className="route-item" onClick={() => onSelect(route)}>
      <h5>{route.route}</h5>  {/* Nombre de la ruta */}
      <p>{route.path}</p>  {/* Descripción de la ruta */}
    </div>
  );
};

export default RouteItem;
