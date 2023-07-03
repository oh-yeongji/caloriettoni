import React, { useEffect, useState } from "react";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ResponsiveLine } from "@nivo/line";
import {
  Total,
  Mypage,
  GraphTotal,
  TodayUp,
  TodayDown,
} from "../style/MainCss";
// 서버에서 가지고 오는 샘플 데이터
// 연간 데이터
const dataYear = [
  {
    id: "섭취칼로리량",
    color: "hsl(268, 70%, 50%)",

    data: [
      {
        x: "2월",
        y: 43,
      },
      {
        x: "3월",
        y: 139,
      },
      {
        x: "4월",
        y: 73,
      },
      {
        x: "5월",
        y: 135,
      },
      {
        x: "6월",
        y: 23,
      },
      {
        x: "7월",
        y: 31,
      },
      {
        x: "8월",
        y: 39,
      },
      {
        x: "9월",
        y: 59,
      },
      {
        x: "10월",
        y: 279,
      },
      {
        x: "11월",
        y: 79,
      },
      {
        x: "12월",
        y: 29,
      },
    ],
  },
  {
    id: "소모칼로리량",
    color: "hsl(242, 70%, 50%)",
    data: [
      {
        x: "1월",
        y: 59,
      },
      {
        x: "2월",
        y: 19,
      },
      {
        x: "3월",
        y: 29,
      },
      {
        x: "4월",
        y: 49,
      },
      {
        x: "5월",
        y: 9,
      },
      {
        x: "6월",
        y: 93,
      },
      {
        x: "7월",
        y: 21,
      },
      {
        x: "8월",
        y: 56,
      },
      {
        x: "9월",
        y: 14,
      },
      {
        x: "10월",
        y: 24,
      },
      {
        x: "11월",
        y: 32,
      },
      {
        x: "12월",
        y: 21,
      },
    ],
  },
  {
    id: "잔여칼로리량",
    color: "hsl(124, 70%, 50%)",
    data: [
      {
        x: "1월",
        y: 81,
      },
      {
        x: "2월",
        y: 36,
      },
      {
        x: "3월",
        y: 54,
      },
      {
        x: "4월",
        y: 49,
      },
      {
        x: "5월",
        y: 56,
      },
      {
        x: "6월",
        y: 10,
      },
      {
        x: "7월",
        y: 21,
      },
      {
        x: "8월",
        y: 15,
      },
      {
        x: "9월",
        y: 110,
      },
      {
        x: "10월",
        y: 105,
      },
      {
        x: "11월",
        y: 132,
      },
      {
        x: "12월",
        y: 11,
      },
    ],
  },
];
// 주간 데이터
const dataWeek = [
  {
    id: "섭취칼로리량",
    color: "hsl(268, 70%, 50%)",

    data: [
      {
        x: "월",
        y: 20,
      },
      {
        x: "화",
        y: 30,
      },
      {
        x: "수",
        y: 43,
      },
      {
        x: "목",
        y: 139,
      },
      {
        x: "금",
        y: 73,
      },
      {
        x: "토",
        y: 135,
      },
      {
        x: "일",
        y: 23,
      },
    ],
  },
  {
    id: "소모칼로리량",
    color: "hsl(242, 70%, 50%)",
    data: [
      {
        x: "월",
        y: 0,
      },
      {
        x: "화",
        y: 30,
      },
      {
        x: "수",
        y: 43,
      },
      {
        x: "목",
        y: 139,
      },
      {
        x: "금",
        y: 73,
      },
      {
        x: "토",
        y: 135,
      },
      {
        x: "일",
        y: 23,
      },
    ],
  },
  {
    id: "잔여칼로리량",
    color: "hsl(124, 70%, 50%)",
    data: [
      {
        x: "월",
        y: 0,
      },
      {
        x: "화",
        y: 30,
      },
      {
        x: "수",
        y: 43,
      },
      {
        x: "목",
        y: 139,
      },
      {
        x: "금",
        y: 73,
      },
      {
        x: "토",
        y: 135,
      },
      {
        x: "일",
        y: 23,
      },
    ],
  },
];
const Main = () => {
  // 화면에 보여줄 데이터를 위한 변수
  const [cartData, setChartData] = useState([]);
  useEffect(() => {
    setChartData(dataWeek);
  }, []);

  // 주간 및 연간 저장 state
  const [showPeriod, setShowPeriod] = useState("주간");
  // 명칭이 이상하다.
  const handleDate = () => {
    setShowPeriod("주간");
    setChartData(dataWeek);
  };
  const handleYear = () => {
    setShowPeriod("연간");
    setChartData(dataYear);
  };

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [height, setHeight] = useState("");
  const [wight, setWeight] = useState("");

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

      <GraphTotal>
        <div className="graph">
          {/* 그래프 표현 */}
          <ResponsiveLine
            data={cartData}
            margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
            // 그래프 표시
            xScale={{ type: "point" }}
            yScale={{
              type: "linear",
              min: "-600",
              max: "600",
              stacked: true,
              reverse: false,
            }}
            yFormat=" >-.2f"
            axisTop={null}
            axisRight={null}
            // 가로축 범례
            axisBottom={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: "날짜",
              legendOffset: 36,
              // 가로축 범례 표시 위치
              legendPosition: "middle",
            }}
            // 세로축 범례
            axisLeft={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: "칼로리",
              legendOffset: -45,
              // 세로축 범례 표시 위치
              legendPosition: "middle",
            }}
            // 그래프 색칠안된 동그라미테두리 크기
            pointSize={10}
            pointColor={{ theme: "background" }}
            // 그래프 색칠된 동그라미 크기
            pointBorderWidth={2}
            pointBorderColor={{ from: "serieColor" }}
            pointLabelYOffset={-12}
            useMesh={true}
            legends={[
              {
                anchor: "top-right",
                direction: "column",
                justify: false,
                translateX: 100,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: "left-to-right",
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: "circle",
                symbolBorderColor: "rgba(0, 0, 0, .5)",
                effects: [
                  {
                    on: "hover",
                    style: {
                      itemBackground: "rgba(0, 0, 0, .03)",
                      itemOpacity: 1,
                    },
                  },
                ],
              },
            ]}
          />
        </div>
        <div className="btns">
          <div className="left">
            {/* <FontAwesomeIcon icon={faChevronLeft} onClick={hi} /> <h2>{week==="주간"?주간을 보여주고:아니면 연간을 보여줘라}주간</h2> */}
            <FontAwesomeIcon icon={faChevronLeft} onClick={handleDate} />
          </div>
          <p>{showPeriod}</p>
          <div className="right">
            <FontAwesomeIcon icon={faChevronRight} onClick={handleYear} />
          </div>
        </div>
      </GraphTotal>

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
