import React from "react";

import AboutMe from "../components/pages/AboutMe";
import { myData } from "../components/data/about";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="container my-5 pb-3">
      <div className="my-5">
        <h1>
          Hello, I'm <span className="text-warning">Vikas</span>
        </h1>
        <p className="fs-5 lh-base my-3 ms-3 font-monospace">
          I am an enthusiastic and dedicated fresher full-stack web developer
          with a passion for building dynamic and responsive web applications. I
          specialize in the MERN stack, which includes React, Node.js,
          Express.js, and MongoDB. With a solid foundation in front-end
          development and a growing expertise in back-end technologies, I am
          eager to contribute to innovative projects and expand my skills in the
          industry.
        </p>
      </div>
      <div>
        <h1>My Skills</h1>
      </div>
      {myData.map((data, i) => (
        <AboutMe key={i} describe={data.describe} title={data.title} />
      ))}
      <div className="my-5">
        <h1>My Approach</h1>
        <p className="fs-5 lh-base my-3 ms-3 font-monospace">
          As a fresher, I am highly motivated and eager to learn. I have a
          growth mindset and embrace challenges as opportunities for personal
          and professional development. I am detail-oriented, dedicated, and
          committed to writing clean, efficient, and well-documented code. I am
          also a strong believer in continuous improvement and staying updated
          with the latest web development practices and technologies.
        </p>
      </div>
      <div className="my-5">
        <h1>Let's Connect</h1>
        <p className="fs-5 lh-base my-3 ms-3 font-monospace">
          If you are looking for an enthusiastic and dedicated fresher
          full-stack web developer to join your team or collaborate on a
          project, I would be thrilled to discuss how I can contribute.
          <Link
            to="/contact"
            className="link-light link-offset-2 link-underline-opacity-50 link-underline-opacity-100-hover"
          >
            Please feel free to reach out
          </Link>
          .I am open to exciting opportunities and eager to contribute my skills
          to meaningful projects.
        </p>
      </div>
    </div>
  );
}

export default About;
