import React from "react";
import styled from "styled-components";

const SelectColor = () => {
  const colors = [
    {
      name: "grafitowy",
      value: "#303845",
    },
    {
      name: "czarny",
      value: "#010101",
    },
    {
      name: "jasny szary",
      value: "#a4a4a4",
    },
  ];
  return (
    <StyledSelect>
      <p>Kolor</p>
      <OptionsWrap>
        {colors.map((color) => (
          <Option key={color.value} color={color.value} />
        ))}
      </OptionsWrap>
    </StyledSelect>
  );
};

export default SelectColor;

const StyledSelect = styled.div`
  margin: 1rem 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const OptionsWrap = styled.div`
  display: flex;
  column-gap: 0.25rem;
`;
const Option = styled.div`
  width: 2rem;
  height: 2rem;
  background: ${({ color }) => color};
  border: 2px solid #fff;
`;
