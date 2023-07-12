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
      pointer-events: none;
    }
    .react-calendar__navigation__label:hover {
      background: lightblue;
    }
    .react-calendar__navigation__next-button {
      font-size: 30px;
    }
    .react-calendar__navigation__prev-button {
      font-size: 30px;
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
      padding: 45.4px 10px;
      font-size: 30px;
      line-height: 0px;
    }
  }
  .react-calendar__navigation button:enabled:hover,
  .react-calendar__navigation button:enabled:focus {
    background-color: lightcoral;
  }
  .react-calendar__tile:enabled:hover,
  .react-calendar__tile:enabled:focus {
    background-color: lightblue;
  }
  .react-calendar__tile--now {
    background: lightblue;
  }
  .highlight {
    background: lightgreen;
  }
  .react-calendar__tile {
    padding: 30px 30px !important;
    font-size: 20px !important;
  }
  .react-calendar__tile--active {
    background: lightblue;
    color: white;
  }
  .react-calendar__tile--active:enabled:hover,
  .react-calendar__tile--active:enabled:focus {
    background: lightblue;
  }
  .react-calendar__tile {
    height: 10px;
    width: 10px;
  }
  .react-calendar__month-view__days {
    height: 100%;
    min-height: 500px;
  }
`;
