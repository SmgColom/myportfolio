import { FaLinkedin, FaGithub, FaSquareUpwork } from "react-icons/fa6";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import WhiteLogo from "../../assets/WhiteLogo.svg";
import MyLogo from "../../assets/MyLogo.svg";
import { useTheme } from "../../context/ThemeContext";

const FooterWrapper = styled.footer`
  padding: 3rem 2rem 1rem 2rem;
  max-width: 1500px;
  margin: 0 auto;
  width: 100%;
  box-sizing: border-box;
  color: ${({ $isLightMode }) => ($isLightMode ? "#232f45" : "var(--text-color)")};

  a, p, h4, span {
    color: ${({ $isLightMode }) => ($isLightMode ? "#232f45" : "var(--text-color)")};
  }

  a:hover {
    color: var(--text-hover);
  }
`;

const FooterTop = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr auto;
  gap: 3rem;
  margin-right: 0rem;
  margin-bottom: 2rem;
  align-items: center;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const FooterSection = styled.div`
  h4 {
    font-family: 'Work Sans', sans-serif; 
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }

  a {
    font-family: 'Open Sans', sans-serif;
    display: block;
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
    text-decoration: none;
  }

  p {
    font-family: 'Open Sans', sans-serif;
    display: block;
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid #ffffff;
  margin-top: 2rem;
  margin-bottom: 1rem;
  margin-right:  0rem;
  padding-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  @media(min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;

  a {
    text-decoration: none;
  }
`;

const Logo = styled.img`
  width: 80px;
  margin: 0 auto;

  @media (max-width: 480px) {
    width: 50px;
  }
`;

const LogoSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media (max-width: 1024px) {
    justify-content: center;
    grid-column: span 2;
    margin-top: 1rem;
  }

  @media (max-width: 600px) {
    grid-column: span 1;
  }

  @media (max-width: 430px) {
    justify-content: center;
  }
`;

export default function Footer({ isLightMode }) {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const { mode } = useTheme();
  const [shouldApplyLight, setShouldApplyLight] = useState(isLightMode && !isHome);

  const currentLogo = isHome ? WhiteLogo : mode === "dark" ? WhiteLogo : MyLogo;

  useEffect(() => {
    setShouldApplyLight(isLightMode && !isHome);
  }, [isLightMode, isHome]);

  return (
    <FooterWrapper $isLightMode={shouldApplyLight}>
      <FooterTop>
        <FooterSection>
          <h4>Who I Am</h4>
          <a href="/whoiam#profile">Profile</a>
          <a href="/whoiam#education">Educational Background</a>
          <a href="/whoiam#passions">My Passions</a>
        </FooterSection>

        <FooterSection>
          <h4>Solution</h4>
          <a href="/projects#project-1">Landing Page Starter</a>
          <a href="/projects#project-2">Business Website Essential</a>
          <a href="/projects#project-3">Fullstack Web Development</a>
        </FooterSection>

        <FooterSection>
          <h4>Melbourne</h4>
          <p>15 Clifton St</p>
          <p>Prahan, VIC 3181</p>
          <p>(04) 32318142</p>
        </FooterSection>

        <FooterSection>
          <h4>Medellín</h4>
          <p>Calle 21 Sur # 41 -117</p>
          <p>Envigado, Antioquia</p>
          <p>(+57) 3157274796</p>
        </FooterSection>

        <LogoSection>
          <Logo src={currentLogo} alt="Logo" />
        </LogoSection>
      </FooterTop>

      <FooterBottom>
        <span>&copy; 2025 Santiago Montoya</span>
        <SocialIcons>
          <a href="https://www.linkedin.com/in/santiago-montoya-gomez-51912a79" target="_blank" rel="noopener noreferrer"><FaLinkedin size={20} /></a>
          <a href="https://github.com/SmgColom" target="_blank" rel="noopener noreferrer"><FaGithub size={20} /></a>
          <a href="https://www.upwork.com/freelancers/~014dc236066c8a379f?mp_source=share" target="_blank" rel="noopener noreferrer"><FaSquareUpwork size={20} /></a>
        </SocialIcons>
      </FooterBottom>
    </FooterWrapper>
  );
}





