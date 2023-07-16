import React from "react";

function ProjectPreview(props) {
  const { title, src } = props;
  return (
    <div className="mt-5">
      <h3>Name: {title}</h3>
      <p>
        <a
          href={src}
          className="link-light link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover fs-5"
        >
          Visit Me
        </a>
      </p>
      <iframe
        title={title}
        src={src}
        frameBorder="0"
        width="100%"
        height="600px"
      ></iframe>
    </div>
  );
}

export default ProjectPreview;
