import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Css/passion.css";

export default function Passion() {
  const passion = useSelector((state) => state.passion.passion);
  return (
    <div id="passion" className="passion">
      <div className="features">
        <h5>FEATURES</h5>
        <h2>Food with a New Passion</h2>
      </div>

      <div className="passion-child">
        {passion.map((item, index) => {
          return (
            <div key={index}>
              <div
                className="passion-img"
                style={{
                  backgroundColor: item.backgroundColor,
                }}
              >
                <img src={item.img} />
              </div>
              <div>
                <h2>{item.name}</h2>
                <p>{item.content}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
