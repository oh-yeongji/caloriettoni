import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getScheduleTextData } from "../api/schedulefetch";
import moment from "moment";
import { CalendarWrap, CalendarMain } from "../style/ScheduleCss";
import "react-calendar/dist/Calendar.css";
import ScheduleList from "../components/ScheduleList";

const Schedule = () => {
  const [value, onChange] = useState(new Date());
  const [scheduleText, setScheduleText] = useState([]);
  const navigate = useNavigate();

  const handleDateClick = date => {
    const dayClick = moment(date).format("YYYYMMDD");
    navigate(`/list/${dayClick}`);
  };

  useEffect(() => {
    getScheduleTextData(setScheduleText);
  }, []);

  // 날짜 값을 받아야하는데..?...??????????????????????????
  // diet,health 작성 날짜..?
  const marks = [
    "12-06-2023",
    "13-06-2023",
    "15-06-2023",
    "01-07-2023",
    "02-07-2023",
    "03-07-2023",
  ];

  return (
    <CalendarWrap>
      <h2>Calorittoni</h2>
      <div>
        <ScheduleList
          scheduleText={scheduleText}
          setScheduleText={setScheduleText}
        />
      </div>
      <CalendarMain
        onChange={onChange}
        value={value}
        calendarType="US"
        formatDay={(locale, date) => moment(date).format("D")}
        onClickDay={date => handleDateClick(date)}
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
