import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="Footer">
      <div className="Footer-wrapper">
        <div className="Footer-content">
          <div className="footer-content-1">
            <h1>DigitalEstimator</h1>
            <p>
              Digitara Estimates: Your go-to cost-estimating experts, delivering
              precise estimates on time.
            </p>
          </div>
          <div className="quick-links">
            <h1>Quick Links</h1>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#service">Services</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="Contact-footer">
            <ul>
              <h1>Contact</h1>
              <li>info@DigitalEstimator.co</li>
              <li>281 886 8663</li>
              <li>
                Williams Tower Office # 404 Floor 2, Housten, TX 77056,USA
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
