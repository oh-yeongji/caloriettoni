import { React, useEffect, useState } from "react";
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
  const [foodList, setFoodList] = useState([]);
  // 1.2. 목록은 배열로 보관해야 한다.
  useEffect(() => {
    // axios 로 가져옮
    const tempData = [
      {
        ifood: "인덱스",
        iuser: "사용자1",
        idate: "날짜",
        food: "음식1",
        pic: "날 밀어 내지마라",
        cal: "칼로리",
        memo: "아자꾸 왜 안먹히는건지 이해를 할수가 없네 짜증나게 야 좀 먹혀봐라 왜 자꾸 글이 흐럴 넘치니",
      },
      {
        ifood: "인덱스",
        iuser: "사용자2",
        idate: "날짜",
        food: "음식2",
        pic: "사진2",
        cal: "칼로리2",
        memo: "김수한무 두루미와 거북이 척박사123",
      },
      // {
      //   ifood: "인덱스",
      //   iuser: "사용자3",
      //   idate: "날짜",
      //   food: "음식3",
      //   pic: "사진3",
      //   cal: "칼로리3",
      //   memo: "김수한무 두루미와 거북박사ㄹ",
      // },
    ];
    setFoodList(tempData);
  }, []);

  // 2. 운동 출력할 데이터가 서버에서 전달 되어야 한다.
  // 2.1. 목록을 관리할 state 를 만들어야 한다.
  const [healthList, setHealthList] = useState([]);
  // 2.2. 목록은 배열로 보관해야 한다.
  useEffect(() => {
    // axios 로 가져옮
    const tempData = [
      {
        iuser: "사용자1",
        pic: "사진",
        ihel: "수영",
        time: "2시간",
        cal: "800칼로리",
        memo: "유감유감유감유감유감유감유감유감유감유감유감",
      },
      {
        iuser: "사용자2",
        pic: "사진3",
        ihel: "수영",
        time: "3시간",
        cal: "700칼로리",
        memo: "유감유감유감유감유감유감유감유감유감유감유감",
      },
      // {
      //   iuser: "사용자3",
      //   pic: "사진3",
      //   ihel: "수영",
      //   time: "1시간",
      //   cal: "600칼로리",
      //   memo: "유감유감유감유감유감유감유감유감유감유감유감",
      // },
    ];
    setHealthList(tempData);
  }, []);

  const handleDeleteList = _id => {
    const newTodoData = healthList.filter(item => item.iuser !== _id);
    setHealthList(newTodoData);
  };

  return (
    <ListWrap>
      <div>
        <h2>식단 일지</h2>
        {foodList.map((item, index) => (
          <ListDietWrap key={index}>
            <ListDietPic>{item.pic}</ListDietPic>
            <ul>
              <li>
                <span>식단: {item.food}</span>
              </li>
              <li>
                <span>칼로리: {item.cal}</span>
              </li>
              <li>
                <p style={{ wordBreak: "keep-all" }}>메모: {item.memo}</p>
              </li>
            </ul>

            <DeleteButton>
              <FontAwesomeIcon icon={faTrashCan} />
            </DeleteButton>
          </ListDietWrap>
        ))}
      </div>
      <div>
        <h2>운동 일지</h2>
        {healthList.map((item, index) => (
          <ListHealthWrap key={index}>
            <ListHealthPic>{item.pic}</ListHealthPic>
            <ul>
              <li>
                <span>운동: {item.food}</span>
              </li>
              <li>
                <span>운동시간: {item.food}</span>
              </li>
              <li>
                <span>소모 칼로리: {item.cal}</span>
              </li>
              <li>
                <p>메모: {item.memo}</p>
              </li>
            </ul>

            <DeleteButton onClick={handleDeleteList}>
              <FontAwesomeIcon icon={faTrashCan} />
            </DeleteButton>
          </ListHealthWrap>
        ))}
      </div>
    </ListWrap>
  );
};

export default List;
