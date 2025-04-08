
import { Link } from "react-router-dom"
import { BiHome } from "react-icons/bi";
import styled from "styled-components";

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
  font-size: clamp(1rem, 4vw, 1.5em);
  color: var(--text-color);
  margin: 1rem 0;
  text-align: center;
`;

const HomeBtn = styled.button`
  font-size: 5rem;
  border: none;
  background-color: var(--bg-color);
  border-radius: 5px;
  cursor: pointer;
  `;  

function NotFound() {
  return (
    <HeroSection>
     
        <HeroTitle>Hmm...</HeroTitle>
        <HeroPara>Page not found, please go back to Home Page</HeroPara>
        <HomeBtn>
        <Link to="/">
          <BiHome id="btn-icon" aria-labelledby="Home button"/>
        </Link>
        </HomeBtn>
    
    </HeroSection>
  )
}

export default NotFound