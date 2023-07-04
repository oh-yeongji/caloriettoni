import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "react-calendar/dist/Calendar.css";
import { CalendarWrap, CalendarMain } from "../style/ScheduleCss";
import moment from "moment";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Schedule = ({ thisDate, setThisDate }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const navigate = useNavigate();

  useEffect(() => {}, []);

  const handleDateClick = date => {
    const formattedDate = moment(date).format("YYYYMMDD");
    console.log(formattedDate);
    setThisDate(formattedDate);
    // navigate(`/List/${formattedDate}`);
    navigate("/list");
  };

  return (
    <CalendarWrap>
      <h2>Calorittoni</h2>
      <div>
        <form>
          <textarea
            name="textarea"
            placeholder="본인의 목표롤 설정하고 실천해 보세요!"
          />
          <button type="submit">
            <FontAwesomeIcon icon={faPenToSquare} />
          </button>
        </form>
      </div>
      <CalendarMain
        value={selectedDate}
        calendarType="US"
        formatDay={(locale, date) => moment(date).format("D")}
        onClickDay={handleDateClick}
      />
    </CalendarWrap>
  );
};

export default Schedule;
