import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Logo from "./Logo";
import NavHamburger from "./NavHamburger";
import NavLinks from "./NavLinks";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location?.pathname);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    console.log("clic");
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <NavContainer>
      <NavWrap>
        <Logo />
        {isSidebarOpen ? (
          <Sidebar />
        ) : (
          <NavLinks activeLink={activeLink} setActiveLink={setActiveLink} />
        )}
        <NavHamburger
          isSidebarOpen={isSidebarOpen}
          toggleSidebar={toggleSidebar}
        />
      </NavWrap>
    </NavContainer>
  );
};

export default Navbar;

const NavContainer = styled.header`
  background-color: ${({ theme }) => theme.secondary};
  color: ${({ theme }) => theme.primary};
  width: 100%;
  height: 4rem;
  position: fixed;
  top: 0;
  box-shadow: 0 1px 2px ${({ theme }) => theme.primary};
`;
const NavWrap = styled.nav`
  height: 100%;
  display: grid;
  grid-template-columns: 0.5fr 3fr 0.5fr;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
`;
