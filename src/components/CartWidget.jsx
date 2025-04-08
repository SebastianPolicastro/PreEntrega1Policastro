import React from 'react';
import { Badge } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';

const CartWidget = () => {
  return (
    <div className="cart-widget">
      <FaShoppingCart size={30} />
      <Badge pill variant="light">0</Badge>
    </div>
  );
}

export default CartWidget;