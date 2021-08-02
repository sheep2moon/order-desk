import React from "react";
import styled from "styled-components";
import RouterLink from "../RouterLink";

const Sidebar = ({ setIsSidebarOpen }) => {
  return (
    <SidebarContainer>
      <LinksWrap>
        <RouterLink big="true" to="/" onClick={() => setIsSidebarOpen(false)}>
          Strona Główna
        </RouterLink>
        <RouterLink
          big="true"
          to="/zamow"
          onClick={() => setIsSidebarOpen(false)}
        >
          Zamów
        </RouterLink>
        <RouterLink
          big="true"
          to="/kontakt"
          onClick={() => setIsSidebarOpen(false)}
        >
          Kontakt
        </RouterLink>
      </LinksWrap>
    </SidebarContainer>
  );
};

export default Sidebar;

const SidebarContainer = styled.aside`
  position: fixed;
  background-color: ${({ theme }) => theme.primary};
  top: 4rem;
  left: 0;
  right: 0;
  bottom: 0;
`;
const LinksWrap = styled.div`
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;
`;
