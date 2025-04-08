import React from "react";
import styled from "styled-components";

const AccordionWrapper = styled.section`
  background: transparent;
  padding: 0px 0px 20px 0px;
  box-sizing: border-box;
  width: 100%;
`;

const AccordionHeader = styled.div`
  display: flex;
  justify-content: space-between; // Título a la izquierda, botón a la derecha
  align-items: center;
  gap: 1rem;
  width: 100%;
  padding-bottom: 1rem;
`;


const AccordionTitle = styled.h3`
  flex-grow: 1;
  text-align: left;
  font-family: 'Work Sans', sans-serif;
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--title-color);
  cursor: pointer;
  margin: 0;
`;

const AccordionContent = styled.div`
  font-family: 'Open Sans', sans-serif;
  font-size: 1rem;
  color: var(--text-color);
  margin-top: 10px;
  text-align: left;
`;

const AccordionButton = styled.button`
  font-size: 1rem;
  background-color: transparent;
  color: var(--text-color);
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s ease-in-out;

  &:hover {
   color: var(--text-hover);
  }
`;

function AccordionItem({ id, title, children, onShow, isActive }) {
  return (
    <AccordionWrapper id={id}> {/* <-- Aquí va el id HTML */}
      <AccordionHeader>
        <AccordionTitle>{title}</AccordionTitle>
        <AccordionButton onClick={onShow}>
          {isActive ? "-" : "+"}
        </AccordionButton>
      </AccordionHeader>

      {isActive && (
        <AccordionContent>
          <p dangerouslySetInnerHTML={{ __html: children }} />
        </AccordionContent>
      )}
    </AccordionWrapper>
  );
}

export default AccordionItem;
