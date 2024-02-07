import React from "react";

import "./Hero.css";
const Hero = () => {
  return (
    <div id="home">
      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item carouasal-1 active">
            <div class="carousel-caption d-none d-md-block">
              <h5>Welcome to Digital Estimator</h5>
            </div>
          </div>
          <div class="carousel-item carouasal-2 ">
            <div class="carousel-caption d-none d-md-block">
              <h5>Building trust through Transparency</h5>
            </div>
          </div>
          <div class="carousel-item carouasal-3 ">
            <div class="carousel-caption d-none d-md-block">
              <h5>Seamless Estimation, Seamless Execution</h5>
            </div>
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
};

export default Hero;
