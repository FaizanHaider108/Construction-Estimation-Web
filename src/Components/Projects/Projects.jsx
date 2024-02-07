import React from "react";
import "./Projects.css";
import Building from "../../Assets/building.png";
const Projects = () => {
  return (
    <div className="projects">
      <div className="projects-wrapper">
        <div className="project-div">
          <img src={Building} alt="" />
          <h1>200+</h1>
          <h4>Projects Completed</h4>
        </div>
        <div className="project-div">
          <img src={Building} alt="" />
          <h1>50+</h1>
          <h4>Satisfied Clients</h4>
        </div>
        <div className="project-div">
          <img src={Building} alt="" />
          <h1>20+</h1>
          <h4>Worker Employed</h4>
        </div>
      </div>
    </div>
  );
};

export default Projects;
