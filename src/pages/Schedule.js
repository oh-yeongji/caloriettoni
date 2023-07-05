import { useNavigate } from "react-router-dom";
import moment from "moment";
import { CalendarWrap, CalendarMain } from "../style/ScheduleCss";
import "react-calendar/dist/Calendar.css";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Schedule = () => {
  const navigate = useNavigate();

  const handleDateClick = date => {
    const dayClick = moment(date).format("YYYYMMDD");
    navigate(`/list/${dayClick}`);
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
        value={new Date()}
        calendarType="US"
        formatDay={(locale, date) => moment(date).format("D")}
        onClickDay={date => handleDateClick(date)}
      />
    </CalendarWrap>
  );
};

export default Schedule;
