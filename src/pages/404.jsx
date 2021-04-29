import React from "react";
import { Link } from "react-router-dom";

const Four0Four = () => {
  return (
    <div id="four0Four">
      <div className="left">
        <h2>404 - There's nothing here</h2>
        <Link to="/">Take me home</Link>
      </div>
      <div className="right"></div>
    </div>
  );
};

export default Four0Four;
