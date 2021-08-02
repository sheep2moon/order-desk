import React from "react";
import styled from "styled-components";
import Button from "../components/Button";
import TextInput from "../components/TextInput";

const Contact = () => {
  return (
    <ContactContainer>
      <h1>Skontaktuj się z nami.</h1>
      <ContactForm>
        <label htmlFor="email">E-mail</label>
        <TextInput name="email" type="text" placeholder="e-mail" />
        <label htmlFor="title">Tytuł</label>
        <TextInput type="text" placeholder="tytuł" />
        <label htmlFor="message">Treść</label>
        <textarea name="message" id="" cols="30" rows="10"></textarea>
        <Button>Wyślij</Button>
      </ContactForm>
    </ContactContainer>
  );
};

export default Contact;

const ContactContainer = styled.div`
  margin-top: 4rem;
  color: ${({ theme }) => theme.secondary};
  display: flex;
  flex-direction: column;
  align-items: center;
  > h1 {
    margin: 1rem 0;
    text-align: center;
  }
`;

const ContactForm = styled.form`
  width: 100%;
  padding: 1rem;
  max-width: 480px;
  display: flex;
  flex-direction: column;
  > label {
    margin-top: 0.5rem;
  }
  > textarea {
    margin-bottom: 1rem;
  }
`;
