import React from "react";
import ProjectPreview from "../components/pages/ProjectPreview";

import { myData } from "../components/data/project";

function Projects() {
  return (
    <div className="container my-5">
      <h1 className="text-center">My Personal Projects</h1>
      {myData.map((project, i) => (
        <ProjectPreview title={project.name} src={project.src} />
      ))}
    </div>
  );
}

export default Projects;
