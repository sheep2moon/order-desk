import React from "react";
import styled from "styled-components";
import RouterLink from "../RouterLink";

const NavLinks = () => {
  return (
    <NavLinksList>
      <NavLinkWrap>
        <RouterLink to="/">home</RouterLink>
      </NavLinkWrap>
      <NavLinkWrap>
        <RouterLink to="/">about</RouterLink>
      </NavLinkWrap>
      <NavLinkWrap>
        <RouterLink primary to="/">
          contact
        </RouterLink>
      </NavLinkWrap>
    </NavLinksList>
  );
};

export default NavLinks;

const NavLinksList = styled.ul`
  list-style: none;
  display: flex;
`;
const NavLinkWrap = styled.li`
  padding: 0.25rem;
`;
