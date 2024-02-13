import React from "react";
import "./About.css";
import CountUp from "react-countup";

import Construction from "../../Assets/construction.png";
// motion
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// varient
import { fadeIn } from "../../../Varients.js";
const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <div className="about" id="about">
      <div className="about-header-content">
        <h1>How it Started</h1>
        <hr />
      </div>
      <div className="about-wrapper">
        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.7 }}
          className="about-content"
        >
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
        </motion.div>
        <div className="about-right-content">
          <img src={Construction} alt="" />
          <div className="number-container">
            <div className="container">
              <h3 ref={ref}>
                {inView ? (
                  <CountUp
                    style={{ color: "#FFB846", fontSize: "34px" }}
                    start={0}
                    end={50}
                    duration={3}
                  />
                ) : null}
                +{" "}
              </h3>
              <span>Projects Done</span>
            </div>
            <div className="container">
              <h3 ref={ref}>
                {inView ? (
                  <CountUp
                    style={{ color: "#FFB846", fontSize: "34px" }}
                    start={0}
                    end={350}
                    duration={3}
                  />
                ) : null}
                +{" "}
              </h3>
              <span>Satisfied Clients</span>
            </div>
            <div className="container">
              <h3 ref={ref}>
                {inView ? (
                  <CountUp
                    style={{ color: "#FFB846", fontSize: "34px" }}
                    start={0}
                    end={50}
                    duration={3}
                  />
                ) : null}
                +{" "}
              </h3>
              <span>Worker Employed</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
