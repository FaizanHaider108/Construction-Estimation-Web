import React from "react";
import "./About.css";
import Construction from "../../Assets/construction.png";
const About = () => {
  return (
    <div className="about" id="about">
      <div className="about-header-content">
        <h1>How it Started</h1>
        <hr />
      </div>
      <div className="about-wrapper">
        <div className="about-content">
          <p>
            Digital Estimator is a standout cost-estimating firm known for its
            unmatched precision in estimates. We guarantee on-time delivery of
            your needs, while following your set schedule. Our firm offers
            specialized cost estimation services that are customized to fit your
            specific requirements and budget limitations. Our commitment extends
            to serving a variety of businesses, regardless of their size.
            Whether handling large projects, simple one-time tasks, or a mix of
            different scales, our skilled team excels in supervising your
            projects with careful attention and outstanding quality. Choosing us
            will undoubtedly be a smart decision.
          </p>
        </div>
        <div className="about-right-content">
          <img src={Construction} alt="" />
          <div className="number-container">
            <div className="container">
              <h3>2,200+</h3>
              <span>Projects Done</span>
            </div>
            <div className="container">
              <h3>350+</h3>
              <span>Satisfied Clients</span>
            </div>
            <div className="container">
              <h3>50+</h3>
              <span>Worker Employed</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
