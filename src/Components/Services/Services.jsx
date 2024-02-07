import React from "react";
import "./Services.css";
import Icon from "../../Assets/building.png";
import { FaRoad } from "react-icons/fa";
import { FaListAlt } from "react-icons/fa";
import { AiTwotoneHome } from "react-icons/ai";
import { FaPencilAlt } from "react-icons/fa";
import { FaBuilding } from "react-icons/fa";
import { FaFileExcel } from "react-icons/fa6";
const Services = () => {
  return (
    <div className="services">
      <div className="services-wrapper">
        <div className="services-content">
          <h5>Services</h5>
          <h1>We Estimate All CSI Traders</h1>
          <p>
            At Digital Estimator, our expertise lies in delivering thorough cost
            estimating solutions encompassing a diverse array of CSI trades,
            such as Commercial Building, Residential Building, Industrial work,
            as well as Public or Private and Civil Work.
          </p>
        </div>
        <div className="services-wrapper-2">
          <div className="box">
            <span>
              <FaBuilding />
            </span>
            <h3>Commercial Building</h3>
            <p>
              At Digital Estimator, we offer all-encompassing cost estimating
              solutions tailored to commercial construction endeavors. Our
              proficiency involves precise evaluation of materials, labor, and
              other expenditures unique to commercial structures. We excel in
              accurately estimating costs for diverse settings including
              offices, retail spaces, restaurants, hotels, and beyond
            </p>
          </div>
          <div className="box">
            <span>
              <FaRoad />
            </span>
            <h3>Civil Work</h3>
            <p>
              Digital Estimator specializes in providing estimation services for
              civil engineering undertakings, encompassing projects like roads,
              bridges, and infrastructure development. Our approach involves a
              meticulous breakdown of material quantities, labor needs, and
              specialized equipment considerations. With a track record of
              collaborating with government agencies, contractors, and
              engineers, we bring valuable experience to civil projects.
            </p>
          </div>
          <div className="box">
            <span>
              <FaListAlt />
            </span>
            <h3>Quantity Takeoffs</h3>
            <p>
              Digital Estimator excels in precise measurement and quantification
              of materials necessary for construction endeavors. We provide a
              comprehensive breakdown of quantities for various materials
              including concrete, steel, wood, and other essentials. This
              meticulous approach proves indispensable for crucial aspects like
              budgeting, procurement, and the strategic planning of projects.
            </p>
          </div>
          <div className="box">
            <span>
              <AiTwotoneHome />
            </span>
            <h3>Residential Buildings</h3>
            <p>
              Digital Estimator offers customized cost estimating solutions
              designed for residential construction ventures. Our services
              encompass accurate assessment of expenditures related to
              single-family homes, multi-unit buildings, and renovation
              projects. With a deep understanding of residential building codes,
              regulations, and industry-leading practices, we provide invaluable
              expertise to ensure project success.
            </p>
          </div>
          <div className="box">
            <span>
              <FaPencilAlt />
            </span>
            <h3>Colored Mark-Ups</h3>
            <p>
              Digital Estimator enhances blueprints and plans by incorporating
              intricate cost-related annotations. This visual integration of
              cost estimates facilitates comprehension and communication. This
              valuable tool assists clients, contractors, and stakeholders in
              recognizing the financial implications within the project's
              design.
            </p>
          </div>
          <div className="box">
            <span>
              <FaFileExcel />
            </span>
            <h3>Editable Excel Sheets</h3>
            <p>
              Digital Estimator delivers cost estimating data in a modifiable
              Excel format, enabling effortless customization. This feature
              empowers clients to adjust and revise estimates according to
              project-specific needs. It fosters seamless collaboration and
              offers flexibility in the realms of budgeting and cost management
              procedures
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
