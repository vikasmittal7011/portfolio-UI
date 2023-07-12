import React from "react";
import { BrowserRouter, Routes } from "react-router-dom";
import NavBar from "./components/shared/pages/NavBar";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <NavBar />
        <Routes></Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
