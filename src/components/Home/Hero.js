import React from "react";
import styled from "styled-components";
import heroImg from "../../assets/introduce.svg";
import RouterLink from "../RouterLink";

const Hero = () => {
  return (
    <HeroContainer>
      <LeftCol>
        <h1>Biurko dopasowane do twoich potrzeb</h1>
        <p>
          Dopasuj wymiary, materiał oraz kolor biurka tak aby nauka czy praca
          stała się bardziej komfortowa. <br /> Wycena odbywa się w czasie
          rzeczywistym dzięki wygodnemu formularzowi.
        </p>
        <RouterLink big="true" to="/zamow">
          Przejdź do formularza
        </RouterLink>
      </LeftCol>
      <RightCol>
        <img src={heroImg} alt="introduce product" />
      </RightCol>
    </HeroContainer>
  );
};

export default Hero;

const HeroContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: calc(100vh - 4em);
  padding: 1rem;
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.secondary};
  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr;
  }
`;
const LeftCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 3em;
  > h1 {
    font-size: 2.5em;
    font-weight: 700;
    text-transform: uppercase;
  }
  > p {
    font-size: 1.2em;
    margin-bottom: 2em;
  }
  @media screen and (max-width: 1200px) {
    align-items: center;
  }
`;

const RightCol = styled.div`
  width: 100%;
  padding: 1em;
  > img {
    max-width: 100%;
  }
`;
