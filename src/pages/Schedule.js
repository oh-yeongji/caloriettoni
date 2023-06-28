import React, { useState } from "react";
import "react-calendar/dist/Calendar.css";
import {
  CalendarWrap,
  CalendarMain,
  CalendarSpace,
} from "../style/ScheduleCss";
import moment from "moment";

const Schedule = () => {
  const [value, onChange] = useState(new Date());

  return (
    <CalendarWrap>
      <h2>Calorittoni</h2>
      <div>
        <form>
          <input type="text"></input>
        </form>
      </div>
      <CalendarSpace></CalendarSpace>
      <CalendarMain
        onChange={onChange}
        value={value}
        calendarType="US"
        formatDay={(locale, date) => moment(date).format("D")}
      />
    </CalendarWrap>
  );
};

export default Schedule;
