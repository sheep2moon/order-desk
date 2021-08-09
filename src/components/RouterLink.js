import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const RouterLink = ({ primary, big, children, ...rest }) => {
  return (
    <StyledLink primary={primary} big={big} {...rest}>
      {children}
    </StyledLink>
  );
};

export default RouterLink;

const StyledLink = styled(Link)`
  display: inline-block;
  padding: ${({ big }) => (big ? "1rem 2rem" : ".5rem 1rem")};
  border: ${({ primary, theme }) =>
    primary ? "none" : `1px solid ${theme.primary}`};
  text-decoration: none;
  background: ${({ primary, theme }) =>
    primary ? theme.primary : theme.secondary};
  color: ${({ primary, theme }) => (primary ? theme.secondary : theme.primary)};
  text-align: center;
  transition: all 0.2s ease-in-out;
  :hover {
    transition: all 0.2s ease-in-out;
    box-shadow: ${({ primary, theme }) =>
      primary ? `0 1px 2px ${theme.secondary}` : `0 1px 2px ${theme.primary}`};
  }
`;
