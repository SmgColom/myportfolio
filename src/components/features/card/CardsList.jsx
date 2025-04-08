import React, { useEffect } from "react";
import styled from "styled-components";
import CardItem from "./CardItem";
import { useLocation } from "react-router-dom";

import SG from "../../../assets/SG.png";  
import Bwe from "../../../assets/Bwe.png"; 
import Fwd2 from "../../../assets/Fwd2.png"; 

const projects = [
  {
    title: "Landing Page Starter",
    description: "A focused and compelling web page designed to capture attention, showcase your offer, and drive visitors to take action. Perfect for promoting products, services, or campaigns.",
    image: Bwe,
    links: [{ text: "Demo", url: "https://colombiacoffee.santiagomontoya.com.au/" }],
  },
  {
    title: "Business Website Essential",
    description: "A professional and streamlined website built to showcase your business, engage customers, and establish a strong online presence",
    image: SG,
    links: [{ text: "Demo", url: "https://thesavegroup.com.au/" }],
  },
  {
    title: "Fullstack Web Development",
    description: "A Complete web application from frontend to backend. Perfect for startups or businesses requiring advanced functionalities",
    image: Fwd2,
    links: [{ text: "Demo", url: "https://wellness-1-kuob.onrender.com" }],
  },
];

// 📌 Estilos personalizados
const CardsContainer = styled.div`
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

  @media (min-width: 430px) {
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
    <CardsContainer>
      {projects.map((project, index) => (
        <CardItem key={index} id={`project-${index + 1}`} {...project} />
      ))}
    </CardsContainer>
  );
};

export default CardList;




