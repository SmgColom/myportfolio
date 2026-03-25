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
      title: 'Responsabilidad',
      description: 'Me responsabilizo de mi trabajo y entrego resultados con fiabilidad e integridad, asegurándome de que cada tarea se complete con cuidado y responsabilidad.',
    },
    {
      icon: <FaBookReader aria-hidden="true"  />,
      title: 'Aprendizaje continuo',
      description: 'Mantengo la curiosidad y el compromiso con el crecimiento, explorando constantemente nuevas tecnologías y tendencias para mantener mis habilidades relevantes y al día.',
    },
    {
      icon: <MdOutlineHandshake aria-hidden="true"  />,
      title: 'Colaboración',
      description: 'Me desenvuelvo muy bien en entornos de equipo, comunicándome con claridad y trabajando en estrecha colaboración con los demás para convertir ideas en soluciones digitales de gran impacto.',
    },
    {
      icon: <FaFireAlt aria-hidden="true"  />,
      title: 'Pasion Genuina',
      description: 'Aporto energía y entusiasmo a cada proyecto, impulsado por un verdadero amor por el desarrollo web y la creación de experiencias digitales significativas.',
    },
  ];

  return (
    <Background2>
      <HeroSectionTwo aria-label="Values Section">
        <HeroTitleTwo>Mis valores</HeroTitleTwo>
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
