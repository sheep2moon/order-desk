import React from "react";
import styled from "styled-components";

const TextInput = ({ primary, ...rest }) => {
  return <StyledInput primary={primary ? 1 : 0} {...rest} />;
};

export default TextInput;

const StyledInput = styled.input`
  border: ${({ primary, theme }) =>
    primary ? `1px solid ${theme.secondary}` : "none"};
  padding: 1rem 0.5rem;
  outline: none;
  background-color: ${({ theme, primary }) =>
    primary ? theme.primary : theme.secondary};
  color: ${({ theme, primary }) => (primary ? theme.secondary : theme.primary)};
`;
