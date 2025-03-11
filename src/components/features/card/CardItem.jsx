import React from "react";
import { Card } from "react-bootstrap"; // Asegura que Bootstrap está importado
import "/src/styles/index.css";

const CardItem = ({ title, description, image, links }) => {
  return (
    <Card className="shadow-lg border-0 project-card">
      {/* Contenedor de imagen con Bootstrap */}
      <Card.Img variant="top" src={image} className="project-image"/>
      <Card.Body className="p-4">
        <Card.Title className="fw-bold text-center">{title}</Card.Title>
        <Card.Text>{description}</Card.Text>

        <div className="d-flex justify-content-center mt-3">
          {links.map((link, index) => (
            <a key={index} href={link.url} className="card-button" target="_blank" rel="noopener noreferrer">
              {link.text}
            </a>
          ))}
        </div>
      </Card.Body>
    </Card>
  );
};

export default CardItem;
