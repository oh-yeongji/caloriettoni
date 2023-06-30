import { React, useState } from "react";
import "react-calendar/dist/Calendar.css";
import { CalendarWrap, CalendarMain } from "../style/ScheduleCss";
import moment from "moment";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Schedule = () => {
  const marks = [
    "15-06-2023",
    "03-06-2023",
    "07-06-2023",
    "12-06-2023",
    "13-06-2023",
    "15-06-2023",
  ];

  const [value, onChange] = useState(new Date());

  return (
    <CalendarWrap>
      <h2>Calorittoni</h2>
      <div>
        <form>
          <textarea placeholder="본인의 목표롤 설정하고 실천해 보세요!"></textarea>
          <button>
            <FontAwesomeIcon icon={faPenToSquare} />
          </button>
        </form>
      </div>
      <CalendarMain
        onChange={onChange}
        value={value}
        calendarType="US"
        formatDay={(locale, date) => moment(date).format("D")}
        tileClassName={({ date, view }) => {
          if (marks.find(x => x === moment(date).format("DD-MM-YYYY"))) {
            return "highlight";
          }
        }}
      />
    </CalendarWrap>
  );
};

export default Schedule;
