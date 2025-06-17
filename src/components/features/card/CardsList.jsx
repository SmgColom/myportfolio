import React, { useEffect } from "react";
import styled from "styled-components";
import CardItem from "./CardItem";
import { useLocation } from "react-router-dom";

import SG from "../../../assets/SG.jpg";  
import Dw from "../../../assets/Dw.jpg"; 
import Fwd2 from "../../../assets/Fwd2.png"; 

const projects = [
  {
    title: "Business Website Essential",
    description: "A professional and streamlined website built to showcase your business, engage customers, and establish a strong online presence",
    image: SG,
    links: [{ text: "Demo", url: "https://thesavegroup.com.au/" }],
  },
  {
    title: "Dynamic Web Page",
    description: "An interactive and flexible web page built to display real-time content, adapt to user behavior, and enhance engagement. Ideal for platforms that require user input, data updates, or personalized experiences such as dashboards, portals, or web apps.",
    image: Dw,
    links: [{ text: "Demo", url: "https://miletoroseguros.vercel.app/news/blog" }],
  },
  {
    title: "Fullstack Web Development",
    description: "A Complete web application from frontend to backend. Perfect for startups or businesses requiring advanced functionalities",
    image: Fwd2,
    links: [{ text: "Demo", url: "https://wellness-1-kuob.onrender.com" }],
  },
];

// 📌 Estilos personalizados
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




