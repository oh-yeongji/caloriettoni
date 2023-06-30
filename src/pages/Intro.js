import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { IntroWrap } from "../style/IntroCss";

const Intro = () => {
  const navigate = useNavigate();

  const handleNavi = () => {
    navigate("/main");
  };
  return (
    <IntroWrap onClick={handleNavi}>
      <div className="logo">
        <img src="../images/logo.png"></img>
      </div>
    </IntroWrap>
  );
};

export default Intro;
