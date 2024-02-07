import React from "react";
import "./Benefitss.css";
import Icon from "../../Assets/building.png";
import BuildingImg from "../../Assets/BuildingImg.jpg";
import { LuFileBadge } from "react-icons/lu";
import { FaPersonCircleCheck } from "react-icons/fa6";
import { RiScales2Line } from "react-icons/ri";
const Benefits = () => {
  return (
    <div className="benefits">
      <div className="benefits-wrapper">
        <div className="benefits-leftside">
          <img src={BuildingImg} alt="Building" />
        </div>
        <div className="benefits-right-side">
          <h3>BENEFITS</h3>
          <h1>Why You Choose Us</h1>
          <hr />
          <p>
            As per Digitara Estimates, an accurate estimation serves as a
            pivotal foundation for budget establishment and effective cost
            management throughout the project duration. Our estimation approach
            commences with a meticulous scrutiny of design documents, followed
            by an assessment of construction processes, materials, site
            considerations, permissions, logistics, and additional variables.
            This comprehensive evaluation uncovers any concealed expenses that
            could impact the project cost estimate. Subsequently, the chief
            estimator ensures the accuracy and alignment of the estimate with
            project goals, once our team of trade-specific estimators completes
            the quantity takeoff and material assessment, delivering top-tier
            construction takeoff services.
          </p>

          <div className="box-2-wrapper">
            <div className="boxes">
              <span>
                <LuFileBadge />
              </span>
              <div className="box-content">
                <h4>Years of Experience</h4>
                <p>
                  Drawing upon years of industry expertise, Digital Estimator
                  has cultivated an extensive comprehension of both cost
                  estimating and construction procedures.
                </p>
              </div>
            </div>
            <div className="boxes">
              <span>
                <FaPersonCircleCheck />
              </span>
              <div className="box-content">
                <h4>Attention to Detail</h4>
                <p>
                  When it concerns cost evaluation, Digital Estimator
                  meticulously examines all facets of your project, leaving no
                  detail unexplored in our estimation process.
                </p>
              </div>
            </div>
            <div className="boxes">
              <span>
                <RiScales2Line />
              </span>
              <div className="box-content">
                <h4>Commitment to Accuracy</h4>
                <p>
                  At Digital Estimator, our foremost focus is on achieving
                  accuracy in our estimations. We leverage state-of-the-art
                  tools and methodologies to provide dependable and exact cost
                  projections.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
