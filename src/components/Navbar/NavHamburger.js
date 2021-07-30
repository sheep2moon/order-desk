import React from "react";
import styled from "styled-components";

const NavHamburger = () => {
  return (
    <HamburgerContainer>
      <span></span>
      <span></span>
      <span></span>
    </HamburgerContainer>
  );
};

export default NavHamburger;

const HamburgerContainer = styled.div`
  position: relative;
  width: 2.2rem;
  height: 1.45rem;
  display: flex;
  align-items: center;
  > span {
    width: 2.2rem;
    height: 0.25rem;
    background: ${({ theme }) => theme.primary};
    position: absolute;
    :nth-child(1) {
      top: 0;
    }
    :nth-child(2) {
      top: 0.6rem;
    }
    :nth-child(3) {
      top: 1.2rem;
    }
  }
`;
