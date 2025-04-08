import React, { useState } from "react";
import styled from "styled-components";
import Joi from "joi-browser";
import { BsWhatsapp } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";

const FullWidthWrapper = styled.div`
  width: 100%;
  background: linear-gradient(180deg, #f8f9fa 10%, #e9ecef 100%);
`;

const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  gap: 4rem;
  padding: 4rem 2rem;
  max-width: 1000px;
  margin: 0 auto;

  @media (max-width: 768px) {
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  text-align: center;
}

  @media (max-width: 430px) {
    flex-direction: column;
    align-items: center;
    gap: 3rem;
  }

`;

const FormColumn = styled.div`
  flex: 1;

  @media (max-width: 768px) {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center; /* 👈 esto faltaba */
}

  @media (max-width: 430px) {
  display: flex;
  flex-direction: column;
  align-items: center;
}
  
`;

const InfoColumn = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  @media (max-width: 1024px) {
    justify-content: center;
    align-items: center;
    padding-top: 0;
  }

  @media (max-width: 430px) {
    align-items: center;
    justify-content: center;
    text-align: center;
    padding-top: 2rem;
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
  display: flex;
  flex-direction: column;
  gap: 2rem;
  font-family: 'Work Sans', sans-serif;
  color: #232f45;
  align-items: center;
  justify-content: center;

  h3 {
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  p {
    margin: 0;
    font-family: 'Open Sans', sans-serif;
  }

  @media (max-width: 1024px) {
    max-width: 80%;
  }

  @media (max-width: 768px) {
    align-items: center;
  }

  @media (max-width: 430px) {
    align-items: center;
    max-width: 90%;
    margin: 0 auto;
  }
`;

const Icon = styled.div`
  color: #232f45;
  text-align: center;
  font-size: 2rem;

  &:hover {
    color: #66d9e0;
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
      <Wrapper>
        <FormColumn>
          <FormTitle>Contact Me</FormTitle>
          <StyledForm onSubmit={handleSubmit} noValidate>
            <Input name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} />
            {errors.firstName && <small style={{ color: 'red' }}>{errors.firstName}</small>}
            <Input name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} />
            {errors.lastName && <small style={{ color: 'red' }}>{errors.lastName}</small>}
            <Input name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} />
            {errors.phone && <small style={{ color: 'red' }}>{errors.phone}</small>}
            <Input name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} />
            {errors.email && <small style={{ color: 'red' }}>{errors.email}</small>}
            <Input name="company" placeholder="Company" value={formData.company} onChange={handleChange} />
            <TextArea name="message" rows="5" placeholder="Message" value={formData.message} onChange={handleChange} />
            {errors.message && <small style={{ color: 'red' }}>{errors.message}</small>}
            <SubmitButton type="submit">Send</SubmitButton>
          </StyledForm>
        </FormColumn>

        <InfoColumn>


<InfoBox>
  <div>
    <a
      href="https://wa.me/61432318142?text=Hello!%20I'd%20like%20to%20talk%20about%20a%20new%20web%20development%20project."
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon><BsWhatsapp /></Icon>
    </a>
    <h3>Text Me</h3>
    <p>+57 3157274796</p>
    <p>+61 432318142</p>
  </div>

  <div>
    <a
      href="mailto:smontoya1985@gmail.com?subject=New%20Web%20Development%20Project&body=Hello!%20I'd%20like%20to%20talk%20about%20a%20new%20web%20development%20project."
    >
      <Icon><MdEmail /></Icon>
    </a>
    <h3>Email Me</h3>
    <p>smontoya1985@gmail.com</p>
  </div>

  <div>
    <Icon><IoLocationOutline /></Icon>
    <h3>Location</h3>
    <p>15 Clifton Street, Prahan, Melbourne, Australia</p>
    <p>Calle 21 Sur # 41 - 117, Envigado, Antioquia, Colombia</p>
  </div>
</InfoBox>
        </InfoColumn>

        {showModal && (
          <Modal>
            <ModalContent>
              <h3>Thank you for contacting me, {formData.firstName || ""}!</h3>
              <p>I’ll be in touch as soon as possible!</p>
              <CloseButton onClick={() => setShowModal(false)}>Close</CloseButton>
            </ModalContent>
          </Modal>
        )}
      </Wrapper>
    </FullWidthWrapper>
  );
};

export default GoogleForm;






