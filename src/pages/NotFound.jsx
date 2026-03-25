
import { Link } from "react-router-dom"
import { BiHome } from "react-icons/bi";
import styled from "styled-components";
import { Helmet } from "react-helmet-async";

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

const HomeBtn = styled(Link)`
  font-size: 5rem;
  border: none;
  background-color: var(--bg-color);
  border-radius: 5px;
  cursor: pointer;
  color: var(--text-color);
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: var(--text-hover);
  }
`;  

function NotFound() {
  return (
    <>
    <Helmet>
      <title>404 | Página no encontrada</title>
      <meta name="robots" content="noindex" />
    </Helmet>
    <HeroSection>
     
        <HeroTitle>Hmm...</HeroTitle>
        <HeroPara>Página no encontrada, por favor vuelva al inicio</HeroPara>
        <HomeBtn>
        <Link to="/">
          <BiHome id="btn-icon" aria-labelledby="Home button"/>
        </Link>
        </HomeBtn>
    </HeroSection>
    </>
  )
}

export default NotFound