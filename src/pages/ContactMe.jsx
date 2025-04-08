import styled from "styled-components";
import ContactForm from "../components/common/ContactForm";


const CardContactTitle = styled.div`
  font-family: 'Work Sans', sans-serif;
  text-align: right;
  color: #232f45;
  font-size: 1.5rem;
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  background-color: rgba(0, 0, 0, 0.05); // solo para hacer visible el bloque

  @media (max-width: 768px) {
    margin-left: 0rem;
    width: 100%;
    max-width: 100%;
    max-height: 400px;
    align-items: flex-start;
  }
`;



const ContactMe = () => {
    return (
        <>
      <ContactForm />
      </>
    );
  };
  
  export default ContactMe;
  