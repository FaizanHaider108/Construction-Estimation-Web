import React from "react";
import "./footer.css";
import { MdLocationOn } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import Logo from "../../Assets/Logo.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-wrapper">
        <div className="left-content">
          <img src={Logo} alt="" />
          <h1>Digital Estimator</h1>
          <span>
            Get precise construction estimates that empower you to plan and
            execute your projects flawlessly. With Digital Estimator, you can
            rely on data-driven insights to keep your construction endeavors on
            track and within budget.
          </span>
        </div>

        <div className="center-content">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>

        <div className="right-content">
          <div className="location">
            <span>
              <MdEmail />
            </span>
            <p>info@digitalestimator.co</p>
          </div>
          <div className="location">
            <span>
              <FaPhone />
            </span>
            <p>+281 886 8663</p>
          </div>
          <div className="location">
            <span>
              <MdLocationOn />
            </span>
            <p>
              Williams Tower, Office #404 Floor 2,
              <br /> Houston, TX 77056, USA
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
