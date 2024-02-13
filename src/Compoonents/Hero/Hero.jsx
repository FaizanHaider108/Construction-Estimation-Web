import React from "react";
import HeroImage from "../../Assets/hero-img.png";
import "./Hero.css";
// motion
import { motion } from "framer-motion";
// varient
import { fadeIn } from "../../../Varients.js";
import Arrow from "../../Assets/Arrow.png";
const Hero = () => {
  return (
    <div className="Hero" id="home">
      <div className="hero-wrapper">
        <motion.div
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.7 }}
          className="Hero-left"
        >
          <span>Welcome to</span>
          <h1>Digital Estimator</h1>
          <p>
            Unveil the blueprint to cost-effective construction with Digital
            Estimation. Our user-friendly platform offers comprehensive
            estimates that guide you in making informed decisions.
          </p>
          <a href="#contact">
            Contact Now
            <img src={Arrow} alt="arrow" />
          </a>
        </motion.div>
        <div className="hero-right">
          <img src={HeroImage} alt="hero right image" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
