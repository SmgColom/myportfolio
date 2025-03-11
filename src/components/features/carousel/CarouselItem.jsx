import React from "react";

const CarouselItem = ({ name, text }) => {
  return (
    <div className="testimonial">
      <h3>{name}</h3>
      <p>{text}</p>
    </div>
  );
};

export default CarouselItem;



