import styled from "@emotion/styled";
import Calendar from "react-calendar";

export const CalendarWrap = styled.div`
  h2 {
    display: flex;
    justify-content: center;
    align-items: center;
    color: whitesmoke;
    font-size: 40px;
    height: 100px;
    background: lightblue;
  }
  div {
    position: relative;
    form {
      z-index: 99999;
      position: absolute;
      top: -18px;
      left: 25px;
      input {
        width: 450px;
        height: 100px;
      }
    }
  }
`;

export const CalendarSpace = styled.div`
  width: 500px;
  height: 60px;
  background: lightblue;
`;

export const CalendarMain = styled(Calendar)`
  font-family: "Noto Sans KR", sans-serif;
  width: 500px;
  height: 500px;
  border: 1px solid lightgray;

  .react-calendar__navigation {
    background: lightblue;
    height: 100px;
    .react-calendar__navigation__label {
      color: whitesmoke;
      font-size: 20px;
      font-family: "Noto Sans KR", sans-serif;
    }
    .react-calendar__navigation__next2-button {
      display: none;
    }
    .react-calendar__navigation__prev2-button {
      display: none;
    }
  }
  .react-calendar__month-view__weekdays {
    height: 50px;
    align-items: center;
  }
`;
