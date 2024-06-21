import React, { useState } from 'react';

const Cart = () => {
  const [items, setItems] = useState([]);

  const addItemToCart = (item) => {
    setItems([...items, item]);
  };

  return (
    <div>
      <h1>Cart</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} - {item.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
