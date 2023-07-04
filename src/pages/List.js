import React, { useEffect, useState } from "react";
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
import axios from "axios";

const List = ({ thisDate }) => {
  const [foodList, setFoodList] = useState([]);
  const [healthList, setHealthList] = useState([]);

  console.log("현재날짜" + thisDate);
  const location = useLocation();

  const getDietList = async () => {
    try {
      const res = await axios.get(`/List/${thisDate}/food`);
      const result = res.data;
      setFoodList(result);
    } catch (error) {
      console.log(error);
    }
  };

  const getHealthList = async () => {
    console.log(location.pathname);
    try {
      const res = await axios.get(`/List/${thisDate}/hel`);
      const result = res.data;
      setHealthList(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDietList();
    getHealthList();
  }, []);

  // const getDietListLoad = async () => {
  //   try {
  //     const data = await getDietList();
  //     setFoodList(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const getHealthListLoad = async () => {
  //   try {
  //     const data = await getHealthList();
  //     setHealthList(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <ListWrap>
      <Logo>
        <img src="../images/logotop.png" alt="logo" />
      </Logo>
      <ListDietWrap>
        <h2>식단 일지</h2>
        {foodList && foodList.length > 0 ? (
          foodList.map((item, index) => (
            <ListDietContain key={index}>
              <ListDietPic>{item.uefpic}</ListDietPic>
              <ul>
                <li>
                  <h3>{item.uef_time}</h3>
                </li>
                <li>
                  <span>식단: {item.foodname}</span>
                </li>
                <li>
                  <span>칼로리:{item.f_kcal}</span>
                </li>
                <li>
                  <p>메모: {item.ctnt}</p>
                </li>
              </ul>
              <DeleteButton>
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
          healthList.map((item, ihelRecord) => (
            <ListHealthWrap key={ihelRecord}>
              <ListHealthPic>{item.uhPic}</ListHealthPic>
              <ul>
                <li>
                  <h3>{item.ihelCate}</h3>
                </li>
                <li>
                  <span>운동:</span>
                </li>
                <li>
                  <span>운동시간: {item.time}</span>
                </li>
                <li>
                  <span>소모 칼로리: {item.uhKcal}</span>
                </li>
                <li>
                  <p>메모: {}</p>
                </li>
              </ul>
              <DeleteButton>
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
