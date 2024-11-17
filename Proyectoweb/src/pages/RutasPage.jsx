// src/pages/RutasPage.js
import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const RutasPage = () => {
  // Lista de rutas de ejemplo (podrías obtener esto desde una API o base de datos)
  const [rutas] = useState([
    {
      id: 1,
      nombre: 'Ruta A',
      descripcion: 'Desde el centro hasta el norte de la ciudad.',
      horarios: ['08:00 AM', '12:00 PM', '04:00 PM'],
      destino: 'Norte de la ciudad',
    },
    {
      id: 2,
      nombre: 'Ruta B',
      descripcion: 'Desde el sur hasta el este de la ciudad.',
      horarios: ['09:00 AM', '01:00 PM', '05:00 PM'],
      destino: 'Este de la ciudad',
    },
    {
      id: 3,
      nombre: 'Ruta C',
      descripcion: 'Ruta circular que conecta varias zonas.',
      horarios: ['07:00 AM', '11:00 AM', '03:00 PM'],
      destino: 'Variados',
    },
  ]);

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col xs={12} md={10}>
          <h2 className="text-center mb-4">Rutas Disponibles</h2>
          
          {/* Muestra cada ruta en una tarjeta */}
          {rutas.map((ruta) => (
            <Card key={ruta.id} className="mb-4">
              <Card.Body>
                <Card.Title>{ruta.nombre}</Card.Title>
                <Card.Text>{ruta.descripcion}</Card.Text>
                <h5>Horarios:</h5>
                <ListGroup variant="flush">
                  {ruta.horarios.map((hora, index) => (
                    <ListGroup.Item key={index}>{hora}</ListGroup.Item>
                  ))}
                </ListGroup>
                <Card.Text>
                  <strong>Destino:</strong> {ruta.destino}
                </Card.Text>
                <Link to={`/ruta/${ruta.id}`}>
                  <Button variant="primary">Ver más detalles</Button>
                </Link>
              </Card.Body>
            </Card>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default RutasPage;
