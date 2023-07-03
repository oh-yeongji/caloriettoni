import React, { useState, useEffect } from "react";
import "react-calendar/dist/Calendar.css";
import { CalendarWrap, CalendarMain } from "../style/ScheduleCss";
import moment from "moment";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Schedule = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [markedDates, setMarkedDates] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/list");
      const { data } = response;
      setMarkedDates(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDateClick = async date => {
    const formattedDate = moment(date).format("DD-MM-YYYY");

    if (markedDates.includes(formattedDate)) {
      navigate(`/record/${formattedDate}`);
    } else {
      navigate(`/create-record/${formattedDate}`);
    }
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
        onChange={setSelectedDate}
        value={selectedDate}
        calendarType="US"
        formatDay={(locale, date) => moment(date).format("D")}
        tileClassName={({ date }) => {
          const formattedDate = moment(date).format("DD-MM-YYYY");
          return markedDates.includes(formattedDate) ? "highlight" : "";
        }}
        onClickDay={handleDateClick}
      />
    </CalendarWrap>
  );
};

export default Schedule;
