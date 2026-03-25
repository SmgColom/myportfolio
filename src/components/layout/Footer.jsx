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
  grid-template-columns: repeat(3, 1fr);
  align-items: start;
  margin-bottom: 2rem;

 
  & > :nth-child(1) {
    justify-self: start;
  }

  & > :nth-child(2) {
    justify-self: center;
  }

  & > :nth-child(3) {
    justify-self: end;
    text-align: right;
  }

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);

    & > :nth-child(2) {
      justify-self: end;
      text-align: right;
    }

    & > :nth-child(3) {
      justify-self: start;
      text-align: left;
    }
  }

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    justify-self: center;
    text-align: center;
    & > :nth-child(1) {width: 100%;
    }
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
          <h4>Quién Soy Yo</h4>
          <a href="/whoiam#profile">Perfil</a>
          <a href="/whoiam#education">Formación Profesional</a>
          <a href="/whoiam#passions">Mis pasiones</a>
        </FooterSection>

        <FooterSection>
          <h4>Soluciones</h4>
          <a href="/projects#project-1">Sitio Web Empresarial</a>
          <a href="/projects#project-2">Sitio Web Dinámico</a>
          <a href="/projects#project-3">Desarrollo Fullstack</a>
        </FooterSection>

        <FooterSection>
          <h4>Medellín</h4>
          <p>Envigado, Antioquia</p>
          <p>(+57) 3157274796</p>
        </FooterSection>


      </FooterTop>

      <FooterBottom>
        <span>&copy; 2026 Santiago Montoya</span>
        <SocialIcons>
          <a   href="https://www.linkedin.com/in/santiagomontoyagomez" 
            title="LinkedIn"
            aria-label="LinkedIn"
            target="_blank" 
            rel="noopener noreferrer"><FaLinkedin size={20} /></a>
          <a href="https://github.com/SmgColom" title="GitHub" aria-label="GitHub" target="_blank" rel="noopener noreferrer"><FaGithub size={20} /></a>
          <a href="https://www.upwork.com/freelancers/~014dc236066c8a379f?mp_source=share" title="Upwork" aria-label="Upwork" target="_blank" rel="noopener noreferrer"><FaSquareUpwork size={20} /></a>
        </SocialIcons>
      </FooterBottom>
    </FooterWrapper>
  );
}





