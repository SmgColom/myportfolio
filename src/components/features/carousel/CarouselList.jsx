import React from "react";
import { Carousel } from "react-bootstrap";
import CarouselItem  from "./CarouselItem";


const testimonies = [
  { name: "Jane Save - Save Group", text: " Desde el principio, este equipo demostró un profesionalismo excepcional y una profunda comprensión de nuestras necesidades específicas. No solo mejoraron la funcionalidad y el contenido de nuestro sitio web, sino que también incorporaron elementos creativos que lo distinguen de los demás. Recomiendo ampliamente sus servicios a cualquiera que busque desarrollo web de primer nivel con un toque creativo. ¡Muchas gracias al equipo por su excelente trabajo! " },
  { name: "Milena Toro", text: " ¡Una experiencia increíble! Gracias a su enfoque creativo y herramientas intuitivas, pude expresar mis metas y visualizar mi futuro de forma clara y motivadora. Cada vez que miro mi mapa de sueños, me siento más inspirada y concentrada en lograr todo lo que deseo. ¡Sin duda lo recomiendo a cualquiera que quiera manifestar sus metas y transformar su vida! " },
    { name: "Andres Arboleda", text: " Trabajar con Santiago en el desarrollo del sitio web para nuestro cliente Euro Dollar fue una experiencia excepcional. Como director de Arbolab, valoro enormemente su profesionalismo y entrega absoluta en cada fase del proyecto. Su capacidad para entender las necesidades del negocio y traducirlas en una plataforma funcional es admirable. Lo recomiendo ampliamente para cualquier proyecto digital de alto nivel espero seguir contando con su talento. " },
        { name: "Vanessa Vera", text: " Mi pequeña empresa y yo no solo estamos agradecidos, sino también completamente satisfechos con el excelente trabajo de Santiago Montoya. Desde el acompañamiento constante durante todo el proceso hasta la entrega final, cada detalle fue manejado con profesionalismo, resolviendo todas nuestras dudas y adaptándose a los cambios dentro de los tiempos acordados. Sin duda, gracias al desarrollo de la página web, nuestra empresa se ha visto altamente beneficiada, especialmente por la optimización de procesos, la sistematización y la facilidad que ahora ofrecemos a nuestros clientes. Recomiendo su trabajo al 100% por su compromiso, calidad y excelente atención en cada etapa del proyecto. " },
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