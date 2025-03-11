import React from "react";
import "/src/styles/index.css";


function AccordionItem({ title, children, onShow, isActive, className = "" }) {
  return (
    <section className={`card ${className}`}>
      {/* Título del Panel (Hace toggle al hacer clic) */}
      <h3 className="card-title" onClick={onShow}>
        {title}
      </h3>

      {/* Contenido del Panel (Solo se muestra si `isActive` es true) */}
      {isActive && (
        <div className="card-content">
          <p dangerouslySetInnerHTML={{ __html: children }} />
          <button className="card-button" onClick={onShow}>
            -
          </button>
        </div>
      )}

      {/* Botón para abrir el panel (Solo si `isActive` es false) */}
      {!isActive && (
        <button className="card-button" onClick={onShow}>
          +
        </button>
      )}
    </section>
  );
}

export default AccordionItem;
