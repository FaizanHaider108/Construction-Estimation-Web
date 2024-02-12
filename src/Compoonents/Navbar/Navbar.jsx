import React, { useState } from "react";
import "./Navbar.css";
import Logo from "../../Assets/Logo.png";
import MenuBtn from "../../Assets/menu-burger.png";
const Navbar = () => {
  const [menu, setMenu] = useState(false);
  return (
    <div className="navbar">
      <div className="navbar-wrapper">
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        <div className="nav-items">
          <ul>
            <li>
              <a className="hover-underline" href="#home">
                Home
              </a>
            </li>
            <li>
              <a className="hover-underline" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="hover-underline" href="#services">
                Services
              </a>
            </li>
            <li>
              <a className="hover-underline" href="#contact">
                Contact
              </a>
            </li>
          </ul>

          <div className="getQoutebtn">
            <a href="#contact">Get a Qoute</a>
          </div>
          <div className="Menu-btn">
            <img
              onClick={() => setMenu((prev) => !prev)}
              src={MenuBtn}
              alt=""
            />
          </div>
          {menu ? (
            <div className="mobile-nav">
              <li>
                <a className="hover-underline" href="#home">
                  Home
                </a>
              </li>
              <li>
                <a className="hover-underline" href="#about">
                  About
                </a>
              </li>
              <li>
                <a className="hover-underline" href="#services">
                  Services
                </a>
              </li>
              <li>
                <a className="hover-underline" href="#contact">
                  Contact
                </a>
              </li>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
