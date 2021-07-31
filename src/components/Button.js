import React from "react";
import styled from "styled-components";

const Button = ({ primary, big, children, ...rest }) => {
  return (
    <StyledButton primary={primary} big={big} {...rest}>
      {children}
    </StyledButton>
  );
};

export default Button;

const StyledButton = styled.button`
  position: relative;
  border: ${({ primary, theme }) =>
    primary ? `1px solid ${theme.secondary}` : "none"};
  background-color: ${({ primary, theme }) =>
    primary ? theme.primary : theme.secondary};
  padding: ${({ big }) => (big ? "1rem 1.5rem" : "0.5rem 1rem")};
  color: ${({ primary, theme }) => (primary ? theme.secondary : theme.primary)};
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  font-size: 1.2rem;
  :hover {
    transition: all 0.2s ease-in-out;
    opacity: 0.9;
    box-shadow: ${({ primary, theme }) =>
      primary ? `0 0 3px ${theme.primary}` : `0 0 3px ${theme.secondary}`};
    color: ${({ primary, theme }) =>
      primary ? theme.primary : theme.secondary};
    :before {
      left: 0;
    }
  }
  :before {
    content: "";
    position: absolute;
    transition: all 0.2s ease-in-out;
    top: 0;
    left: 100%;
    right: 0;
    bottom: 0;
    z-index: -1;
    background: ${({ primary, theme }) =>
      primary ? theme.secondary : theme.detail};
  }
`;
