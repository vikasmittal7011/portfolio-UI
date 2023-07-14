import React from "react";
import Links from "../components/navbar/Links";
import img from "../images/img.jpg";

function Footer() {
  const links = (path, name) => (
    <li className="nav-item mx-2 mb-2 fs-5">
      <a
        href={path}
        className="link-offset-2 link-underline link-underline-opacity-0 text-light"
      >
        {name}
      </a>
    </li>
  );

  return (
    <div className="bg-dark py-3">
      <div className="container">
        <h1 className="text-center">Vikas's Developer Portfolio</h1>
        <div className="container d-md-flex justify-content-around my-5 footer">
          <div>
            <img
              className="rounded rounded-circle"
              src={img}
              alt="myPic"
              width="250px"
              height="230px"
            />
          </div>
          <div>
            <h3>Connect</h3>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {links("https://github.com/vikasmittal7011", "GitHub")}
              {links("https://twitter.com/VikasAggrawal91", "Twitter")}
              {links(
                "https://www.facebook.com/profile.php?id=100013372928790",
                "Facebook"
              )}
              {links(
                "https://www.instagram.com/aggarwal5936/?hl=en",
                "Instagram"
              )}
            </ul>
          </div>
          <div>
            <h3>Links</h3>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <Links path="/">Home</Links>
              <Links path="/project">Projects</Links>
              <Links path="/contect">Content Me</Links>
            </ul>
          </div>
        </div>
        <p className="text-center fs-5 text-secondary mt-3">
          Copyrigth &#169; vikasportfolio.com | All rights reserved
        </p>
      </div>
    </div>
  );
}

export default Footer;
