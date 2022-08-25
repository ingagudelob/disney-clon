import React from "react";
import styled from "styled-components";
import card1 from "../../assets/images/viewers-disney.png";
import card2 from "../../assets/images/viewers-marvel.png";
import card3 from "../../assets/images/viewers-national.png";
import card4 from "../../assets/images/viewers-pixar.png";
import card5 from "../../assets/images/viewers-starwars.png";

const ContentCategory = () => {
  return (
    <Container>
      <Wrap>
        <img src={card1} atl="Disney" />
      </Wrap>

      <Wrap>
        <img src={card2} atl="Disney" />
      </Wrap>

      <Wrap>
        <img src={card3} atl="Disney" />
      </Wrap>

      <Wrap>
        <img src={card4} atl="Disney" />
      </Wrap>

      <Wrap>
        <img src={card5} atl="Disney" />
      </Wrap>
    </Container>
  );
};

export default ContentCategory;

const Container = styled.div`
  margin-top: 25px;
  padding: 30px 0 30px;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(5, minmax(0, 1fr));
`;

const Wrap = styled.div`
  cursor: pointer;
  border: 1px solid rgba(249, 249, 249, 0.1);
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 60%) 0px 26px 30px -10px,
    rgb(0 0 0 / 75%) 0px 16px 10px -10px;
  transition: all 300ms cubic-bezier(0.25, 0.45, 0.45, 0.95) 0s;

  &:hover {
    border: 1px solid rgba(249, 249, 249, 0.9);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
