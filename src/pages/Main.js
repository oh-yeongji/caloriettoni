import React, { useState } from "react";
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

const Main = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [height, setHeight] = useState("");
  const [wight, setWeight] = useState("");
  const hi = () => {
    alert("hi");
  };
  // 그래프에 넣어줄 데이터 state값
  const data = [
    {
      id: "섭취칼로리량",
      color: "hsl(268, 70%, 50%)",

      data: [
        {
          x: "",
          y: 0,
        },
        {
          x: "월",
          y: 80,
        },
        {
          x: "화",
          y: 41,
        },
        {
          x: "수",
          y: 109,
        },
        {
          x: "목",
          y: 72,
        },
        {
          x: "금",
          y: 105,
        },
        {
          x: "토",
          y: 22,
        },
        {
          x: "일",
          y: 279,
        },
      ],
    },
    {
      id: "소모칼로리량",
      color: "hsl(242, 70%, 50%)",
      data: [
        {
          x: "월",
          y: 93,
        },
        {
          x: "화",
          y: 231,
        },
        {
          x: "수",
          y: 216,
        },
        {
          x: "목",
          y: 154,
        },
        {
          x: "금",
          y: 294,
        },
        {
          x: "토",
          y: 232,
        },
        {
          x: "일",
          y: 21,
        },
      ],
    },
    {
      id: "잔여칼로리량",
      color: "hsl(124, 70%, 50%)",
      data: [
        {
          x: "월",
          y: 269,
        },
        {
          x: "화",
          y: 139,
        },
        {
          x: "수",
          y: 294,
        },
        {
          x: "목",
          y: 242,
        },
        {
          x: "금",
          y: 85,
        },
        {
          x: "토",
          y: 190,
        },
        {
          x: "일",
          y: 201,
        },
      ],
    },
  ];
  // const data1 = [
  //   {
  //     id: "섭취칼로리량",
  //     color: "hsl(268, 70%, 50%)",

  //     data: [
  //       {
  //         x: "",
  //         y: 0,
  //       },
  //       {
  //         x: "월",
  //         y: 80,
  //       },
  //       {
  //         x: "화",
  //         y: 41,
  //       },
  //       {
  //         x: "수",
  //         y: 109,
  //       },
  //       {
  //         x: "목",
  //         y: 72,
  //       },
  //       {
  //         x: "금",
  //         y: 105,
  //       },
  //       {
  //         x: "토",
  //         y: 22,
  //       },
  //       {
  //         x: "일",
  //         y: 279,
  //       },
  //     ],
  //   },
  //   {
  //     id: "소모칼로리량",
  //     color: "hsl(242, 70%, 50%)",
  //     data: [
  //       {
  //         x: "월",
  //         y: 93,
  //       },
  //       {
  //         x: "화",
  //         y: 231,
  //       },
  //       {
  //         x: "수",
  //         y: 216,
  //       },
  //       {
  //         x: "목",
  //         y: 154,
  //       },
  //       {
  //         x: "금",
  //         y: 294,
  //       },
  //       {
  //         x: "토",
  //         y: 232,
  //       },
  //       {
  //         x: "일",
  //         y: 21,
  //       },
  //     ],
  //   },
  //   {
  //     id: "잔여칼로리량",
  //     color: "hsl(124, 70%, 50%)",
  //     data: [
  //       {
  //         x: "1월",
  //         y: 269,
  //       },
  //       {
  //         x: "2월",
  //         y: 139,
  //       },
  //       {
  //         x: "3월",
  //         y: 294,
  //       },
  //       {
  //         x: "4월",
  //         y: 242,
  //       },
  //       {
  //         x: "5월",
  //         y: 85,
  //       },
  //       {
  //         x: "6월",
  //         y: 190,
  //       },
  //       {
  //         x: "7월",
  //         y: 201,
  //       },
  //       {
  //         x: "8월",
  //         y: 155,
  //       },
  //       {
  //         x: "9월",
  //         y: 11,
  //       },
  //       {
  //         x: "10월",
  //         y: 56,
  //       },
  //       {
  //         x: "11월",
  //         y: 221,
  //       },
  //       {
  //         x: "12월",
  //         y: 71,
  //       },
  //     ],
  //   },
  // ];
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
            data={data}
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
        <div className="test">
          <div className="left">
            {/* <FontAwesomeIcon icon={faChevronLeft} onClick={hi} /> <h2>{week==="주간"?주간을 보여주고:아니면 연간을 보여줘라}주간</h2> */}
            <FontAwesomeIcon icon={faChevronLeft} onClick={hi} />
          </div>
          <p>주간</p>
          <div className="right">
            <FontAwesomeIcon icon={faChevronRight} onClick={hi} />
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
