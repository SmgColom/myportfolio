import React from "react";
import "/src/styles/Backgroundvideo.css";
import videoSrc from "/src/assets/Video.mp4"; // Importando correctamente

const Background = ({ children }) => {
  return (
    <div className="background">
      <video autoPlay loop muted playsInline className="video-bg">
        <source src={videoSrc} type="video/mp4" />
        Tu navegador no soporta videos en HTML5.
      </video>
      <div className="overlay">{children}</div>
    </div>
  );
};

export default Background;



