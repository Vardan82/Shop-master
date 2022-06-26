import React from "react";

import Logo from "../Images/header/615px-Food_Network_New_Logo 2.png";
import "./Css/Footer.css";
import Instagram from "../Images/footer/Group 104.png";
import Facebook from "../Images/footer/Group 116.png";
import Twitter from "../Images/footer/Group.png";
import Youtube from "../Images/footer/Group 117.png";
export default function Footer() {
  return (
    <footer>
      <div>
        <img src={Logo} />
        <p>www.company name.com</p>
        <p>companyname@gmail.com</p>
        <p>Phone: +7 485-118-03-25</p>
      </div>
      <div>
        <h2>Home</h2>
        <p>Landingpage</p>
        <p>Documentation</p>
        <p>Referral Program</p>
        <p>UI & UX Design</p>
        <p>Web Design</p>
      </div>
      <div>
        <h2>Menu</h2>
        <p>Landingpage</p>
        <p>Documentation</p>
        <p>Referral Program</p>
        <p>UI & UX Design</p>
        <p>Web Design</p>
      </div>
      <div>
        <h2>Company</h2>
        <p>Landingpage</p>
        <p>Documentation</p>
        <p>Referral Program</p>
        <div>
          <img src={Instagram} />
          <img src={Facebook} />
          <img src={Twitter} />
          <img src={Youtube} />
        </div>
      </div>
    </footer>
  );
}
