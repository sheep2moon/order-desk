import React, { useEffect, useState } from "react";
import styled from "styled-components";
import RangeInput from "../components/Customize/RangeInput";
import Button from "../components/Button";
import SelectColor from "../components/Customize/SelectColor";
import infoImg from "../assets/sizeInfo.svg";

const Customize = () => {
  const [price, setPrice] = useState(0);
  const [length, setLength] = useState(180);
  const [width, setWidth] = useState(80);
  const [thickness, setThickness] = useState(4);
  const [color, setColor] = useState("#000");

  useEffect(() => {
    const p = ((length * width) / 100) * 3 + thickness * 20;
    setPrice(parseInt(p));
  }, [length, width, thickness]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <CustomizeContainer>
      <h1>Stwórz własne biurko</h1>
      <Content>
        <InfoContainer>
          <img src={infoImg} alt="" />
        </InfoContainer>
        <FormContainer onSubmit={(e) => handleSubmit(e)}>
          <InputInfo>
            <label htmlFor="length">Długość</label>
            <span>{length}cm</span>
          </InputInfo>
          <RangeInput
            onChange={(e) => setLength(e.target.value)}
            name="length"
            min="80"
            max="240"
            step="10"
            value={length}
          />
          <InputInfo>
            <label htmlFor="width">Szerokość</label>
            <span>{width}cm</span>
          </InputInfo>
          <RangeInput
            onChange={(e) => setWidth(e.target.value)}
            name="width"
            min="50"
            max="160"
            step="5"
            value={width}
          />
          <InputInfo>
            <label htmlFor="thickness">Grubość</label>
            <span>{thickness}cm</span>
          </InputInfo>
          <RangeInput
            onChange={(e) => setThickness(e.target.value)}
            name="thickness"
            min="2"
            max="10"
            step="1"
            value={thickness}
          />
          <SelectColor setColor={setColor} color={color} />

          <Summary>
            <p>Cena: {price.toFixed(2)} zł</p>
            <Button type="submit">Zamów</Button>
          </Summary>
        </FormContainer>
      </Content>
    </CustomizeContainer>
  );
};

export default Customize;

const CustomizeContainer = styled.main`
  margin: 4rem auto 0 auto;
  display: flex;
  min-height: calc(100vh - 4rem);
  max-width: 1400px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.secondary};
  background-color: ${({ theme }) => theme.primary};
  > h1 {
    font-size: 3em;
    margin-bottom: 2em;
    padding: 0.25rem;
    text-align: center;
  }
`;
const Content = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 1000px) {
    flex-direction: column;
    row-gap: 2rem;
  }
`;
const InfoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  > img {
    padding: 2rem;
    width: 100%;
    max-width: 700px;
    @media screen and (max-width: 768px) {
      padding: 0.5rem;
    }
  }
`;
const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 700px;
  box-shadow: 0 0 5px 5px #00000040;
  margin: 1rem 1rem 2rem 1rem;
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
  > p {
    font-size: 1.4rem;
  }
`;
