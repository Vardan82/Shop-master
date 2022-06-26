import React from "react";
import Cook from "../Images/header/CSmJnTefxM 1.png";
import "./Css/Nav.css";
export default function Header() {
  return (
    <div id="header" className="making-food">
      <div className="fast-food">
        <h1>Making time a good time by making food the good food.</h1>
        <p>
          There are many things are needed to start the Fast Food Business. You
          need not only Just Food Stalls with Persons but also specialized
          equipment,
        </p>
        <div>
          <button>Order Now</button>
          <button>Food Details</button>
        </div>
      </div>
      <div className="image-class">
        <img src={Cook} />
      </div>
    </div>
  );
}
