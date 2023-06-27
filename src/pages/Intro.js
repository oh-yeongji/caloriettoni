import React from "react";
import { Link } from "react-router-dom";

const Intro = () => {
  return (
    <div>
      <Link to="/main">
        <img
          src="images/intro.jpg"
          alt="intro"
          style={{
            width: "100%",
            height: "900px",
          }}
        />
      </Link>
    </div>
  );
};

export default Intro;
