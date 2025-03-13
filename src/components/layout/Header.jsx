import Container from "react-bootstrap/Container";
import { Navbar, Nav } from "react-bootstrap";
import WhiteLogo from "../../assets/WhiteLogo.png";
import { Link } from "react-router-dom";
import CalendarButton from "../common/CalendarButton";


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
          </Nav>
        </Navbar.Collapse>  
      </Container>
    </Navbar>
  );
};

export default Header;
