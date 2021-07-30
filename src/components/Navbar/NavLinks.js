import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavLinks = () => {
  const [activeLink, setActiveLink] = useState(0);
  const links = [
    {
      to: "/",
      name: "Strona Główna",
    },
    {
      to: "/",
      name: "Zamów",
    },
    {
      to: "/",
      name: "Kontakt",
    },
  ];

  return (
    <NavLinksList>
      {links.map((link, index) => (
        <NavLinkWrap key={index}>
          <NavLink
            to={link.to}
            onClick={() => setActiveLink(index)}
            isActive={activeLink === index ? true : false}
          >
            {link.name}
          </NavLink>
        </NavLinkWrap>
      ))}
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
const NavLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.primary};
  margin: 0 1rem;
  padding-bottom: 0.25rem;
  border-bottom: ${({ isActive, theme }) =>
    isActive ? `3px solid ${theme.primary}` : "none"};
`;
