import { useState } from "react";
import "../style/index.css"; 
import AccordionList from "../components/features/accordion/AccordionList";
import ProfileImage from "../assets/ProfileImage.jpeg";
import styled from "styled-components";
import Section from "../components/layout/Section";
import { Helmet } from "react-helmet-async";


const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  text-align: left;
  min-height: auto;
  max-width: 1200px;
  padding: 4rem 2rem;
  margin: 0 auto;
  width: 100%;
`;

const HeroTitle = styled.h1`
  font-family: 'Work Sans', sans-serif;
  font-weight: bolder;
  color: var(--title-color);
  font-size: clamp(2rem, 3vw, 2em);
`;


const ContentWrapper = styled.div`
  margin-top: 2rem; 
  display: flex;
  justify-content: space-between;
  align-items: center; 
  align-items: flex-start; 
  gap: 2rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const LeftColumn = styled.div`
  flex: 1;
  min-width: 300px;
  max-width: 500px;
`;

const RightColumn = styled.div`
  flex: 1;
  width: 100%;
  font-family: 'Open Sans', sans-serif;
  font-size: clamp(1rem, 4vw, 1.2rem);
  color: var(--text-color);
  text-align: left;

`;

const Image = styled.img`
  width: 500px;
  height: 635px;
  object-fit: cover;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    margin: 2rem 0;
    width: 500px;
    height: 550px;
  }
  @media (max-width: 430px) {
  width: 400px;
  height: 400px;
  }
`;

function WhoIAmPage() {
  const [panels, setPanels] = useState([
    {
      id: "profile",  
      title: "Tu socio en la transformación digital!!",
      content:
        "Con 16 años de experiencia en estrategia de ventas, mercadeo y desarrollo de negocios, ayudo a las empresas a aprovechar el desarrollo de software y las soluciones web para impulsar el crecimiento y la innovación.<br/><br/>" +
        "Como ingeniero de productividad y calidad  y especialista en marketing, combino tecnología de vanguardia, diseño UX/UI intuitivo, y estrategia de innovación para crear experiencias digitales de alto desempeño a la medida de las necesidades de tu negocio.<br/><br/>" +
        "Entrego soluciones que:<br/>" +
        "✅ Mejoran la interacción con el cliente<br/>" +
        "✅ Incrementan la eficiencia operacional<br/>" +
        "✅ Incrementan las ventas y conversiones<br/><br/>" +
        "Vamos a crear una experiencia digital impecable para su empresa! Listo para llevar tu negocio al siguiente nivel? Conectémonos 💡"
    },
    {
      id: "education",
      title: "Mi formación profesional",
      content:
        "Soy desarrollador web fullstack del Instituto Holmesglen, Melbourne, Australia, con 3 años de experiencia en el mercado.<br/><br/>" +
        "Mi camino empezó con una ingeniería en productividad y calidad en el Politécnico Colombiano JIC, seguido de un postgrado en Marketing en la universidad EAFIT.<br/><br/>" +
        "Esta mezcla de ingeniería, mercadeo y tecnología me empoderan para crear  soluciones digitales innovadoras y de alto desempeño!"
    },
    {
      id: "passions",
      title: "Mis Pasiones",
      content:
        "¡Me apasiona la energía, la creatividad y el crecimiento constante! ⚡<br/><br/>" +
        "Ya sea que esté practicando o viendo deportes, siempre estoy dispuesto a experimentar la emoción de la competición. 🏀⚽🎾<br/><br/>" +
        "El desarrollo web es mi terreno de juego, donde me encanta crear experiencias digitales geniales y funcionales. 💻🎨<br/><br/>" +
        "La música es mi combustible, especialmente cuando suena rock a todo volumen: ¡nada supera el poder de un riff demoledor!🎸🔥<br/><br/>" +
        "También me apasiona dominar el inglés y ampliar mis conocimientos cada día.🚀 Siempre curioso, siempre aprendiendo!"
    }
  ]);

  return (
    <>
    <Helmet>
      <title>Quien soy yo | Santiago Montoya | Desarrollador Ingeniero Mercadólogo</title>
      <meta
        name="description"
        content="Conoce a Santiago Montoya, desarrollador web full-stack con experiencia en ingeniería, marketing y desarrollo web. Descubre sus pasiones, formación académica y trayectoria profesional."
      />
      <meta
        name="keywords"
        content="Empresa de desarrollo web, desarrollador web en Colombia, desarrollador Colombiano, historia personal, experiencia, ingeniero full-stack"
      />
      <link rel="canonical" href="https://santiagomontoya.com.au/whoiam" />
    </Helmet>
    <HeroSection>
      <HeroTitle>Quién soy yo?</HeroTitle>
      <ContentWrapper>
        <LeftColumn>
          <Image src={ProfileImage} alt="Santiago Montoya profile image" />
        </LeftColumn>
        <RightColumn>
          <AccordionList panels={panels} />
        </RightColumn>
      </ContentWrapper>
    </HeroSection>
    <Section />
    </>
  );
}
export default WhoIAmPage;

