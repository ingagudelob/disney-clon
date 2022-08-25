import React from "react";
import styled from "styled-components";
import NavbarHall from "../../components/navbar/NavbarHall";
import SliderImg from "../../components/slider/SliderImg";

const Hall = () => {
  return (
    <Container>
      <NavbarHall />
      <SliderImg />
    </Container>
  );
};

export default Hall;

const Container = styled.div``;
