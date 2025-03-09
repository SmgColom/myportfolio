import React from "react";
import { Carousel } from "react-bootstrap";

const CarouselItem = ({ name, text }) => {
  console.log("Rendering CarouselItem:", { name, text });
  return (
      <div className="testimonial">
        <h3>{name}</h3>
        <p>{text}</p>
      </div>
  );
};

export default CarouselItem;


