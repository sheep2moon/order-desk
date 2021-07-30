import React from "react";
import styled from "styled-components";
import Logo from "./Logo";
import NavHamburger from "./NavHamburger";
import NavLinks from "./NavLinks";

const Navbar = () => {
  return (
    <NavContainer>
      <NavWrap>
        <Logo>Logo</Logo>
        <NavLinks />
        <NavHamburger />
      </NavWrap>
    </NavContainer>
  );
};

export default Navbar;

const NavContainer = styled.div`
  width: 100%;
  height: 4rem;
  position: fixed;
  box-shadow: 0 1px 2px ${({ theme }) => theme.primary};
`;
const NavWrap = styled.nav`
  display: flex;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  justify-content: space-between;
`;
