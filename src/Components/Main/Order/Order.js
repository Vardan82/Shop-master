import React from "react";
import "./Css/Order.css";
import { useSelector, useDispatch } from "react-redux";
import { deleteOrder } from "../../../Features/orderSlice";
export default function Order() {
  const order = useSelector((state) => state.order);
  const dispatch = useDispatch();
  return (
    <div className="list">
      {order.order.map((orderValues, index) => {
        return (
          <div className="border" key={index}>
            <img src={orderValues.img} />
            <div>
              <div className="nameOfFood">
                <h2>{orderValues.name}</h2>
                <h2>{orderValues.price}</h2>
              </div>
              <p>{orderValues.text}</p>
            </div>
            <div className="btn">
              <button onClick={() => dispatch(deleteOrder(index))}>-</button>
            </div>
            <span>{orderValues.count}</span>
          </div>
        );
      })}
    </div>
  );
}
