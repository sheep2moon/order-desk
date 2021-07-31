import React from "react";
import styled from "styled-components";
import Hero from "../components/Home/Hero";

const Home = () => {
  return (
    <HomeContainer>
      <Hero />
    </HomeContainer>
  );
};

export default Home;

const HomeContainer = styled.main`
  max-width: 1400px;
  margin: 4rem auto 0 auto;
  display: flex;
`;
