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

  return (
    <CustomizeContainer>
      <h1>Stwórz własne biurko</h1>
      <Content>
        <InfoContainer>
          <img src={infoImg} alt="" />
        </InfoContainer>
        <FormContainer>
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
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.secondary};
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
  width: 50%;
  display: flex;
  justify-content: center;
  > img {
    max-width: 500px;
  }
`;
const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  max-width: 500px;
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
