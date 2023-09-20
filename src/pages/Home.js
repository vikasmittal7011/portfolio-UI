import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

import image from "../images/bg.png";
import Experience from "../components/pages/Experience";

function Home() {
  const typingString = useRef(null);

  const downloadFile = () => {
    window.open(process.env.REACT_APP_RESUME);
  };

  useEffect(() => {
    const typed = new Typed(typingString.current, {
      strings: ["Web Developer", "using", "React", "MERN"],
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      loop: true,
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <React.Fragment>
      <div className="container my-3 py-3">
        <div className="d-md-flex my-4 phone-screen">
          <div className="w-50 d-flex justify-content-center flex-column fs-1 my-4 phone-screen-sizing">
            <h1>
              Hi, My name is <span style={{ color: "#cd5d5d" }}>Vikas</span>
            </h1>
            <div>and i am a passionate</div>
            <div style={{ color: "#cd5d5d" }}>
              <span ref={typingString}></span>
            </div>
            <div>
              <button
                className="btn btn-md btn-outline-warning"
                onClick={downloadFile}
              >
                Download Resume
              </button>
            </div>
          </div>
          <div className="w-50 text-center my-4">
            <img src={image} alt="img" width="75%" />
          </div>
        </div>
      </div>
      <Experience />
    </React.Fragment>
  );
}

export default Home;
