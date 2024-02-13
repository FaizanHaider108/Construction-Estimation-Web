import React from "react";
import "./WhyChooseus.css";
import { HiBadgeCheck } from "react-icons/hi";
import { IoPersonSharp } from "react-icons/io5";
import { FaPencilRuler } from "react-icons/fa";
import { motion } from "framer-motion";

import { fadeIn } from "../../../Varients.js";
const WhychooseSection = () => {
  return (
    <div className="WhychooseSection">
      <div className="whychoose">
        <div className="service-content">
          <h1>Why Choose us</h1>
          <hr />
        </div>

        <div className="whyChoose-grid">
          <div className="choose-grid-1">
            <span className="icons">
              <HiBadgeCheck />
            </span>
            <h3>Years of Experience</h3>
            <p>
              Drawing upon years of industry expertise, Digital Estimator has
              cultivated an extensive comprehension of both cost estimating and
              construction procedures.
            </p>
          </div>
          <motion.div
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="choose-grid-1"
          >
            <span className="icons">
              <IoPersonSharp />
            </span>
            <h3>Attention to Detail</h3>
            <p>
              When it concerns cost evaluation, Digital Estimator meticulously
              examines all facets of your project, leaving no detail unexplored
              in our estimation process.
            </p>
          </motion.div>
          <div className="choose-grid-1">
            <span className="icons">
              <FaPencilRuler />
            </span>
            <h3>Commitment to Accuracy</h3>
            <p>
              At Digital Estimator, our foremost focus is on achieving accuracy
              in our estimations. We leverage state-of-the-art tools and
              methodologies to provide dependable and exact cost projections.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhychooseSection;
