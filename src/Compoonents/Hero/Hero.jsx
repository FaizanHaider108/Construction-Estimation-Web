import React from "react";
import HeroImage from "../../Assets/hero-img.png";
import "./Hero.css";
import Arrow from "../../Assets/Arrow.png";
const Hero = () => {
  return (
    <div className="Hero" id="home">
      <div className="hero-wrapper">
        <div className="Hero-left">
          <span>Welcome to</span>
          <h1>Digital Estimator</h1>
          <p>
            Unveil the blueprint to cost-effective construction with
            DigitaraEstimates. Our user-friendly platform offers comprehensive
            estimates that guide you in making informed decisions.
          </p>
          <a href="">
            Contact Now
            <img src={Arrow} alt="arrow" />
          </a>
        </div>
        <div className="hero-right">
          <img src={HeroImage} alt="hero right image" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
