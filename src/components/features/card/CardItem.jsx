import React from "react";
import "/src/styles/index.css";

const ProjectCard = ({ title, description, image, items, links }) => {
  return (
    <div className="card shadow-lg border-0 rounded" style={{ width: "18rem" }}>
      <img src={image} className="card-img-top" alt={title} />
      <div className="card">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
      </div>
      <ul className="list-group list-group-flush">
        {items.map((item, index) => (
          <li key={index} className="card-text">
            {item}
          </li>
        ))}
      </ul>
      <div className="card-body">
        {links.map((link, index) => (
          <a key={index} href={link.url} className="card-link" target="_blank" rel="noopener noreferrer">
            {link.text}
          </a>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
