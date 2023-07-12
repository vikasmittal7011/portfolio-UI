import React, { useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import Links from "../components/navbar/Links";

function NavBar() {
  const history = useLocation().pathname;

  const toggleButtonRef = useRef();

  const handleToggle = () => {
    if (window.innerWidth < 991) {
      toggleButtonRef.current.click();
    }
  };

  return (
    <nav className="navbar navbar-expand-lg bg-dark">
      <div className="container">
        <Link className="navbar-brand text-light" to="/">
          Vikas's Portfolio
        </Link>
        <button
          ref={toggleButtonRef}
          className="navbar-toggler text-bg-light"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <Links path="/" onClick={handleToggle} history={history}>
              Home
            </Links>
            <Links path="/about" onClick={handleToggle} history={history}>
              About
            </Links>
            <Links path="/services" onClick={handleToggle} history={history}>
              Services
            </Links>
            <Links path="/project" onClick={handleToggle} history={history}>
              Projects
            </Links>
            <Links path="/contect" onClick={handleToggle} history={history}>
              Content Me
            </Links>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
