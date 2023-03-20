import { useState } from "react";

const OrderList = () => {
  const [ orderlist, setorderlist ] = useState ([
    {
      id: 1211,
      product: "iphone 14 pro",
      Name: "Amit Gupta",
      deliver_Adress: "Purani Bazar Bahoriband",
      date_of_delivery: "23 March 2023",
    },
    {
      id: 1211,
      product: "Google pixel",
      Name: "Ankit Gupta",
      deliver_Adress: "Jabalpur  ",
      date_of_delivery: "25 March 2023",
    },
  ]);
  return (
    <>
      <p>My order list</p>
      <ul>
        {orderlist.map((item) => {
          return(
          <li>
            {item.Name} | {item.product} | {item.date_of_delivery} |{" "}
            {item.deliver_Adress}
          </li>
          );
        })}
      </ul>
    </>
  );
};
export default OrderList;
