import { useState, useEffect, useMemo } from "react";

function Appjs() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => product.rating.rate > 3.2);
  }, [products]);

  return (
    <div>
      <h1>Products which is rating greater than 3.2</h1>
      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id}>
            {product.title} - {product.rating.rate}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Appjs;