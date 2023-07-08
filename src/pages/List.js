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
        console.log(healthRes);
        setHealthList(healthRes);
      } catch (err) {
        console.log(err);
      }
    };
    data();
  }, [location.pathname]);

  const handleFoodDeleteClick = _id => {
    const newMealListData = foodList.filter(item => item.imealRecord !== _id);
    setFoodList(newMealListData);
    deleteFoodList(_id);
  };

  const handleHealthDeleteClick = async _id => {
    console.log(_id);
    // console.log(_id);
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
                  <h3>{item.uef_time}</h3>
                </li>
                <li>
                  <span>식단: {item.foodName}</span>
                </li>
                <li>
                  <span>칼로리:{item.uefKcal}</span>
                </li>
                <li>
                  <p>메모: {item.ctntF}</p>
                </li>
              </ul>
              <DeleteButton onClick={handleFoodDeleteClick}>
                <FontAwesomeIcon icon={faTrashCan} />
              </DeleteButton>
            </ListDietContain>
          ))
        ) : (
          <p>해당 날짜에 기록이 없습니다.</p>
        )}
      </ListDietWrap>
      <div>
        <h2>운동 일지</h2>
        {healthList && healthList.length > 0 ? (
          healthList.map(item => (
            <ListHealthWrap key={item.ihelRecord}>
              <ListHealthPic>
                <img
                  src={`http://192.168.0.144:5006/img/foodrecord/` + item.uhPic}
                  alt="healthcate"
                />
              </ListHealthPic>
              <ul>
                <li>
                  <h3>{item.ihelCate}</h3>
                  {/* <h3>{item.ihelRecord}</h3> */}
                </li>
                <li>
                  <span>운동: {item.helName}</span>
                </li>
                <li>
                  <span>운동시간: {item.time}분</span>
                </li>
                <li>
                  <span>소모 칼로리: {item.uhKcal}kcal</span>
                </li>
                <li>
                  <p>메모: {item.ctnt}</p>
                </li>
              </ul>
              <DeleteButton
                onClick={() => handleHealthDeleteClick(item.ihelRecord)}
              >
                <FontAwesomeIcon icon={faTrashCan} />
              </DeleteButton>
            </ListHealthWrap>
          ))
        ) : (
          <p>해당 날짜에 기록이 없습니다.</p>
        )}
      </div>
    </ListWrap>
  );
};

export default List;
