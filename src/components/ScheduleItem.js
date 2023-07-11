import React, { useEffect, useState } from "react";
import { patchScheduleTextData } from "../api/schedulefetch";
import { ScheduleForm } from "../style/ScheduleItemCss";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ScheduleItem = ({ item, scheduleText, setScheduleText }) => {
  // 수정 상태 설정 state
  const [isScheduleEdit, setIsScheduleEdit] = useState(false);
  // 수정 상태 타이틀 설정 state
  const [editScheduleText, setEditScheduleText] = useState("");

  useEffect(() => {}, []);

  const handleEditClick = e => {
    e.preventDefault();
    setIsScheduleEdit(true);
  };
  const handleEditChange = e => {
    setEditScheduleText(e.target.value);
  };
  const handleSaveClick = () => {
    let newTextData = scheduleText.map(item => {
      // console.log(item);
      item.goal = editScheduleText;
      return item;
    });
    setScheduleText(newTextData);
    patchScheduleTextData(1, editScheduleText);
    setIsScheduleEdit(false);
  };

  if (isScheduleEdit) {
    // 글 수정 중 상태
    return (
      <ScheduleForm>
        <div>
          <textarea
            type="text"
            defaultValue={item.goal}
            onChange={e => handleEditChange(e)}
            maxLength="95"
          />
          <button onClick={() => handleSaveClick(item.iuser)}>
            <FontAwesomeIcon icon={faPenToSquare} />
          </button>
        </div>
      </ScheduleForm>
    );
  } else {
    // 초기 상태
    return (
      <ScheduleForm>
        <div>
          <textarea
            value={item.goal}
            placeholder="본인의 목표를 설정하고 실천해보세요"
            disabled
            maxLength="95"
          ></textarea>
          <button onClick={handleEditClick}>
            <FontAwesomeIcon icon={faPenToSquare} />
          </button>
        </div>
      </ScheduleForm>
    );
  }
};

export default ScheduleItem;
