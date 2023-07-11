import React, { useEffect, useState } from "react";
import { getFoodSchedule, getHealthSchedule } from "../api/schedulefetch";
import { deleteHealthList, deleteFoodList } from "../api/listfetch";
import { useLocation } from "react-router-dom";
import {
  ListDietWrap,
  ListHealthWrap,
  ListDietPic,
  ListHealthPic,
  ListWrap,
  DeleteButton,
  Logo,
  ListDietContain,
  ListHealthContain,
} from "../style/ListCss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";

const List = () => {
  const [foodList, setFoodList] = useState([]);
  const [healthList, setHealthList] = useState([]);

  const location = useLocation();

  useEffect(() => {
    const data = async () => {
      try {
        const foodRes = await getFoodSchedule(location.pathname);
        setFoodList(foodRes);
        const healthRes = await getHealthSchedule(location.pathname);
        // console.log(healthRes);
        setHealthList(healthRes);
      } catch (err) {
        console.log(err);
      }
    };
    data();
  }, [location.pathname]);

  const handleFoodDeleteClick = async _id => {
    console.log(_id);
    await deleteFoodList(_id);
    const newMealListData = foodList.filter(item => item.imealRecord !== _id);
    setFoodList(newMealListData);
  };

  const handleHealthDeleteClick = async _id => {
    await deleteHealthList(_id);
    // 내부 목록 갱신
    const newHealthListData = healthList.filter(
      item => item.ihelRecord !== _id,
    );
    setHealthList(newHealthListData);
  };

  return (
    <ListWrap>
      <Logo>
        <img src="../images/logotop.png" alt="logo" />
      </Logo>
      <h3>{location.pathname.split("/")[2]}</h3>
      <ListDietWrap>
        <h2>식단 일지</h2>
        {foodList && foodList.length > 0 ? (
          foodList.map((item, imealRecord) => (
            <ListDietContain key={imealRecord}>
              <ListDietPic>
                <img
                  src={
                    `http://192.168.0.144:5006/img/foodrecord/` + item.uefPic
                  }
                  alt="foodcate"
                />
              </ListDietPic>
              <ul>
                <li>
                  <span>{item.uefTime}</span>
                </li>
                <li>
                  <span>식단: {item.foodName}</span>
                </li>
                <li>
                  <span>칼로리: {item.uefKcal}Kcal</span>
                </li>
                <li style={{ display: "flex" }}>
                  <span>메모: </span>
                  <span style={{ paddingLeft: "5px" }}>{item.ctntF}</span>
                </li>
              </ul>
              <DeleteButton
                onClick={() => handleFoodDeleteClick(item.imealRecord)}
              >
                <FontAwesomeIcon icon={faTrashCan} />
              </DeleteButton>
            </ListDietContain>
          ))
        ) : (
          <span>해당 날짜에 기록이 없습니다.</span>
        )}
      </ListDietWrap>
      <ListHealthWrap>
        <h2>운동 일지</h2>
        {healthList && healthList.length > 0 ? (
          healthList.map(item => (
            <ListHealthContain key={item.ihelRecord}>
              <ListHealthPic>
                <img
                  src={`http://192.168.0.144:5006/img/helrecord/` + item.uhPic}
                  alt="healthcate"
                />
              </ListHealthPic>
              <ul>
                <li>
                  <span>운동: {item.helName}</span>
                </li>
                <li>
                  <span>운동시간: {item.time}분</span>
                </li>
                <li>
                  <span>소모 칼로리: {item.uhKcal}kcal</span>
                </li>
                <li style={{ display: "flex" }}>
                  <span>메모:</span>
                  <span style={{ paddingLeft: "5px" }}>{item.ctnt}</span>
                </li>
              </ul>
              <DeleteButton
                onClick={() => handleHealthDeleteClick(item.ihelRecord)}
              >
                <FontAwesomeIcon icon={faTrashCan} />
              </DeleteButton>
            </ListHealthContain>
          ))
        ) : (
          <span>해당 날짜에 기록이 없습니다.</span>
        )}
      </ListHealthWrap>
    </ListWrap>
  );
};

export default List;
