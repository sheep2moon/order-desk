import React from "react";
import styled from "styled-components";
import logoImg from "../../assets/logo.svg";
import { FiCodepen } from "react-icons/fi";

const Logo = () => {
  return (
    <LogoContainer>
      <LogoIcon />
      <h1>Cudesk</h1>
    </LogoContainer>
  );
};

export default Logo;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 1rem;
  > h1 {
    margin-left: 1rem;
  }
`;

const LogoIcon = styled(FiCodepen)`
  font-size: 2.4rem;
  color: ${({ theme }) => theme.primary};
`;
