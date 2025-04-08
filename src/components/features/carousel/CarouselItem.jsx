import React from "react";
import styled from "styled-components";
import { FaQuoteLeft } from "react-icons/fa6";
import { FaQuoteRight } from "react-icons/fa";



const HeroSectionThree = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  text-align: left;
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;


  const TestimonialTitle = styled.div`
    font-family: 'Open Sans', sans-serif;
    font-weight: bolder;
    font-size: 2rem;
    display: block;
    color: #232f45;
  `;

  const TestimonialText = styled.div`
    display: block;
    color: #232f45;
    font-family: 'Open Sans', sans-serif;
    font-size: 2rem;
    `;

const Quotes = styled.div`
color: #232f45;
`;


const CarouselItem = ({ name, text }) => {
  return (
   
      <HeroSectionThree>
      <TestimonialTitle>{name}</TestimonialTitle>
      <Quotes><FaQuoteLeft /></Quotes>
      <TestimonialText>{text}</TestimonialText>
      <Quotes><FaQuoteRight /></Quotes>
      </HeroSectionThree>
      
  );
};

export default CarouselItem;



