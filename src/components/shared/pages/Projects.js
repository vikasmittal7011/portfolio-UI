import React from "react";
import ProjectPreview from "../components/pages/ProjectPreview";

function Projects() {
  return (
    <div className="container my-5">
      <h1 className="text-center">My Personal Projects</h1>
      <ProjectPreview title="ebook" src="https://ebooks-a095.onrender.com/" />
      <ProjectPreview
        title="myMedia"
        src="https://mymediabackend.onrender.com/"
      />
      <ProjectPreview
        title="textUtil"
        src="https://text-utils-2i9p.onrender.com/"
      />
      <ProjectPreview
        title="iNoteBook"
        src="https://inotebook-api-kdj0.onrender.com/"
      />
    </div>
  );
}

export default Projects;
