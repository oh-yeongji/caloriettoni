import React from "react";
import { ListDietWrap, ListWrap } from "../style/ListCss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";

const List = () => {
  return (
    <ListWrap>
      <div></div>
      <h2>식단 기록</h2>
      <ListDietWrap>
        <div>
          <Link to="/diet">이미지</Link>하 어렵네 어려워
        </div>
      </ListDietWrap>
      <h2>운동 기록</h2>
      <div>
        <Link to="/health"></Link>
      </div>

      <FontAwesomeIcon icon={faTrashCan} />
    </ListWrap>
  );
};

export default List;
