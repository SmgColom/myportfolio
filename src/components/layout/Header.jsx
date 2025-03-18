import Container from "react-bootstrap/Container";
import { Navbar, Nav } from "react-bootstrap";
import WhiteLogo from "../../assets/WhiteLogo.png"; // Logo para Light Mode
import MyLogo from "../../assets/MyLogo.png"; // Logo para Dark Mode
import { Link, useLocation } from "react-router-dom"; // Importamos useLocation
import CalendarButton from "../common/CalendarButton";
import { useState, useEffect } from "react";

const Header = () => {
  const location = useLocation(); // Obtiene la ruta actual
  const isHome = location.pathname === "/"; // Verifica si es Home
  const isWhoIAm = location.pathname === "/WhoIAm";
  const isProjects = location.pathname === "/projects";

  // ✅ Configurar Dark Mode por defecto al cargar la aplicación
  const getInitialMode = () => {
    const savedMode = localStorage.getItem("lightmode");
    if (savedMode === null) {
      localStorage.setItem("lightmode", "false"); // Dark Mode por defecto
      return false;
    }
    return savedMode === "true";
  };

  const [lightMode, setLightMode] = useState(getInitialMode);

  // ✅ Aplicar el modo correctamente al cargar y cambiar de página
  useEffect(() => {
    if (!isHome) {
      if (lightMode) {
        document.body.classList.add("lightmode");
        document.body.classList.remove("darkmode");
      } else {
        document.body.classList.add("darkmode");
        document.body.classList.remove("lightmode");
      }
    } else {
      document.body.classList.remove("lightmode", "darkmode"); // Home sin cambios
    }
  }, [lightMode, location.pathname]);

  // ✅ Sincronizar el estado con `localStorage` al cambiar de página
  useEffect(() => {
    const savedMode = localStorage.getItem("lightmode") === "true";
    if (savedMode !== lightMode) {
      setLightMode(savedMode);
    }
  }, [location.pathname]);

  // ✅ Función para alternar el modo
  const toggleLightMode = () => {
    if (isHome) return; // Evita cambios en Home
    const newMode = !lightMode;
    setLightMode(newMode);
    localStorage.setItem("lightmode", newMode.toString()); // Guarda en localStorage
  };

  return (
    <Navbar expand="lg" className="custom-navbar" bg="transparent" variant="dark">
      <Container>
        {/* Logo dinámico según el tema */}
        <Navbar.Brand as={Link} to="/">
          <img 
            className="logo"
            src={lightMode && !isHome ? MyLogo : WhiteLogo} // Solo cambia si NO está en Home
            alt="Logo"
            key={lightMode} // Forzar re-render
          />
        </Navbar.Brand>

        {/* ✅ Solo mostrar el botón en WhoIAm y Projects */}
        {(isWhoIAm || isProjects) && (
          <button onClick={toggleLightMode} className="mode-button">
            {lightMode ? "🌙" : "☀️"}
          </button>
        )}

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/WhoIAm">Who I Am</Nav.Link>
            <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
            <CalendarButton />
          </Nav>
        </Navbar.Collapse>  
      </Container>
    </Navbar>
  );
};

export default Header;









