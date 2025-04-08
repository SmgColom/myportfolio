import React from "react";
import styled from "styled-components";
import { FaQuoteLeft } from "react-icons/fa6";
import { FaQuoteRight } from "react-icons/fa";



const TestimonialSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  text-align: left;
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;


  const TestimonialAuthor= styled.h3`
    font-family: 'Open Sans', sans-serif;
    font-weight: bolder;
    font-size: 2rem;
    display: block;
    color: #232f45;

    @media (max-width: 430px) {
    font-size: 1.5rem;
  }
  `;

  const TestimonialText = styled.blockquote`
    display: block;
    color: #232f45;
    font-family: 'Open Sans', sans-serif;
    font-size: 2rem;

    @media (max-width: 430px) {
    font-size: 1rem;
  }

    `;

const Quotes = styled.span`
color: #232f45;
font-size: 1.5rem;

@media (max-width: 430px) {
    font-size: 1rem;
  }
`;


const CarouselItem = ({ name, text }) => {
  return (
    <TestimonialSection aria-label={`Testimonial by ${name}`}>
      <TestimonialAuthor>{name}</TestimonialAuthor>
      <TestimonialText>
        <Quotes><FaQuoteLeft /></Quotes>
        {text}
        <Quotes><FaQuoteRight /></Quotes>
      </TestimonialText>
    </TestimonialSection>
  );
};

export default CarouselItem;



