import React, { useState, useEffect } from 'react';


const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
      .then(products => setProducts(products))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product,index) => (
          <li key={product.id}>
            {product.name} - {product.price}
          </li>
))}
      </ul>
    </div>
  );
};

export default ProductList;
