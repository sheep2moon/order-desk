import React from "react";
import styled from "styled-components";
import logoImg from "../../assets/logo.svg";

const Logo = () => {
  return (
    <LogoContainer>
      <img src={logoImg} alt="company logo" />
      <h1>CompanyName</h1>
    </LogoContainer>
  );
};

export default Logo;

const LogoContainer = styled.div`
  display: flex;
  > img {
    width: 2rem;
  }
  > h1 {
    margin-left: 1rem;
  }
`;
