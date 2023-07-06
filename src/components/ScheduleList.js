import React from "react";
import ScheduleItem from "../components/ScheduleItem";

const ScheduleList = ({ scheduleText, setScheduleText }) => {
  return (
    <div>
      {scheduleText.map(item => (
        <ScheduleItem
          key={item.uid}
          item={item}
          scheduleText={scheduleText}
          setScheduleText={setScheduleText}
        />
      ))}
    </div>
  );
};

export default ScheduleList;