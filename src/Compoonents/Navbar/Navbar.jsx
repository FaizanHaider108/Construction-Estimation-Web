import React, { useState } from "react";
import "./Navbar.css";
import Logo from "../../Assets/Logo.png";
import Menu from "../../Assets/menu-burger.png";

const Navbar = () => {
  const [menu, setMenu] = useState();

  return (
    <div className="Navbar-wrapper">
      <div className="Navbar">
        <div className="logo">
          <img src={Logo} alt="Digital Estimator" />
        </div>
        <div className="Menu-btn">
          {menu && (
            <ul>
              <li>
                <a className="hover-underline" href="#home">
                  Home
                </a>
              </li>

              <li>
                <a className="hover-underline" href="#Services">
                  Services
                </a>
              </li>

              <li>
                <a className="hover-underline" href="#about">
                  About
                </a>
              </li>

              <li>
                <a className="hover-underline" href="#blog">
                  Blog
                </a>
              </li>
              <div className="getQoutebtn">
                <a href="">Get a free Quote</a>
              </div>
            </ul>
          )}
          <div className="menu-btn">
            <img src={Menu} onClick={() => setMenu((prev) => !prev)} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
