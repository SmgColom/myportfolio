import { useState } from "react";
import "../style/index.css"; 
import AccordionList from "../components/features/accordion/AccordionList";
import ProfileImage from "../assets/ProfileImage.jpeg";
import styled from "styled-components";
import Section from "../components/layout/Section";


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
  flex-wrap: wrap; /* Para que sea responsive */

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
  }
`;

function WhoIAmPage() {
  const [panels, setPanels] = useState([
    {
      id: "profile",  
      title: "Your Partner in Digital Transformation!",
      content:
        "With 15+ years of experience in competitiveness, sustainability, and sales strategies, I help businesses leverage software development and web solutions to drive growth and innovation.<br/><br/>" +
        "As a Productivity & Quality Engineer and Marketing Specialist, I combine cutting-edge technology, intuitive UX/UI design, and strategic innovation to create high-performance digital experiences tailored to your business needs.<br/><br/>" +
        "I deliver solutions that:<br/>" +
        "✅ Enhance customer engagement<br/>" +
        "✅ Improve operational efficiency<br/>" +
        "✅ Increase sales and conversions<br/><br/>" +
        "Let's build a seamless digital experience for your company! Ready to take your business to the next level? Let's connect! 💡"
    },
    {
      id: "education",
      title: "My Educational Background",
      content:
        "I'm currently expanding my tech expertise at Holmesglen Institute, working towards a Diploma in Information Technology.<br/><br/>" +
        "My journey started with an Engineering degree in Productivity and Quality at Politécnico Colombiano JIC, followed by a Postgraduate degree in Marketing at EAFIT University.<br/><br/>" +
        "Recently, I earned a Certificate IV in Information Technology (Web Development), strengthening my skills in modern web technologies.<br/><br/>" +
        "This blend of engineering, marketing, and tech empowers me to create innovative and high-performing digital solutions!"
    },
    {
      id: "passions",
      title: "My Passions",
      content:
        "I'm all about energy, creativity, and constant growth! ⚡<br/><br/>" +
        "Whether I'm playing or watching sports, I'm always up for the thrill of competition. 🏀⚽🎾<br/><br/>" +
        "Web development is my playground, where I love building cool and functional digital experiences. 💻🎨<br/><br/>" +
        "Music is my fuel, especially when it's blasting rock & roll—nothing beats the power of a killer riff! 🎸🔥<br/><br/>" +
        "I'm also passionate about mastering English and expanding my knowledge every day. 🚀 Always curious, always learning!"
    }
  ]);

  return (
    <>
    <HeroSection>
      <HeroTitle>Who I Am</HeroTitle>
      <ContentWrapper>
        <LeftColumn>
          <Image src={ProfileImage} alt="Profile" />
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

