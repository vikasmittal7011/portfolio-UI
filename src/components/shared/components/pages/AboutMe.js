import React from "react";

function AboutMe(props) {
  const { title, describe } = props;

  return (
    <div className="ms-3 my-3">
      <h2>{title}</h2>
      <p className="fs-5 lh-base my-3 ms-3 font-monospace">{describe}</p>
    </div>
  );
}

export default AboutMe;
