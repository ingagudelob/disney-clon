import React from "react";
import styled from "styled-components";

const ContentDetails = () => {
  const baopixar =
    "https://cineoculto.com/wp-content/uploads/2019/03/maxresdefault-2.jpg";

  return (
    <Container>
      <Backgound>
        <img src={baopixar} alt="bao" />
      </Backgound>
      <ImageTitle>
        <img
          src="https://upload.wikimedia.org/wikipedia/fr/thumb/1/1a/Bao_logo.png/220px-Bao_logo.png"
          alt="bao"
        />
      </ImageTitle>
    </Container>
  );
};

export default ContentDetails;

const Container = styled.div`

  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px)
  position: relative;
`;

const Backgound = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  botton: 0;
  right: 0;
  z-index: -1;
  opacity: 0.8;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ImageTitle = styled.div`
  width: 100px;
`;
