import { useState } from "react";

const ListRender = () => {
  const [products, setProducts] = useState([
    {
      "value": 40832,
      "total": 53141,
      "day_number": 0,
      "date": "2014-01-30"
    },
    {
      "value": 27296,
      "total": 53141,
      "day_number": 1,
      "date": "2014-01-30"
    },
    {
      "value": 22982,
      "total": 53141,
      "day_number": 2,
      "date": "2014-01-30"
    },
  ]);

  return (
    <>
      <p>My Products</p>
      <ul>
        {products.map((item) => {
          return (
            <li>
              {item.value} | {item.total} | {item.day_number} | {item.date}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ListRender;
