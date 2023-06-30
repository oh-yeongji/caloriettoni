import styled from "@emotion/styled";
import Calendar from "react-calendar";

export const CalendarWrap = styled.div`
  position: relative;
  background: lightblue;
  h2 {
    display: flex;
    justify-content: center;
    align-items: center;
    color: whitesmoke;
    font-size: 40px;
    height: 100px;
  }
  div {
    position: relative;
    form {
      position: relative;
      width: 90%;
      padding-bottom: 30px;
      textarea {
        border-radius: 13px;
        padding: 15px;
        width: 100%;
        height: 100px;
        border: none;
        resize: none;
      }
      button {
        position: absolute;
        right: 15px;
        top: 39%;
        transform: translateY(-50%);
        background: lightblue;
        border: 1px solid lightblue;
        border-radius: 7px;
        width: 30px;
        height: 30px;
        font-size: 20px;
        cursor: pointer;
      }
    }
  }
`;
export const CalendarMain = styled(Calendar)`
  font-family: "Noto Sans KR", sans-serif;
  width: 500px;
  height: 100%;
  border: none;

  .react-calendar__navigation {
    background: lightblue;
    height: 70px;
    .react-calendar__navigation__label {
      color: whitesmoke;
      font-size: 25px;
      font-family: "Noto Sans KR", sans-serif;
    }
    .react-calendar__navigation__label:hover {
      background: lightblue;
    }
    .react-calendar__navigation__next2-button {
      display: none;
    }
    .react-calendar__navigation__prev2-button {
      display: none;
    }
  }
  .react-calendar__month-view__weekdays {
    height: 70px;
    align-items: center;
    font-size: 23px;
    abbr {
      text-decoration: none;
    }
  }
  .react-calendar__month-view__days {
    .react-calendar__tile {
      padding: 35px 10px;
      font-size: 23px;
    }
  }
  .react-calendar__tile:enabled:hover,
  .react-calendar__tile:enabled:focus {
    background-color: ;
    border-radius: ;
    color: ;
  }
`;
