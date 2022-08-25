import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../views/login/Login";
import Register from "../views/register/Register";

// ? Rutas para el usuario no logeado
const AuthRouter = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
      </Routes>
    </div>
  );
};

export default AuthRouter;
