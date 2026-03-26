import React, { useState } from "react";
import styled from "styled-components";
import Joi from "joi-browser";
import { BsWhatsapp } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { Helmet } from "react-helmet-async";

const FullWidthWrapper = styled.div`
  width: 100%;
  background: linear-gradient(180deg, #f8f9fa 10%, #e9ecef 100%);
`;

const Wrapper = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 2rem;
  align-items: flex-start;
  text-align: left;
  min-height: auto;
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 430px) {
    flex-direction: column;
    align-items: center;
    
  }

`;

const FormColumn = styled.div`
  flex: 1;
  text-align: left;
  
 
  @media (max-width: 430px) {
  display: flex;
  flex-direction: column;
  
}
  
`;

const FormTitle = styled.h2`
  font-family: 'Work Sans', sans-serif;
  font-weight: bolder;
  color: #232f45;
  font-size: clamp(2rem, 3vw, 2em);
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  font-family: 'Open Sans', sans-serif;
`;

const TextArea = styled.textarea`
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  resize: vertical;
`;

const SubmitButton = styled.button`
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

const Modal = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  position: fixed;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background: white;
  color: black;
  padding: 2rem;
  border-radius: 10px;
  text-align: center;
  font-family: 'Work Sans', sans-serif;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
`;

const CloseButton = styled.button`
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

const InfoBox = styled.div`
  flex: 1;
  padding-top: 2rem;
  display: flex;
  align-items: right;
  text-align: right;
  display: flex;
  flex-direction: column;
  gap: 2.7rem;
  font-family: 'Work Sans', sans-serif;
  color: #232f45;
  justify-content: space-between;

  @media (max-width: 430px) {

text-align: center;
}

  h3 {
    font-weight: bold;

  }

  p {
    margin: 0;
    font-family: 'Open Sans', sans-serif;
  }


`;

const Icon = styled.div`
  color: #232f45;
  text-align: right;
  font-size: 2rem;

  &:hover {
    color: #66d9e0;
  }
  @media (max-width: 430px) {

text-align: center;
}
`;

const GoogleForm = () => {
  const [formData, setFormData] = useState({ firstName: "", lastName: "", phone: "", email: "", company: "", message: "" });
  const [errors, setErrors] = useState({});
  const [showModal, setShowModal] = useState(false);

  const schema = Joi.object({
    firstName: Joi.string().min(2).max(50).required(),
    lastName: Joi.string().min(2).max(50).required(),
    phone: Joi.string().regex(/^[0-9+\-()\s]{7,15}$/).required(),
    email: Joi.string().email({ tlds: { allow: false } }).required(),
    company: Joi.string().allow('').max(50),
    message: Joi.string().min(5).max(500).required(),
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const { error } = schema.validate(formData, { abortEarly: false });
    if (!error) return null;
    const validationErrors = {};
    error.details.forEach((err) => {
      validationErrors[err.path[0]] = err.message;
    });
    return validationErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors || {});
    if (validationErrors) return;

    const formPayload = new FormData();
    formPayload.append("entry.399147502", formData.firstName);
    formPayload.append("entry.1038662462", formData.lastName);
    formPayload.append("entry.1852247219", formData.phone);
    formPayload.append("entry.524062966", formData.email);
    formPayload.append("entry.1300937957", formData.company);
    formPayload.append("entry.304608279", formData.message);

    try {
      await fetch("https://docs.google.com/forms/d/e/1FAIpQLSekeuK-LASwCO4ZWX1knlMsnNKrx5UiOCRTp92n9i1uGXVBKA/formResponse", {
        method: "POST",
        mode: "no-cors",
        body: formPayload,
      });
      setShowModal(true);
      setFormData({ firstName: "", lastName: "", phone: "", email: "", company: "", message: "" });
    } catch (error) {
      console.error("Submission error:", error);
    }
  };

  return (
    <FullWidthWrapper>
        <Helmet>
        <title>Contáctame | Santiago Montoya | Desarrollador Fullstack</title>
        <meta name="description" content="Envía un mensaje a Santiago Montoya para discutir tu próximo proyecto o sitio web. Ubicado en Medellín." />
        <link rel="canonical" href="https://santiagomontoya.com.au/ContactMe" />
      </Helmet>
      <Wrapper>
        <FormColumn>
          <FormTitle>Contáctame</FormTitle>
          <StyledForm onSubmit={handleSubmit} noValidate>
          <label htmlFor="firstName" hidden>Name</label>
            <Input id="firstName" name="firstName" placeholder="Nombre" autoComplete="given-name" value={formData.firstName} onChange={handleChange} />
            {errors.firstName && <small style={{ color: 'red' }}>{errors.firstName}</small>}

            <label htmlFor="lastName" hidden>Last Name</label>
            <Input id="lastName" name="lastName" placeholder="Apellido" autoComplete="family-name" value={formData.lastName} onChange={handleChange} />
            {errors.lastName && <small style={{ color: 'red' }}>{errors.lastName}</small>}

            <label htmlFor="phone" hidden>Phone</label>
            <Input id="phone" name="phone" placeholder="Teléfono" autoComplete="tel" value={formData.phone} onChange={handleChange} />
            {errors.phone && <small style={{ color: 'red' }}>{errors.phone}</small>}

            <label htmlFor="email" hidden>Email</label>
            <Input id="email" name="email" type="email" placeholder="Email" autoComplete="email" value={formData.email} onChange={handleChange} />
            {errors.email && <small style={{ color: 'red' }}>{errors.email}</small>}

            <label htmlFor="company" hidden>Company</label>
            <Input id="company" name="company" placeholder="Compañía" value={formData.company} onChange={handleChange} />

            <label htmlFor="message" hidden>Message</label>
            <TextArea id="message" name="message" rows="5" placeholder="Mensaje" value={formData.message} onChange={handleChange} />
            {errors.message && <small style={{ color: 'red' }}>{errors.message}</small>}

            <SubmitButton type="submit" aria-label="Send message">Enviar</SubmitButton>
          </StyledForm>
        </FormColumn>

        


<InfoBox>
  <div>
    <a
      href="https://wa.me/61432318142?text=Hello!%20I'd%20like%20to%20talk%20about%20a%20new%20web%20development%20project."
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon><BsWhatsapp /></Icon>
    </a>
    <h3>Chatéame</h3>
    <p>+57 3157274796</p>
  </div>

  <div>
    <a
      href="mailto:smontoya1985@gmail.com?subject=New%20Web%20Development%20Project&body=Hello!%20I'd%20like%20to%20talk%20about%20a%20new%20web%20development%20project."
    >
      <Icon><MdEmail /></Icon>
    </a>
    <h3>Escríbeme</h3>
    <p>smontoya1985@gmail.com</p>
  </div>

  <div>
    <Icon><IoLocationOutline /></Icon>
    <h3>Ubicación</h3>
    <p>Medellín, Colombia</p>
  </div>
</InfoBox>
       

        {showModal && (
          <Modal>
            <ModalContent>
              <h3>Gracias por contactarme, {formData.firstName || ""}!</h3>
              <p>Estaré en contacto lo antes posible!</p>
              <CloseButton onClick={() => setShowModal(false)}>Cerrar</CloseButton>
            </ModalContent>
          </Modal>
        )}
      </Wrapper>
    </FullWidthWrapper>
  );
};

export default GoogleForm;






