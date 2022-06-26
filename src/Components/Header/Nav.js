import React from "react";
import "./Css/Nav.css";
import Logo from "../Images/header/615px-Food_Network_New_Logo 2.png";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-scroll";
import { addOrder } from "../../Features/orderSlice";
import { NavLink } from "react-router-dom";

export default function Nav() {
  const orderCount = useSelector((state) => state.order.count);
  return (
    <header>
      <nav>
        <div className="topNav">
          <Link
            href=""
            spy={true}
            smooth={true}
            offset={-70}
            duration={1000}
            to="header"
          >
            <img src={Logo} />
          </Link>
          <div>
            <Link
              href=""
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
              activeClass="active"
              to="header"
            >
              Home
            </Link>
            <Link
              href=""
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
              activeClass="active"
              to="about"
            >
              About us
            </Link>
            <Link
              href=""
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
              activeClass="active"
              to="menu"
            >
              Menu
            </Link>
            <Link
              href=""
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
              activeClass="active"
              to="passion"
            >
              Features
            </Link>
          </div>
        </div>
        <NavLink to="/Orders" className="order">
          My orders {orderCount}
        </NavLink>
      </nav>
    </header>
  );
}
