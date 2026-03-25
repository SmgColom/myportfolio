import React from "react";
import { Carousel } from "react-bootstrap";
import CarouselItem  from "./CarouselItem";


const testimonies = [
  { name: "Jane Save - Save Group", text: " Desde el principio, este equipo demostró un profesionalismo excepcional y una profunda comprensión de nuestras necesidades específicas. No solo mejoraron la funcionalidad y el contenido de nuestro sitio web, sino que también incorporaron elementos creativos que lo distinguen de los demás. Recomiendo ampliamente sus servicios a cualquiera que busque desarrollo web de primer nivel con un toque creativo. ¡Muchas gracias al equipo por su excelente trabajo! " },
  { name: "Milena Toro", text: " ¡Una experiencia increíble! Gracias a su enfoque creativo y herramientas intuitivas, pude expresar mis metas y visualizar mi futuro de forma clara y motivadora. Cada vez que miro mi mapa de sueños, me siento más inspirada y concentrada en lograr todo lo que deseo. ¡Sin duda lo recomiendo a cualquiera que quiera manifestar sus metas y transformar su vida! " },
];

const CarouselList = () => {
  return (
    <Carousel className="testimonial-carousel" interval={10000} pause="hover" aria-label="Client testimonials carousel">
      {testimonies.map((testimony, index) => (
        
        <Carousel.Item key={`testimonial-${index}`}> 
          <CarouselItem {...testimony} />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CarouselList;