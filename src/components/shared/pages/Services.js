import React from "react";

import MyServices from "../components/pages/MyServices";
import { myData } from "../components/data/services";

function Services() {
  return (
    <div className="container my-5">
      <h1 className="text-center my-3">My Services</h1>
      <div>
        {myData.map((data, i) => (
          <MyServices data={data} key={i} />
        ))}
      </div>
    </div>
  );
}

export default Services;
