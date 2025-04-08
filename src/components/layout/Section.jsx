import React from 'react';
import styled from "styled-components";
import { FaFileSignature } from "react-icons/fa";
import { FaBookReader } from "react-icons/fa";
import { MdOutlineHandshake } from "react-icons/md";
import { FaFireAlt } from "react-icons/fa";

const Background2 = styled.section`
  background: linear-gradient(180deg, #f8f9fa 10%, #e9ecef 100%);
  width: 100%;
`;

const HeroSectionTwo = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  text-align: left;
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const HeroTitleTwo = styled.h1`
  font-family: 'Work Sans', sans-serif;
  font-weight: bolder;
  color: #232f45;
  font-size: clamp(2rem, 3vw, 2em);
  margin-bottom: 2rem;
`;

const ValuesGrid = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`;

const ValueCard = styled.section`

  padding: 0rem;
`;

const Icon = styled.div`
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
  color: #232f45;
`;

const ValueTitle = styled.h3`
  font-family: 'Work Sans', sans-serif;
  font-weight: 600;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: #232f45;
`;

const ValueDescription = styled.p`
  font-family: 'Open Sans', sans-serif;
  font-size: 0.95rem;
  color: #232f45;
  line-height: 1.5;
`;

export default function Section() {
  const values = [
    {
      icon: <FaFileSignature aria-hidden="true" />,
      title: 'Accountability',
      description: 'I take ownership of my work and deliver results with reliability and integrity, ensuring every task is completed with care and responsibility.',
    },
    {
      icon: <FaBookReader aria-hidden="true"  />,
      title: 'Continuous Learning',
      description: 'I stay curious and committed to growth, constantly exploring new technologies and trends to keep my skills sharp and relevant.',
    },
    {
      icon: <MdOutlineHandshake aria-hidden="true"  />,
      title: 'Collaboration',
      description: 'I thrive in team environments, communicating clearly and working closely with others to turn ideas into impactful digital solutions.',
    },
    {
      icon: <FaFireAlt aria-hidden="true"  />,
      title: 'Genuine Passion',
      description: 'I bring energy and enthusiasm to every project, driven by a true love for web development and creating meaningful digital experiences.',
    },
  ];

  return (
    <Background2>
      <HeroSectionTwo aria-label="Values Section">
        <HeroTitleTwo>My Values</HeroTitleTwo>
        <ValuesGrid>
          {values.map((value, index) => (
            <ValueCard key={index}>
              <Icon>{value.icon}</Icon>
              <ValueTitle>{value.title}</ValueTitle>
              <ValueDescription>{value.description}</ValueDescription>
            </ValueCard>
          ))}
        </ValuesGrid>
      </HeroSectionTwo>
    </Background2>
  );
}
