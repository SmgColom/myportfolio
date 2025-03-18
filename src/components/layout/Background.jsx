import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "../../styles/index.css";
import Video from "/src/assets/Video.mp4"; 

const Background = ({ children }) => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const isWhoIAm = location.pathname.toLowerCase() === "/whoiam";
  const isProjects = location.pathname.toLowerCase() === "/projects";

  // ✅ Leer el valor desde localStorage pero NO lo maneja
  const lightmode = localStorage.getItem("lightmode") === "true";

  useEffect(() => {
    if (isHome) {
      document.body.classList.remove("lightmode", "darkmode");
    } else {
      if (lightmode) {
        document.body.classList.add("lightmode");
        document.body.classList.remove("darkmode");
      } else {
        document.body.classList.add("darkmode");
        document.body.classList.remove("lightmode");
      }
    }
  }, [lightmode, location.pathname]); // ✅ Dependencias correctas

  return (
    <div className={`background-container ${isHome ? "video-bg" : ""}`}>
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



