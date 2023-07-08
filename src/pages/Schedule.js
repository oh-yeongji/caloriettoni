import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getScheduleTextData, getScheduleList } from "../api/schedulefetch";
import moment from "moment";
import { CalendarWrap, CalendarMain } from "../style/ScheduleCss";
import "react-calendar/dist/Calendar.css";
import ScheduleList from "../components/ScheduleList";

const Schedule = () => {
  const [value, onChange] = useState(new Date());
  const [scheduleText, setScheduleText] = useState([]);
  const navigate = useNavigate();
  const [scheduleDate, setScheduleDate] = useState([]); //
  const [yearMonth, setYearMonth] = useState(null); //
  const calRef = useRef(null);

  const highlightDate = async now => {
    try {
      const res = await getScheduleList(now);
      setScheduleDate(res);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const now = moment(calRef.current.activeStartDate).format("YYYYMM");
    highlightDate(now);
  }, []);

  useEffect(() => {
    if (yearMonth) {
      console.log(yearMonth);
      highlightDate(yearMonth);
    }
  }, [yearMonth]);

  useEffect(() => {
    getScheduleTextData(setScheduleText);
  }, []);

  const handleDateClick = date => {
    const dayClick = moment(date).format("YYYYMMDD");
    navigate(`/list/${dayClick}`);
  };

  const handleMonthChange = e => {
    const yearMonth = moment(e.activeStartDate).format("YYYYMM");
    setYearMonth(yearMonth);
  };

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
        ref={calRef}
        onChange={onChange}
        onActiveStartDateChange={handleMonthChange}
        value={value}
        calendarType="US"
        formatDay={(locale, date) => moment(date).format("D")}
        onClickDay={date => handleDateClick(date)}
        tileClassName={({ date, view }) => {
          if (
            scheduleDate.find(
              item => item.createdAt === moment(date).format("YYYY-MM-DD"),
            )
          ) {
            return "highlight";
          }
        }}
      />
    </CalendarWrap>
  );
};

export default Schedule;
