// src/pages/RutaDetailPage.js
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useParams, Link } from 'react-router-dom';

const RutaDetailPage = () => {
  // Obtener el ID de la ruta desde los parámetros de la URL
  const { id } = useParams();

  // Aquí podrías obtener los detalles de la ruta desde una API
  const [ruta, setRuta] = useState(null);

  useEffect(() => {
    // Este es un ejemplo de cómo podrías buscar los datos de la ruta por ID
    const rutas = [
      { id: 1, nombre: 'Ruta A', descripcion: 'Desde el centro hasta el norte.', horarios: ['08:00 AM', '12:00 PM', '04:00 PM'], destino: 'Norte', mapa: 'url_a_mapa_1' },
      { id: 2, nombre: 'Ruta B', descripcion: 'Desde el sur hasta el este.', horarios: ['09:00 AM', '01:00 PM', '05:00 PM'], destino: 'Este', mapa: 'url_a_mapa_2' },
      { id: 3, nombre: 'Ruta C', descripcion: 'Ruta circular.', horarios: ['07:00 AM', '11:00 AM', '03:00 PM'], destino: 'Variados', mapa: 'url_a_mapa_3' }
    ];

    const rutaEncontrada = rutas.find((ruta) => ruta.id === parseInt(id));
    setRuta(rutaEncontrada);
  }, [id]);

  if (!ruta) {
    return <p>Cargando...</p>;
  }

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col xs={12} md={8}>
          <h2>{ruta.nombre}</h2>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Descripción</Card.Title>
              <Card.Text>{ruta.descripcion}</Card.Text>

              <Card.Title>Horarios</Card.Title>
              <ul>
                {ruta.horarios.map((hora, index) => (
                  <li key={index}>{hora}</li>
                ))}
              </ul>

              <Card.Title>Destino</Card.Title>
              <Card.Text>{ruta.destino}</Card.Text>

              {/* Aquí puedes agregar un mapa o más detalles */}
              <Card.Title>Mapa</Card.Title>
              <Card.Text>
                <a href={ruta.mapa} target="_blank" rel="noopener noreferrer">
                  Ver mapa de la ruta
                </a>
              </Card.Text>

              <Link to="/rutas">
                <Button variant="secondary" className='btn-danger'>Volver a las rutas</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default RutaDetailPage;
