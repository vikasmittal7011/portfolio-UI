import React from "react";
import { Link } from "react-router-dom";

function Links(props) {
  const { children, path, onClick, history } = props;
  const activeClass = history === path && "border-bottom";
  return (
    <li className="nav-item mx-2" onClick={onClick}>
      <Link
        className={`nav-link text-light ${activeClass}`}
        aria-current="page"
        to={path}
      >
        {children}
      </Link>
    </li>
  );
}

export default Links;
