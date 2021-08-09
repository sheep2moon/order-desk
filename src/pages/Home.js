import React from "react";
import styled from "styled-components";
import Hero from "../components/Home/Hero";
import Section from "../components/Home/Section";
import { sectionsData } from "../components/Home/sectionsData";

const Home = () => {
  return (
    <HomeContainer>
      <Hero />
      {sectionsData.map((sectionData) => (
        <Section data={sectionData} />
      ))}
    </HomeContainer>
  );
};

export default Home;

const HomeContainer = styled.main`
  margin: 4rem auto 0 auto;
  display: flex;
  flex-direction: column;
  max-width: 1400px;
`;
