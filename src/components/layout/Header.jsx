import React, { useState, useEffect, useContext } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import CalendarButton from "../common/CalendarButton";
import WhiteLogo from "../../assets/WhiteLogo.svg";
import MyLogo from "../../assets/MyLogo.svg";
import { useTheme } from "../../context/ThemeContext";


// Styles
const StyledNavbar = styled(Navbar)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
  backdrop-filter: ${({ $scrolled }) => ($scrolled ? "blur(4px)" : "none")};
  background-color: ${({ $scrolled }) => ($scrolled ? "rgba(0, 0, 0, 0.4)" : "transparent")};
  padding: 1.5rem 1rem;
  transition: background-color 0.3s ease, backdrop-filter 0.3s ease;
`;

const Logo = styled.img`
  width: 80px;
  @media (max-width: 480px) {
    width: 50px;
  }
`;

const StyledNavLink = styled(Nav.Link)`
  font-family: 'Work Sans', sans-serif;
  color: var(--title-color);
  font-size: 1.2rem;
  font-weight: bold;
  margin-right: 15px;
  text-decoration: none;

  &:hover {
    color: var(--text-hover);
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    margin: 0.5rem 0;
  }
`;

const StyledNavbarToggle = styled(Navbar.Toggle)`
  border: none;
  background-color: transparent;

  &:focus {
    box-shadow: none;
  }
`;

const MenuIcon = styled.span`
  color: var(--mode-color);
  font-size: 1.5rem;
`;


const CollapsedNav = styled(Navbar.Collapse)`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: flex-end;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  background-color: rgba(0, 0, 0, 0.07);
  padding: 1rem;
  border-radius: 8px;
  margin-top: 0.5rem;

  @media (min-width: 992px) {
    background: transparent;
    padding: 0;
    margin-top: 0;
  }
`;

const NavWrapper = styled(Nav)`
  display: flex;
  flex-direction: column;

  @media (min-width: 992px) {
    flex-direction: row;
    align-items: center;
  }
`;

const ThemeButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  margin-left: 1rem;
  color: var(--text-color);

  @media (min-width: 820px) {
    margin-left:0;
    text-align: left;
    
  }

  @media (min-width: 768px) {
    margin-left:0;
    text-align: left;
    
  }

  @media (min-width: 430px) {
    margin-left:0;
    text-align: left;
    
  }
`;

const Header = ({ isExpanded, setIsExpanded }) => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { mode, toggleTheme } = useTheme();

  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleToggle = () => setIsExpanded(!isExpanded);
  const closeMenu = () => setIsExpanded(false);

  const currentLogo = isHome ? WhiteLogo : mode === "dark" ? WhiteLogo : MyLogo;


  return (
    <StyledNavbar expand="lg" expanded={isExpanded} $scrolled={scrolled}>
      <Container fluid>
        <Navbar.Brand as={Link} to="/" onClick={closeMenu}>
          <Logo src={currentLogo} alt="Santiago Montoya logo" />
        </Navbar.Brand>

        <StyledNavbarToggle onClick={handleToggle} aria-controls="navbar-nav">
  <MenuIcon>☰</MenuIcon>
</StyledNavbarToggle>

        <CollapsedNav id="navbar-nav">
          <NavWrapper className="ms-auto">
            <StyledNavLink as={Link} to="/" onClick={closeMenu}>Home</StyledNavLink>
            <StyledNavLink as={Link} to="/WhoIAm" onClick={closeMenu}>Who I Am</StyledNavLink>
            <StyledNavLink as={Link} to="/projects" onClick={closeMenu}>Projects</StyledNavLink>

            {!isHome && (
              <ThemeButton 
              onClick={toggleTheme}
                aria-label="Toggle dark/light mode"
                title="Toggle theme"
              >
                {mode === "dark" ? "🌙" : "☀️"}
              </ThemeButton>
            )}

            <div className="mt-3 mt-lg-0" aria-label="Book a meeting">
              <CalendarButton />
            </div>
          </NavWrapper>
        </CollapsedNav>
      </Container>
    </StyledNavbar>
  );
};

export default Header;


















