import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../components/home/Home";
import Navbar from "../components/navbar/Navbar";

// ? Rutas para los usuario que se hayan logueado correctamente (Componente children de PrivateRouter)
const ApplicationRouter = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact index path="/home" element={<Home />} />
      </Routes>
    </>
  );
};

export default ApplicationRouter;

/*
<Route exact path="/search" element={<SearchPage />} />
<Route exact path="/profile" element={<UserInfo />} />
*/
