import React from "react";
import "./Navbar.css";
import Logo from "../Assets/logo.png";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="menu-bar">
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#service">Services</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
      <div className="cta">
        <a href="">
          <button>Get a Free Qoute</button>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
