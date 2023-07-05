import {
  faCalendarDays,
  faDumbbell,
  faHouse,
  faList,
  faPlateWheat,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import { FooterWrap, MainMenu } from "../style/FooterCss";

const Footer = () => {
  return (
    <FooterWrap>
      <MainMenu>
        <li>
          <Link to="/main">
            <FontAwesomeIcon icon={faHouse} />
          </Link>
        </li>
        <li>
          <Link to="/Schedule">
            <FontAwesomeIcon icon={faCalendarDays} />
          </Link>
        </li>
        <li>
          <Link to="/health">
            <FontAwesomeIcon icon={faDumbbell} />
          </Link>
        </li>

        <li>
          <Link to="/diet">
            <FontAwesomeIcon icon={faPlateWheat} />
          </Link>
        </li>
      </MainMenu>
    </FooterWrap>
  );
};

export default Footer;
