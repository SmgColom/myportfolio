import React from "react";
import { Carousel } from "react-bootstrap";
import CarouselItem  from "./CarouselItem";


const testimonies = [
  { name: "Jane Save - Save Group", text: " From the outset, this team displayed exceptional professionalism and a deep understanding of our specific needs. They not only improved the functionality and content of our site, but also introduced creative elements that truly set it apart.  I highly recommend their services to anyone seeking top-tier web development with a creative edge. Thank you to the team for your exceptional work! " },
  { name: "Milena Toro", text: " Incredible experience! Thanks to their creative approach and intuitive tools, I was able to express my goals and visualize my future in a clear and motivating way. Every time I look at my dream map, I feel more inspired and focused on achieving everything I desire. I definitely recommend it to anyone who wants to manifest their goals and transform their life! " },
];

const CarouselList = () => {
  return (
    <Carousel className="testimonial-carousel" interval={10000} pause="hover" aria-label="Client testimonials carousel">
      {testimonies.map((testimony, index) => (
        
        <Carousel.Item key={`testimonial-${index}`}> {/* ✅ Envuelve cada testimonio en un `Carousel.Item` */}
          <CarouselItem {...testimony} />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CarouselList;