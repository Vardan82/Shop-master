import React, { useState } from "react";
import "./Css/Menu.css";
import { useDispatch, useSelector } from "react-redux";
import { more, deleteStateValue } from "../../../Features/menuSlice";
import { addOrder } from "../../../Features/orderSlice";
export default function Menu() {
  const menu = useSelector((state) => state.menu.menu);
  const [isActive, setActive] = useState(true);

  const handleToggle = () => {
    setActive(!isActive);
  };
  const dispatch = useDispatch();
  console.log(menu);
  return (
    <div className="fullMenu" id="menu">
      <div className="list">
        {menu.map((Foods, index) => {
          const Food = {
            id: Foods.id,
            name: Foods.name,
            price: Foods.price,
            text: Foods.text,
            img: Foods.img,
          };
          return (
            <div className="border" key={index}>
              <img src={Foods.img} />
              <div>
                <div className="nameOfFood">
                  <h2>{Foods.name}</h2>
                  <h2>{Foods.price}</h2>
                </div>
                <p>{Foods.text}</p>
                <div className="btn">
                  <button onClick={() => dispatch(addOrder(Food))}>+</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className={isActive ? "show-less show" : "show-less less"}>
        <button
          className="btnMore showBtn "
          onClick={() => {
            handleToggle();
            dispatch(more());
          }}
        >
          Show More
        </button>
        <button
          className="btnMore lessBtn"
          onClick={() => {
            handleToggle();
            dispatch(deleteStateValue());
          }}
        >
          Show Less
        </button>
      </div>
    </div>
  );
}
