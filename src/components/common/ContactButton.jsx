import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom"; // ✅ Importa useNavigate

const ButtonWrapper = styled.div``;

const Button = styled.div`
  font-family: 'Work Sans', sans-serif;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 10px;
  background-color: var(--button-bg);
  border-color: var(--border-color);
  color: var(--text-color);
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  display: inline-block;
  text-decoration: none;
  flex-shrink: 0;
  overflow: hidden;
  margin: 0 auto;

  &:hover {
    opacity: 0.9;
  }
`;

function ContactButton() {
  const navigate = useNavigate(); // ✅ Inicializa useNavigate

  const handleClick = () => {
    navigate("/ContactMe"); // ✅ Redirige a la ruta del formulario
  };

  return (
    <ButtonWrapper>
      <Button onClick={handleClick}>📧 <strong>Contact Me</strong></Button>
    </ButtonWrapper>
  );
}

export default ContactButton;

