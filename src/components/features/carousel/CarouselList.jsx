import React from "react";
import { Carousel } from "react-bootstrap";
import CarouselItem  from "./CarouselItem";


const testimonies = [
  { name: "Jane Save - Save Group", text: "“I recently had the privilege of collaborating with a talented group of students from Holmesglen TAFE on the redevelopment of our website, The Save Group. From the outset, this team displayed exceptional professionalism and a deep understanding of our specific needs. They not only improved the functionality and content of our site, but also introduced creative elements that truly set it apart. Opting for original photographs instead of stock images, the team enhanced the site's visual appeal significantly. Throughout the project, they went above and beyond the call of duty, proactively suggesting innovative ideas and functionalities that made our website more engaging and user-friendly. Their responsiveness and commitment to timely delivery, even when taking on additional tasks, were outstanding. The final product exceeded our expectations and delivered a visually stunning, eIicient, and user-friendly website. The dedication and creativity of these students have been instrumental in the success of this project. I highly recommend their services to anyone seeking top-tier web development with a creative edge. Thank you to the team for your exceptional work!”" },
  { name: "", text: "" },
  { name: "", text: "" },
];



const CarouselList = () => {
  return (
    <Carousel className="testimonial" interval={3000} pause="hover">
    {testimonies
  .filter(testimony => testimony.name.trim() !== "" && testimony.text.trim() !== "")
  .map((testimony, index) => (
    <CarouselItem key={index} {...testimony} />
  ))}
    </Carousel>
  );
};
console.log(testimonies)

export default CarouselList;

