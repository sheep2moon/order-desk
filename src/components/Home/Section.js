import React from "react";
import styled from "styled-components";
import RouterLink from "../RouterLink";

const Section = ({ data }) => {
  return (
    <SectionContainer>
      <ColsWrap>
        <LeftCol>
          <img src={data.image} alt={data.title} />
        </LeftCol>
        <RightCol>
          <h1>{data.title}</h1>
          <p>{data.description}</p>
          <RouterLink to={data.linkTo} big>
            {data.buttonText}
          </RouterLink>
        </RightCol>
      </ColsWrap>
    </SectionContainer>
  );
};

export default Section;

const SectionContainer = styled.section`
  margin: 0 auto;
  color: ${({ theme }) => theme.secondary};
`;
const ColsWrap = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  @media screen and (max-width: 1200px) {
    flex-direction: column;
  }
`;
const LeftCol = styled.div`
  display: flex;
  height: 100%;
  width: 50%;
  > img {
    width: 100%;
  }
`;
const RightCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 50%;
  padding: 4em;
  > h1 {
    font-size: 2.5em;
    text-transform: uppercase;
    text-align: center;
  }
  > p {
    font-size: 1.4em;
    margin: 2em 0;
  }
`;
