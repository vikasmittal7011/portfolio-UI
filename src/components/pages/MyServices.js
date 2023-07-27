import React from "react";

function MyServices(props) {
  const {
    data: { title, para1, para2, points },
  } = props;
  return (
    <div className="mb-5">
      <h2>{title}</h2>
      <div className="fs-5">
        <p>{para1}</p>
        <p>{para2}</p>
        <ul>
          {points.map((p, i) => (
            <li key={i}>{p}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MyServices;
