import Container from "react-bootstrap/Container";
import { Navbar, Nav } from "react-bootstrap";
import WhiteLogo from "../../assets/WhiteLogo.png";
import { Link } from "react-router-dom";
import CalendarButton from "../common/CalendarButton";
import Inlogo from "../../assets/Inlogo.png";

const Header = () => {
  return (
    <Navbar expand="lg" className="custom-navbar" bg="transparent" variant="dark">

      <Container>
        <Navbar.Brand as={Link} to="/">
          <img className="logo"src={WhiteLogo} alt="WhiteLogo" />
        </Navbar.Brand>
        
        {/* Agregamos el botón de colapsado para móviles */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Menú colapsable */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/WhoIAm">Who I Am</Nav.Link>
            <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
            <CalendarButton></CalendarButton>
              <Navbar.Brand
              href="https://www.linkedin.com/in/santiago-montoya-gomez-51912a79"
              target="_blank"
              rel="noopener noreferrer">
              <img src={Inlogo} alt="Logo" style={{ height: "50px", paddingLeft: "10px", cursor: "pointer" }} />
              </Navbar.Brand>
          </Nav>
        </Navbar.Collapse>  
      </Container>
    </Navbar>
  );
};

export default Header;
