import React, { useState } from "react";
import logo from "../../assets/images/logo.svg";
import styled from "styled-components";

const Login = () => {
  // ----------------------- Variables de estados -----------------------------
  const [dataUser, setDataUser] = useState([]);

  // --------------------------------------------------------------------------

  const handleInput = (event) => {
    setDataUser({ ...dataUser, [event.target.name]: event.target.value });
  };

  return (
    <>
      <Container>
        <Wrap className="container-img">
          <img className="img-login" src={logo} alt="logo-imve" />
        </Wrap>

        <Title>
          <h1>Inicia sesión con tu correo</h1>
          <hr />
        </Title>
        <ContainerInput>
          <form>
            <Label className="label-login">Usuario</Label>
            <Input
              name="user"
              type="text"
              placeholder="ejemplo@manantial.co"
              onChange={handleInput}
            />
            <Label className="label-login">Contraseña</Label>
            <Input
              name="password"
              type="password"
              placeholder="********"
              onChange={handleInput}
            />
          </form>
        </ContainerInput>
        <ContainerInput>
          <Button className="signin-btn" type="button">
            <div className="ingresar">Ingresar</div>
          </Button>
        </ContainerInput>
      </Container>
    </>
  );
};

export default Login;

const Container = styled.div`
  font-size: 15px;
  padding-top: 0%;
  margin-top: 0px;
  text-align: center;
  @include exo-font;
  //background: linear-gradient(159.53deg, rgb(5, 6, 11) 4.03%, rgb(27, 32, 53) 23.26%, rgb(10, 12, 15) 93.99%);
  width: 100%;
  position: relative;
`;

const Wrap = styled.div`
  padding-top: 65px;
  margin: 0 auto;
  width: 400px;
  display: flex;
  justify-content: center;

  img {
    width: 250px;
  }
`;

const Input = styled.input`
  width: 100%;
  height: 40px;
  font-size: 15px;
  border-radius: 0.3125rem;
  border: 1.5px solid;
  padding-left: 10px;
`;

const Button = styled.button`
  font-weight: 500;
  font-size: 21px;
  padding: 15px;
  margin-top: 15px;
  margin-bottom: 10px;
  border-radius: 0.3125rem;
  background: radial-gradient(
    circle at 24% 100%,
    #fed373 4%,
    #f15245 30%,
    #d92e7f 62%,
    #9b36b7 85%,
    #515ecf
  );
  border: none;
  height: 2.5rem;
  line-height: 0;
  transition: 0.5s;
  width: 400px;
  color: rgb(255, 255, 255);
  filter: brightness(80%);

  &:hover {
    cursor: pointer;
    background: radial-gradient(
      circle at 23% 100%,
      #fed373 4%,
      #f15245 30%,
      #d92e7f 62%,
      #9b36b7 85%,
      #515ecf
    );
    transform: scale(0.95);
  }
`;

const ContainerInput = styled.div`
  display: block;
  margin: 0 auto;
  width: 400px;
`;

const Title = styled.div`
  display: block;
  columns: 400px;
  margin: 0 auto;
  width: 400px;

  h1 {
    color: rgb(255, 255, 255);
    font-size: 20px;
    font-weight: 500;
  }

  hr {
    width: 100%;
    background: rgb(255, 255, 255);
    height: 3px;
  }
`;

const Label = styled.label`
  float: left !important;
  font-size: 1.5rem;
  font-weight: 400;
  color: rgb(255, 255, 255);
  padding: 1rem 0 0.1rem 0;
`;
