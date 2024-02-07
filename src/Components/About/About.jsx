import React from "react";
import "./About.css";
import Heroimg from "../../Assets/Construction.jpeg";
const About = () => {
  return (
    <div className="about" id="about">
      <div className="about-wrapper">
        <div className="about-left-side">
          <h4>About us</h4>
          <h1>Who are we</h1>
          <hr />
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
        <div className="about-left-side">
          <img src={Heroimg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
