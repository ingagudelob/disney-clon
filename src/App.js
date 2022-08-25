import React from "react";
import "./App.css";
import Footer from "./components/footer/Footer";
import { MainRouter } from "./routers/MainRouter";

const App = () => {
  return (
    <div>
      <MainRouter />
      <Footer />
    </div>
  );
};

export default App;
/**
     <Navbar />
     <Home />
 */
