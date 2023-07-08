import React, { useEffect, useState } from "react";
import { Button } from "antd";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ResponsiveLine } from "@nivo/line";
import { Total, Mypage, GraphTotal, TodayTotal, Logo } from "../style/MainCss";
import { getMypageInfo, getTodayMinusCalorie } from "../api/mainfetch";
// 서버에서 가지고 오는 샘플 데이터
// 연간 데이터
const dataYear = [
  {
    id: "섭취칼로리량",
    color: "hsl(268, 70%, 50%)",

    data: [
      {
        x: "1월",
        y: 0,
      },
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
  //mypage info
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState(null);
  const [height, setHeight] = useState(null);
  const [weight, setWeight] = useState(null);
  const [bmi, setBmi] = useState(null);
  const [pic, setPic] = useState("");

  //chart Data
  // const [chartData, setChartData] = useState([]);
  const [chartData, setChartData] = useState([]);
  //하루 총 섭취/소비 데이터
  const [TodayPlusData, setTodayPlusData] = useState({});
  const [TodayMinusData, setTodayMinusData] = useState({});

  // 하루 총 섭취/소비 임시 데이터
  const TodayData = {
    eatKcal: 0,
    helkcal: 0,
    exKcal: 0,
  };

  //마이페이지 get정보
  const getMypageInfoLoad = async () => {
    try {
      const res = await getMypageInfo();
      console.log(res);
      setName(res.name);
      setGender(res.gender);
      setAge(res.age);
      setHeight(res.height);
      setWeight(res.weight);
      setBmi(res.bmr);
      setPic(res.usepic);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getMypageInfoLoad();
  }, []);
  //화면에 한번만 뿌리기
  useEffect(() => {
    setChartData(dataWeek);
  }, []);

  //오늘 소모,섭취 칼로리
  const getTodayMinusCalorieLoad = async () => {
    try {
      //데이터 들어오면 이거 두개 살리기
      // const res = await getTodayMinusCalorie();
      // console.log(res);

      setTodayMinusData(TodayData);
      setTodayPlusData(TodayData);
      // console.log(TodayMinusData);
      // console.log(TodayPlusData);
    } catch (err) {
      console.log(err);
    }
  };

  //서버에서 자료가져올때 자료받아올 자리
  useEffect(() => {
    getTodayMinusCalorieLoad();
  }, []);

  console.log(pic);
  // 주간 및 연간 저장 state
  const [showPeriod, setShowPeriod] = useState("주간");

  const handleDate = () => {
    setShowPeriod("주간");
    setChartData(dataWeek);
  };
  const handleYear = () => {
    setShowPeriod("연간");
    setChartData(dataYear);
  };

  // 버튼의 크기 default:middle
  // const [size, setSize] = useState("large");
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  const formatDate = `${year}-${month}-${day}`;
  // console.log(pic);
  return (
    <Total>
      <Logo>
        <img src="../images/logotop.png" alt="logo" />
      </Logo>
      <div className="formatDate">{formatDate}</div>
      <Mypage>
        <div className="privacyTotal">
          <div className="privacyInfo">
            <div className="privacyLeft">
              <img
                src={`http://192.168.0.144:5006/img/user/1/` + pic}
                alt="사용자 사진"
              />
            </div>
            <div className="privacyRight">
              <div>
                <p>이름:</p>
                <p>{name}</p>
              </div>
              <div>
                <p> 성별:</p>
                <p>{gender}</p>
              </div>
              <div>
                <p>나이:</p>
                <p>{age}</p>
              </div>
              <div>
                <p> 키:</p>
                <p>{height}</p>
              </div>
              <div>
                <p>몸무게:</p>
                <p>{weight}</p>
              </div>
              <div>
                <p> BMI:</p>
                <p>{bmi}</p>
              </div>
            </div>
          </div>
          <div className="btns">
            <Button type="primary" style={{ top: "-32px", marginLeft: "9px" }}>
              정보수정
            </Button>
            <Button style={{ top: "-32px", marginLeft: "12px" }}>
              로그아웃
            </Button>
          </div>
        </div>
      </Mypage>

      <GraphTotal>
        <div className="graph">
          {/* 그래프 표현 */}
          <ResponsiveLine
            data={chartData}
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
              legendOffset: 36,
              // 가로축 범례 표시 위치
              legendPosition: "middle",
            }}
            // 세로축 범례
            axisLeft={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
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
                anchor: "top",
                direction: "row",
                justify: false,
                translateX: 40,
                translateY: -38,
                itemsSpacing: 0,
                itemDirection: "left-to-right",
                itemWidth: 90,
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

      <TodayTotal>
        {/* 칼로리 섭취량 */}
        <div className="todayUp">
          <p>현재 섭취 칼로리량</p>

          <p className="upCalorie">{TodayData.eatKcal}</p>
          {/* <p className="upCalorie">{TodayPlusData.eatKcal}</p> */}
          {/* <p className="upCalorie">업</p> */}
        </div>
        <div className="todayDown">
          <p>현재 소모 칼로리량</p>
          <p className="downCalorie">{TodayData.helkcal}</p>
          {/* <p className="downCalorie">{TodayMinusData.helkcal}</p> */}
          {/* <p className="downCalorie">다운</p> */}
        </div>
      </TodayTotal>
    </Total>
  );
};

export default Main;