import React from 'react';
import { Container } from 'react-bootstrap';

const ItemListContainer = ({ greeting }) => {
  return (
    <Container className="item-list-container text-center mt-4">
      <h2>{greeting}</h2>
    </Container>
  );
}

export default ItemListContainer;