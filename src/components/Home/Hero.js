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
          rzeczywistym dzięki prostemu w obsłudze formularzowi.
        </p>

        <RouterLink big primary>
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
  padding: 1rem;
  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr;
  }
`;
const LeftCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 1rem;
  > h1 {
    max-width: 400px;
    font-size: 2rem;
    font-weight: 700;
    text-transform: uppercase;
  }
  > p {
    max-width: 500px;
  }
  @media screen and (max-width: 1200px) {
    align-items: center;
  }
`;

const RightCol = styled.div`
  width: 100%;
  > img {
    padding: 1rem;
    max-width: 100%;
  }
`;
