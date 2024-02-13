import React from "react";
import "./Service.css";
import Servicebg from "../../Assets/Service-bg.png";
import { FaRoad } from "react-icons/fa";
import { FaBuilding } from "react-icons/fa";
import { FaClipboardList } from "react-icons/fa";
import { FaMarker } from "react-icons/fa6";
import { FaHouseDamage } from "react-icons/fa";
import { FaFile } from "react-icons/fa";
import { motion } from "framer-motion";

import { fadeIn } from "../../../Varients.js";
const Service = () => {
  return (
    <div className="service" id="services">
      <div className="service-wrapper">
        <div className="service-content">
          <h1>Services</h1>
          <hr />
        </div>
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="service-grid"
        >
          <div className="service-box-1">
            <span className="icon">
              <FaBuilding />
            </span>
            <h1>Commercial Buildings</h1>
            <p>
              At Digital Estimator, we offer all-encompassing cost estimating
              solutions tailored to commercial construction endeavors. Our
              proficiency involves precise evaluation of materials, labor, and
              other expenditures unique to commercial structures. We excel in
              accurately estimating costs for diverse settings including
              offices, retail spaces, restaurants, hotels, and beyond.
            </p>
          </div>
          <div className="service-box-1">
            <span className="icon">
              <FaRoad />
            </span>
            <h1>Civil Work</h1>
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
          <div className="service-box-1">
            <span className="icon">
              <FaClipboardList />
            </span>
            <h1>Quantity takeoffs</h1>
            <p>
              Digital Estimator excels in precise measurement and quantification
              of materials necessary for construction endeavors. We provide a
              comprehensive breakdown of quantities for various materials
              including concrete, steel, wood, and other essentials. This
              meticulous approach proves indispensable for crucial aspects like
              budgeting, procurement, and the strategic planning of projects.
            </p>
          </div>
          <div className="service-box-1">
            <span className="icon">
              <FaHouseDamage />
            </span>
            <h1>Residential Buildings</h1>
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
          <div className="service-box-1">
            <span className="icon">
              <FaMarker />
            </span>
            <h1>Colored Mark-Ups</h1>
            <p>
              Digital Estimator enhances blueprints and plans by incorporating
              intricate cost-related annotations. This visual integration of
              cost estimates facilitates comprehension and communication. This
              valuable tool assists clients, contractors, and stakeholders in
              recognizing the financial implications within the project's
              design.
            </p>
          </div>
          <div className="service-box-1">
            <span className="icon">
              <FaFile />
            </span>
            <h1>Editable Excel Sheets</h1>
            <p>
              Digital Estimator delivers cost estimating data in a modifiable
              Excel format, enabling effortless customization. This feature
              empowers clients to adjust and revise estimates according to
              project-specific needs. It fosters seamless collaboration and
              offers flexibility in the realms of budgeting and cost management
              procedures.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Service;
