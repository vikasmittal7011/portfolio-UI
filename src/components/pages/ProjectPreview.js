import React, { useState } from "react";

function ProjectPreview(props) {
  const { title, src } = props;

  const [showDemo, setshowDemo] = useState(true);

  return (
    <div className="mt-5">
      <h3>Name: {title}</h3>
      <div className="d-flex justify-content-between my-3">
        <p>
          <a
            href={src}
            target="_blank"
            rel="noreferrer"
            className="link-light link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover fs-5"
          >
            Visit Me
          </a>
        </p>
        <p
          style={{ cursor: "pointer" }}
          className="link-light link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover fs-5"
          onClick={() => {
            setshowDemo(!showDemo);
          }}
        >
          {showDemo ? "Hide Demo" : "Show Demo"}
        </p>
      </div>
      {showDemo && (
        <iframe
          title={title}
          src={src}
          frameBorder="0"
          width="100%"
          height="600px"
        />
      )}
    </div>
  );
}

export default ProjectPreview;
