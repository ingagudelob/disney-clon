import { useContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import { UserContext } from "../providers/UserProvider";
import Error404 from "../views/404/404Page";
import Hall from "../views/hall/Hall";
import ApplicationRouter from "./ApplicationRouter";
import AuthRouter from "./AuthRouter";
import { PrivateRouter } from "./PrivateRouter";
import { PublicRouter } from "./PublicRouter";

export const MainRouter = () => {
  //? Validacion de usuario logeado
  const { isLogged } = useContext(UserContext);

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Hall />} />
        <Route
          exact
          path="/auth/*"
          element={
            <PublicRouter isLogged={isLogged}>
              <AuthRouter />
            </PublicRouter>
          }
        />
        <Route
          exact
          path="/app/*"
          element={
            <PrivateRouter isLogged={isLogged}>
              <ApplicationRouter />
            </PrivateRouter>
          }
        />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
};
