import React, { useContext, useState } from "react";
import logo from "../../assets/images/logo.svg";
import styled from "styled-components";
import axios from "axios";

import { useForm } from "react-hook-form";
import { EXPRESIONES } from "../../models/ExpRegulares";
import { UserContext } from "../../providers/UserProvider";

const Login = () => {
  // ----------------------- Variables de estados -----------------------------
  const [dataUser, setDataUser] = useState([]);
  const { setUserActive, setIsLogged } = useContext(UserContext);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    axios
      .post(urlApi, data)
      .then((data) => {
        setUserActive(data.data.user);
        console.log(data.data);
        setIsLogged(true);
        // * Reset los campos
      })
      .catch(function (error) {
        console.log(error.toJSON());
      });
  };
  // --------------------------------------------------------------------------

  const urlApi = "http://localhost:3004/users";
  const handleInput = (event) => {
    setDataUser({ ...dataUser, [event.target.name]: event.target.value });
  };

  // const getData = async () => {
  //   const data = await axios.get(urlApi).then((res) => res.data);
  //   console.log(data);
  // };

  return (
    <>
      <Container>
        <Wrap>
          <img src={logo} alt="logo-imve" />
        </Wrap>

        <Title>
          <h1>Inicia sesión con tu correo</h1>
          <hr />
        </Title>
        <ContainerInput>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Label>Usuario</Label>
            <Input
              name="user"
              type="text"
              placeholder="ejemplo@correo.co"
              {...register("user", {
                required: {
                  value: true,
                  message: "El usuario es requerido",
                },
                pattern: {
                  value: EXPRESIONES.EMAIL,
                  message: "Formato no es correcto",
                },
              })}
            />
            {errors.user && (
              <span style={{ float: "left", color: "red" }}>
                {errors.user.message}
              </span>
            )}

            <Label>Contraseña</Label>
            <Input
              name="password"
              type="password"
              placeholder="********"
              {...register("password", {
                required: {
                  value: true,
                  message: "La contraseña es requerida",
                },
                pattern: {
                  value: EXPRESIONES.PASSWORD,
                  message: "Formato no es correcto",
                },
                minLength: {
                  value: 6,
                  message: "Debe ser mayor a 6 caracteres",
                },
              })}
            />
            {errors.password && (
              <span style={{ float: "left", color: "red" }}>
                {errors.password.message}
              </span>
            )}

            <Button>
              <div>Ingresar</div>
            </Button>
          </form>
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
