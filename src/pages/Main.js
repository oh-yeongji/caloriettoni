import React, { useState } from "react";
import { ResponsiveLine } from "@nivo/line";
import { Total, Mypage, Graph, TodayUp, TodayDown } from "../style/MainCss";

const Main = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [height, setHeight] = useState("");
  const [wight, setwight] = useState("");

  return (
    <Total>
      <Mypage>
        <div>
          <img src="" alt="본인사진"></img>
          <div className="privacy">
            <div>
              이름:<p></p>{" "}
            </div>
            <div>
              나이:<p></p>{" "}
            </div>
            <div>
              성별:<p></p>{" "}
            </div>
            <div>
              키:<p></p>{" "}
            </div>
            <div>
              몸무게:<p></p>{" "}
            </div>
          </div>
        </div>
      </Mypage>

      <Graph></Graph>

      <TodayUp>
        {/* 칼로리 섭취량 */}
        현재 섭취 칼로리량:
      </TodayUp>
      <TodayDown>
        {/* 칼로리 소모량 */}
        현재 소모 칼로리량:
      </TodayDown>
    </Total>
  );
};

export default Main;
