import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom"; // ✅ Importa useNavigate

const ButtonWrapper = styled.button`
border: none;
background-color: transparent;
`;

const Button = styled.button`
 background-color: var(--button-bg);
  color: var(--button-text);
  padding: 0.7rem 1.2rem;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: 'Work Sans', sans-serif;
  cursor: pointer;

  svg {
    font-size: 1.2rem; /* ajusta el tamaño del icono */
    vertical-align: middle;
  }
`;

function ContactButton() {
  const navigate = useNavigate(); // ✅ Inicializa useNavigate

  const handleClick = () => {
    navigate("/ContactMe"); // ✅ Redirige a la ruta del formulario
  };

  return (
    <ButtonWrapper>
      <Button onClick={handleClick} aria-label="Navigate to Contact Form">📧 <strong>Contact Me</strong></Button>
    </ButtonWrapper>
  );
}

export default ContactButton;

