import React from "react";
import styled from "styled-components";

const NavHamburger = ({ toggleSidebar, isSidebarOpen }) => {
  return (
    <HamburgerContainer onClick={toggleSidebar} isSidebarOpen={isSidebarOpen}>
      <span></span>
      <span></span>
      <span></span>
    </HamburgerContainer>
  );
};

export default NavHamburger;

const HamburgerContainer = styled.div`
  margin-left: auto;
  margin-right: 1rem;
  position: relative;
  width: 2.2rem;
  height: 1.45rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    display: none;
  }
  > span {
    width: 2.2rem;
    height: 0.25rem;
    background: ${({ theme }) => theme.primary};
    position: absolute;
    transition: all 0.2s ease-in-out;
    :nth-child(1) {
      top: ${({ isSidebarOpen }) => (isSidebarOpen ? ".6rem" : "0")};
      transform: ${({ isSidebarOpen }) =>
        isSidebarOpen ? "rotate(45deg)" : "none"};
    }
    :nth-child(2) {
      top: 0.6rem;
      right: ${({ isSidebarOpen }) => (isSidebarOpen ? "-50px" : "0")};
      opacity: ${({ isSidebarOpen }) => (isSidebarOpen ? "0" : "1")};
    }
    :nth-child(3) {
      top: ${({ isSidebarOpen }) => (isSidebarOpen ? ".6rem" : "1.2rem")};
      transform: ${({ isSidebarOpen }) =>
        isSidebarOpen ? "rotate(135deg)" : "none"};
    }
  }
`;
