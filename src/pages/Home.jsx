import styled from "styled-components";
import ContactButton from '../components/common/ContactButton';
import { Helmet } from 'react-helmet-async';

const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  text-align: left;
  min-height: auto;
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const HeroTitle = styled.h1`
  font-family: 'Work Sans', sans-serif;
  font-weight: bolder;
  color: var(--title-color);
  font-size: clamp(1.5rem, 3vw, 2em);
  margin-bottom: 30px;

`;

const HeroPara = styled.p`
  font-family: 'Open Sans', sans-serif;
  font-size: clamp(3.5rem, 4vw, 2em);
  color: var(--text-color);
  margin: 1rem 0;
  margin-bottom: 40px;
  text-align: left;

  @media (max-width: 430px){
    font-size: clamp(2rem, 4vw, 2em);
  }

`;

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Desarrollo web moderno para empresas | Santiago Montoya</title>
        <meta
          name="description"
          content="Descubre el portafolio de Santiago Montoya, un desarrollador full-stack que crea sitios web impresionantes y responsivos para empresas y startups en cualquier lugar del mundo."
        />
        <meta
          name="keywords"
          content="Desarrollador Web fullstack Medellín, Santiago Montoya, sitios web responsivos, Desarrollador React, Desarrollo Web moderno"
        />
        <link rel="canonical" href="https://santiagomontoya.com.au" />
      </Helmet>
    <HeroSection>
      <HeroTitle>Desarrollo web moderno para una audiencia global</HeroTitle>
      <HeroPara> Te ayudo a crear los sitios web más asombrosos a la medida de tus necesidades</HeroPara>
      <HeroPara>Hagámoslo juntos !</HeroPara>
      <ContactButton aria-label="Contact Santiago Montoya"/>
    </HeroSection>
    </>
  );
};

export default Home;

