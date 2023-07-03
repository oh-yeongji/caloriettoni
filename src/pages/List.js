import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDiet } from "../api/api";
import axios from "axios";
import {
  ListDietWrap,
  ListHealthWrap,
  ListDietPic,
  ListHealthPic,
  ListWrap,
  DeleteButton,
} from "../style/ListCss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";

const List = () => {
  // 1. 식단 출력할 데이터가 서버에서 전달 되어야 한다.
  // 1.1. 목록을 관리할 state 를 만들어야 한다.
  const { date } = useParams();
  const [foodList, setFoodList] = useState(null);
  // 1.2. 목록은 배열로 보관해야 한다.
  useEffect(() => {
    getDiet();
  }, [date]);

  // 2. 운동 출력할 데이터가 서버에서 전달 되어야 한다.
  // 2.1. 목록을 관리할 state 를 만들어야 한다.
  const [healthList, setHealthList] = useState([]);
  // 2.2. 목록은 배열로 보관해야 한다.
  useEffect(() => {
    getHealth();
  }, [date]);

  const getHealth = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/list?date=${date}`,
      );
      if (response.data.length > 0) {
        setHealthList(response.data[0]);
      } else {
        setHealthList(null);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteFood = async () => {
    try {
      await axios.delete(`http://localhost:5000/list/${foodList.id}`);
      setFoodList(null);
    } catch (error) {
      console.error(error);
    }
  };
  const handleDeleteHealth = async () => {
    try {
      await axios.delete(`http://localhost:5000/list/${healthList.id}`);
      setHealthList(null);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ListWrap>
      <div>
        <h2>식단 일지</h2>
        {foodList ? (
          <ListDietWrap>
            <ListDietPic>{foodList.foodpic}</ListDietPic>
            <ul>
              <li>
                <h3>{foodList.item}</h3>
              </li>
              <li>
                <span>식단: {foodList.food}</span>
              </li>
              <li>
                <span>칼로리: {foodList.foodcal}</span>
              </li>
              <li>
                <p>메모: {foodList.foodmemo}</p>
              </li>
            </ul>
            <DeleteButton onClick={handleDeleteFood}>
              <FontAwesomeIcon icon={faTrashCan} />
            </DeleteButton>
          </ListDietWrap>
        ) : (
          <p>해당 날짜에 기록이 없습니다.</p>
        )}
      </div>
      <div>
        <h2>운동 일지</h2>
        {healthList ? (
          <ListHealthWrap>
            <ListHealthPic>{healthList.healthpic}</ListHealthPic>
            <ul>
              <li>
                <h3>{healthList.item}</h3>
              </li>
              <li>
                <span>운동: {healthList.health}</span>
              </li>
              <li>
                <span>운동시간: {healthList.healthtime}</span>
              </li>
              <li>
                <span>소모 칼로리: {healthList.healcal}</span>
              </li>
              <li>
                <p>메모: {healthList.healthmemo}</p>
              </li>
            </ul>
            <DeleteButton onClick={handleDeleteHealth}>
              <FontAwesomeIcon icon={faTrashCan} />
            </DeleteButton>
          </ListHealthWrap>
        ) : (
          <p>해당 날짜에 기록이 없습니다.</p>
        )}
      </div>
    </ListWrap>
  );
};

export default List;
