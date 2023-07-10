import styled from "@emotion/styled";

export const ScheduleForm = styled.div`
  div {
    display: flex;
    position: relative;
    width: 90%;
    background: white;
    border-radius: 13px;
    textarea {
      border-radius: 13px;
      padding: 15px;
      width: 75%;
      height: 100px;
      border: none;
      resize: none;
      background: white;
      text-align: center;
    }
    button {
      position: absolute;
      right: 15px;
      top: 50%;
      transform: translateY(-50%);
      background: lightblue;
      border: 1px solid lightblue;
      border-radius: 7px;
      width: 30px;
      height: 30px;
      font-size: 20px;
      cursor: pointer;
    }
  }
`;
