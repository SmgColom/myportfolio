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
  font-size: clamp(2rem, 3vw, 2em);


`;

const HeroPara = styled.p`
  font-family: 'Open Sans', sans-serif;
  font-size: clamp(4rem, 4vw, 2em);
  color: var(--text-color);
  margin: 1rem 0;
  text-align: left;

  @media (max-width: 430px){
    font-size: clamp(2rem, 4vw, 2em);
  }

`;

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Modern Web Development for Businesses | Santiago Montoya</title>
        <meta
          name="description"
          content="Explore Santiago Montoya's portfolio – a fullstack developer building stunning, responsive websites for businesses and startups in Melbourne and Medellín."
        />
        <meta
          name="keywords"
          content="Fullstack web developer Melbourne, Santiago Montoya, responsive websites, React developer, modern web development"
        />
        <link rel="canonical" href="https://santiagomontoya.com.au" />
      </Helmet>
    <HeroSection>
      <HeroTitle>Modern web development for a global audience</HeroTitle>
      <HeroPara> I help you to create the most stunning website tailored for your needs</HeroPara>
      <HeroPara>Let's do it together!</HeroPara>
      <ContactButton aria-label="Contact Santiago Montoya"/>
    </HeroSection>
    </>
  );
};

export default Home;

