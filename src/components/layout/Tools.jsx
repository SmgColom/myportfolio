import React from 'react';
import styled from "styled-components";
import { FaWordpress } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa6";
import { FaHtml5 } from "react-icons/fa";
import { MdCss } from "react-icons/md";
import { SiStyledcomponents } from "react-icons/si";



const HeroSectionFour = styled.section`
  padding: 1rem 2rem;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

const HeroTitleFour = styled.h1`
  font-family: 'Work Sans', sans-serif;
  font-weight: bolder;
  color: #232f45;
  font-size: clamp(2rem, 3vw, 2em);
  margin-bottom: 2rem;
  text-align: left;
`;

const ValuesGrid = styled.div`
  display: grid;
  gap: 2rem;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));

  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const ValueCard = styled.div`
  padding: 0rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Icon = styled.div`
  font-size: 4rem;
  color: #232f45;
  margin-bottom: 0.5rem;
`;

const ValueLabel = styled.p`
  font-family: 'Open Sans', sans-serif;
  font-size: 1rem;
  font-weight: 600;
  color: #232f45;
  margin: 0;
`;

export default function Section() {
  const values = [
    {
      icon: <FaWordpress />,
      label: "WordPress",
    },
    {
      icon: <IoLogoJavascript />,
      label: "JavaScript",
    },
    {
      icon: <FaReact />,
      label: "React",
    },
    {
      icon: <FaNode />,
      label: "Node.js",
    },
    {
      icon: <FaHtml5 />,
      label: "HTML5",
    },
    {
      icon: <MdCss />,
      label: "CSS",
    },
    {
      icon: <SiStyledcomponents />,
      label: "Styled Components",
    },
  ];

  return (

      <HeroSectionFour>
        <HeroTitleFour>Technologies I Use for Modern Web Development</HeroTitleFour>
        <ValuesGrid role="list" aria-label="Technology tools I use">
          {values.map((value, index) => (
            <ValueCard key={index} role="listitem">
              <Icon aria-hidden="true">{value.icon}</Icon>
              <ValueLabel>{value.label}</ValueLabel>
            </ValueCard>
          ))}
        </ValuesGrid>
      </HeroSectionFour>
  );
}
