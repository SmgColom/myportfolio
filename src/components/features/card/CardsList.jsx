import React, { useEffect } from "react";
import styled from "styled-components";
import CardItem from "./CardItem";
import { useLocation } from "react-router-dom";

import SG from "../../../assets/SG.jpg";  
import Dw from "../../../assets/Dw.jpg"; 
import Fwd2 from "../../../assets/Fwd2.png";
import Eurodollar from "../../../assets/Eurodollar.png";
import Juva from "../../../assets/Juva.png";
import Metric from "../../../assets/Metric.png";

const projects = [
  {
    title: "Sitio Web Empresarial esencial",
    description: "Un sitio web profesional y optimizado, diseñado para mostrar su negocio, atraer clientes y establecer una sólida presencia en línea.",
    image: SG,
    links: [{ text: "Demo", url: "https://thesavegroup.com.au/" }],
  },
  {
    title: "Sitio Web Dinámico",
    description: "Una página web interactiva y flexible diseñada para mostrar contenido en tiempo real, adaptarse al comportamiento del usuario y mejorar la interacción. Ideal para plataformas que requieren la entrada de datos del usuario, actualizaciones de datos o experiencias personalizadas, como paneles de control, portales o aplicaciones web.",
    image: Dw,
    links: [{ text: "Demo", url: "https://miletoroseguros.vercel.app/news/blog" }],
  },
  {
    title: "Desarrollo Fullstack",
    description: "Una aplicación web completa, desde el frontend hasta el backend. Perfecta para startups o empresas que requieren funcionalidades avanzadas.",
    image: Fwd2,
    links: [{ text: "Demo", url: "https://wellness-1-kuob.onrender.com" }],
  },
  {
    title: "Sitio Web Dinámico",
    description: "Una página web interactiva y flexible diseñada para mostrar contenido en tiempo real, adaptarse al comportamiento del usuario y mejorar la interacción. Ideal para plataformas que requieren la entrada de datos del usuario, actualizaciones de datos o experiencias personalizadas, como paneles de control, portales o aplicaciones web.",
    image: Eurodollar,
    links: [{ text: "Demo", url: "https://www.eurodollarcolombia.com/" }],
  },
    {
    title: "Landing Page Dinámica",
    description: "Landing page desarrollada para una empresa de servicios de limpieza en Melbourne, enfocada en conversión y experiencia de usuario. Incluye secciones de servicios, testimonios y contacto directo, con diseño responsive y optimización SEO para captación de clientes potenciales.",
    image: Juva,
    links: [{ text: "Demo", url: "https://juva-cleaning.vercel.app/" }],
  },

      {
    title: "Sitio Web Dinámico",
    description: "Una página web interactiva y flexible diseñada para mostrar contenido en tiempo real, adaptarse al comportamiento del usuario y mejorar la interacción. Ideal para plataformas que requieren la entrada de datos del usuario, actualizaciones de datos o experiencias personalizadas, como paneles de control, portales o aplicaciones web.",
    image: Metric,
    links: [{ text: "Demo", url: "https://metric-omega.vercel.app/" }],
  },

];


const CardsContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 1rem;
  margin-top: 3rem;
  gap: 2rem;

  @media (min-width: 768px) {
    padding: 0rem;
    margin-top: 3rem;
  }

  @media (max-width: 430px) {
    padding: 0rem;
    margin-top: 1rem;
  }
`;

const CardList = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const hash = location.hash.replace("#", "");
      const element = document.getElementById(hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 300);
      }
    }
  }, [location.hash]);

  return (
    <CardsContainer aria-label="Project showcase">
      {projects.map((project, index) => (
        <CardItem key={index} id={`project-${index + 1}`} {...project} />
      ))}
    </CardsContainer>
  );
};

export default CardList;




