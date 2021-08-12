import React from "react";
import styled from "styled-components";
import cardImg1 from "../../assets/cardSection/customize.svg";
import cardImg2 from "../../assets/cardSection/colorselection.svg";
import cardImg3 from "../../assets/cardSection/precision.svg";

const CardsSection = () => {
  return (
    <CardsSectionContainer>
      <h2>Co nas wyróznia?</h2>
      <CardsWrapper>
        <Card>
          <h4>Dopasuj rozmiar do własnych potrzeb</h4>
          <img src={cardImg1} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, est!
          </p>
        </Card>
        <Card>
          <h4>Szeroki wybór kolorów</h4>
          <img src={cardImg2} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, est!
          </p>
        </Card>
        <Card>
          <h4>Stworzone z największą precyzją</h4>
          <img src={cardImg3} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, est!
          </p>
        </Card>
      </CardsWrapper>
    </CardsSectionContainer>
  );
};

export default CardsSection;

const CardsSectionContainer = styled.section`
  width: 100%;
  background-color: ${({ theme }) => theme.secondary};
  color: #000;
  > h2 {
    display: block;
    text-align: center;
    font-size: 3em;
    margin: 2rem 0;
  }
`;
const CardsWrapper = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;
const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 1rem;
  padding: 1em;
  border-radius: 0.5rem;
  box-shadow: 1px 2px 3px 1px #00000080;
  > h4 {
    font-size: 2em;
    text-align: center;
    margin-bottom: 2rem;
  }
  > img {
    width: 6rem;
    margin-bottom: 2rem;
  }
  > p {
    padding: 1em 2em;
  }
`;
