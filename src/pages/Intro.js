import React from "react";
import { Link } from "react-router-dom";
import { IntroWrap } from "../style/IntroCss";

const Intro = () => {
  return (
    <IntroWrap>
      <Link to="/main">
        <img src="images/intro.jpg" alt="intro" />
      </Link>
    </IntroWrap>
  );
};

export default Intro;
