import React from "react";
import styled from "styled-components";

const RangeInput = ({ ...rest }) => {
  return <StyledRangeInput type="range" {...rest} />;
};

export default RangeInput;

const StyledRangeInput = styled.input`
  width: 100%;
  background: transparent;
  -webkit-appearance: none;
  ::-webkit-slider-runnable-track {
    -webkit-appearance: none;
    border-radius: 5px;
    height: 18px;
    background-color: ${({ theme }) => theme.secondary};
  }
  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 30px;
    width: 30px;
    border-radius: 50%;
    margin-top: -5px;
    background-color: ${({ theme }) => theme.detail};
  }
`;
