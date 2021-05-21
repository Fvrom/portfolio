import React from "react";
import "./project.css";

const Project = (props) => {
  return (
    <div className="project-card" id={props.id}>
      <img
        className="project-image"
        src={props.image}
        alt="showing project"
      ></img>

      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <a className="Link" href={props.url}>
        {props.link}
      </a>
    </div>
  );
};
export default Project;
