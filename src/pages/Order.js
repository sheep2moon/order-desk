import React from "react";
import styled from "styled-components";
import RangeInput from "../components/Customize/RangeInput";
import Button from "../components/Button";
import SelectColor from "../components/Customize/SelectColor";

const Customize = () => {
  return (
    <CustomizeContainer>
      <h1>Stwórz własne biurko</h1>
      <FormContainer>
        <InputInfo>
          <label htmlFor="length">Dłguość</label>
          <span>120cm</span>
        </InputInfo>
        <RangeInput name="length" min="80" max="240" step="10" />
        <InputInfo>
          <label htmlFor="length">Szerokość</label>
          <span>100cm</span>
        </InputInfo>
        <RangeInput name="length" min="50" max="160" step="5" />
        <SelectColor />
        <Summary>
          <p>Cena: 350zł</p>
          <Button type="submit">Zamów</Button>
        </Summary>
      </FormContainer>
    </CustomizeContainer>
  );
};

export default Customize;

const CustomizeContainer = styled.main`
  margin: 4rem auto 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ theme }) => theme.secondary};
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 400px;
  border: 1px solid #ffffff20;
  padding: 1rem;
  background-color: ${({ theme }) => theme.primary};
`;

const InputInfo = styled.div`
  width: 100%;
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
`;
const Summary = styled.div`
  margin-top: 2rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
