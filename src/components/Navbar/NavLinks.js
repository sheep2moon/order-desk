import { Link } from "react-router-dom";
import styled from "styled-components";

const NavLinks = ({ activeLink, setActiveLink }) => {
  const links = [
    {
      to: "/",
      name: "Strona Główna",
    },
    {
      to: "/zamow",
      name: "Zamów",
    },
    {
      to: "/kontakt",
      name: "Kontakt",
    },
  ];

  return (
    <NavLinksList>
      {links.map((link) => (
        <NavLinkWrap key={link.name}>
          <NavLink
            to={`${link.to}`}
            onClick={() => setActiveLink(link.to)}
            active={activeLink === link.to ? 1 : 0}
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
  justify-content: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const NavLinkWrap = styled.li`
  padding: 0.25rem;
`;
const NavLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.primary};
  margin: 0 1rem;
  padding-bottom: 0.25rem;
  border-bottom: ${({ active, theme }) =>
    active ? `3px solid ${theme.primary}` : "none"};
`;
