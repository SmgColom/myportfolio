import React from "react";
import { useLocation } from "react-router-dom";
import "../../styles/index.css";
import Video from "/src/assets/Video.mp4"; 

const Background = ({ children }) => {
  const location = useLocation();

  // Determina el fondo basado en la ruta actual
  const isHome = location.pathname === "/";
  const isWhoIAm = location.pathname === "/whoiam";
  const isProjects = location.pathname === "/projects";

  return (
    <div className={`background-container ${isHome ? "video-bg" : "gradient-bg"}`}>
      {isHome && (
        <video autoPlay loop muted playsInline className="background-video">
          <source src={Video} type="video/mp4" />
          Tu navegador no soporta videos en HTML5.
        </video>
      )}
      <div className="overlay">{children}</div>
    </div>
  );
};

export default Background;