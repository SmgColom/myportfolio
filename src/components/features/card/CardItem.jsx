import React from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
  background: transparent;
  padding:0;
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-align: left;
  align-items: center;

  @media (max-width: 768px) {
    padding: 0 0rem;
    margin-top: 1rem;
    flex-direction: column;
    text-align: left;
    align-items: left;
  }
`;

const CardText = styled.div`
  flex: 1;
  text-align: left;

  @media (max-width: 768px) {
    padding-bottom: 1rem;
    text-align: left; 
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`;

const CardImage = styled.img`
  margin-left: 1rem;
  flex: 1;
  width: 100%;
  border-radius: 8px;
  object-fit: cover;
  max-height: 400px;

  @media (max-width: 768px) {
    margin-left: 0rem;
    width: 100%;
    max-width: 100%;
    max-height: 400px;
    align-items: flex-start;
  }
`;

const CardTitle = styled.h2`
  font-family: 'Work Sans', sans-serif;
  font-size: 1.8rem;
  font-weight: bold;
  color: var(--title-color);
`;

const CardContent = styled.p`
  font-family: 'Open Sans', sans-serif;
  font-size: 1rem;
  color: var(--text-color);
  line-height: 1.6;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const CardButton = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  background-color: var(--button-bg);
  color: var(--text-color);
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s ease-in-out;
`;

const CardItem = ({ id, title, description, image, links }) => {
  return (
    <CardWrapper id={id}>
      <CardText>
        <CardTitle>{title}</CardTitle>
        <CardContent>{description}</CardContent>
        <ButtonContainer>
          {links.map((link, index) => (
            <CardButton
              key={index}
              onClick={() => window.open(link.url, "_blank")}
            >
              {link.text}
            </CardButton>
          ))}
        </ButtonContainer>
      </CardText>
      {image && <CardImage src={image} alt={title} />}
    </CardWrapper>
  );
};

export default CardItem;


