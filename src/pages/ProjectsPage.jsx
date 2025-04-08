import CardsList from "../components/features/card/CardsList";
import CarouselList from "../components/features/carousel/CarouselList";
import ContactButton from '../components/common/ContactButton';
import Tools from '../components/layout/Tools';

import styled from "styled-components";

// ✅ Sección principal
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

// ✅ Subtítulo del quote
const CardTitle = styled.h2`
  font-family: 'Work Sans', sans-serif;
  font-size: clamp(1.4rem, 4vw, 1.8rem);
  font-weight: bold;
  color: var(--title-color);
  margin: 30px 0 20px;
`;

const Background3 = styled.section`
  background: linear-gradient(180deg, #f8f9fa 10%, #e9ecef 100%);
  width: 100%;
`;



function ProjectsPage() {
  return (
    <>
      <HeroSection>
        <HeroTitle>My Projects and Portfolio</HeroTitle>
        <CardsList />
        <CardTitle>Get a quote for your website today!</CardTitle>
        <ContactButton />
      </HeroSection>
      <Background3>
      <CarouselList />
      <Tools />
      </Background3>
    </>
  );
}

export default ProjectsPage;
