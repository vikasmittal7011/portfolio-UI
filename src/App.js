import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// import Home from "./components/shared/pages/Home";
import "./main.css";
import Footer from "./components/shared/pages/Footer";
import NavBar from "./components/shared/pages/NavBar";
import Contact from "./components/shared/pages/Contact";
const Home = lazy(() => import("./components/shared/pages/Home"));

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <NavBar />
        <Suspense fallback={<h1>Loading...</h1>}>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
        <Footer />
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
