import { useState, useEffect } from "react";
import styled from "styled-components";
import AccordionItem from "./AccordionItem";
import { useLocation } from "react-router-dom";

// ✅ Styled container
const AccordionContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  justify-content: center;
  padding: 4rem 2rem;
  width: 100%;

  @media (min-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 0rem;
  }

  @media (min-width: 430px) {
    grid-template-columns: 1fr;
    padding: 0 0rem;
  }
`;

function AccordionList({ panels }) {
  const location = useLocation();
  const [activeIndex, setActiveIndex] = useState(panels[0]?.id || null);

  // ✅ Maneja cambio de hash para abrir el acordeón correcto
  useEffect(() => {
    if (location.hash) {
      const hashId = location.hash.replace("#", "");
      setActiveIndex(hashId);

      // ✅ Scroll al elemento con el hash
      const element = document.getElementById(hashId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 300);
      }
    }
  }, [location.hash, panels]);

  const handleShow = (id) => {
    setActiveIndex(activeIndex === id ? null : id);
  };

  return (
    <AccordionContainer>
      {panels.map((panel) => (
        <AccordionItem
          key={panel.id}
          id={panel.id} // ✅ ID necesario para el hash en el DOM
          title={panel.title}
          onShow={() => handleShow(panel.id)}
          isActive={activeIndex === panel.id}
        >
          {panel.content}
        </AccordionItem>
      ))}
    </AccordionContainer>
  );
}

export default AccordionList;



