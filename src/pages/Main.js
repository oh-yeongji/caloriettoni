import React, { useEffect, useState } from "react";
import { Button } from "antd";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ResponsiveLine } from "@nivo/line";
import { Total, Mypage, GraphTotal, TodayTotal, Logo } from "../style/MainCss";
import {
  getHealthGraph,
  getMypageInfo,
  getTodayMinusCalorie,
} from "../api/mainfetch";
import moment from "moment";
// 서버에서 가지고 오는 샘플 데이터

const Main = () => {
  //// useState 시작
  //mypage info
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState(null);
  const [height, setHeight] = useState(null);
  const [weight, setWeight] = useState(null);
  const [bmr, setBmr] = useState(null);
  const [pic, setPic] = useState("");

  //chart Data
  const [chartData, setChartData] = useState([]);
  // 주간저장 state
  const [showPeriod, setShowPeriod] = useState("");
  // 차트 출력 데이터 저장하기
  const [stDay, setStDay] = useState(0);

  //하루 총 섭취/소비 데이터
  const [todayPlusData, setTodayPlusData] = useState(0);
  const [todayMinusData, setTodayMinusData] = useState(0);

  //// useState 시작


  ////useEffect 시작
  //개인정보 화면 출력
  useEffect(() => {
    getMypageInfoLoad();
  }, []);

  //그래프 화면에 화면 출력
  useEffect(() => {
    getStartAndEndOfWeek(0);
  }, []);

  //총 소모/섭취 칼로리 화면 출력
  useEffect(() => {
    getTodayCalorieLoad();
  }, []);

  ////useEffect 끝

  ////handler 함수 시작
  const handleDate = () => {
    getStartAndEndOfWeek(0);
  };
  const handleDatePrev = () => {
    const day = stDay + 1;
    getStartAndEndOfWeek(day);
  };

  ////handler 함수 끝

  ////get 기능 시작

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
      setBmr(res.bmr);
      setPic(res.usepic);
    } catch (err) {
      console.log(err);
    }
  };

  //graph get 기능
  const getHealthGraphLoad = async (_start, _end) => {
    try {
      const res = await getHealthGraph(_start, _end);
      const tempDataWeek = [
        {
          id: "섭취칼로리량",
          color: "hsl(268, 70%, 50%)",
          data: [],
        },
        {
          id: "소모칼로리량",
          color: "hsl(242, 70%, 50%)",
          data: [],
        },
        {
          id: "잔여칼로리량",
          color: "hsl(124, 70%, 50%)",
          data: [],
        },
      ];
      res.graphData.map((item, index) => {
        const tempEat = { x: item.createdAt, y: item.eatKcal };
        tempDataWeek[0].data[index] = tempEat;
        const tempHel = { x: item.createdAt, y: item.helkcal };
        tempDataWeek[1].data[index] = tempHel;
        const tempExk = { x: item.createdAt, y: item.exKcal };
        tempDataWeek[2].data[index] = tempExk;
      });
      setChartData(tempDataWeek);
    } catch (err) {
      console.log(err);
    }
  };

  //오늘 소모,섭취 칼로리 get 기능
  const getTodayCalorieLoad = async () => {
    try {
      const res = await getTodayMinusCalorie();
      console.log(res);

      setTodayPlusData(res.eatKcal);
      setTodayMinusData(res.helkcal);
    } catch (err) {
      console.log(err);
    }
  };

  ////get 기능 끝



  
  // 차트 출력 데이터 저장하기
  const getStartAndEndOfWeek = _day => {
    console.log(_day);
    var today = new Date();
    var day = today.getDay(); // 현재 요일 (0부터 일요일, 6까지 토요일)

    // 이번 주의 시작 날짜
    var startDate = new Date(today);
    startDate.setDate(today.getDate() - day - 7 * _day);
    // 이번 주의 마지막 날짜
    var endDate = new Date(today);
    endDate.setDate(today.getDate() + (day - (7 * _day - 4)));
    getHealthGraphLoad(
      moment(startDate).format("YYYY-MM-DD"),
      moment(endDate).format("YYYY-MM-DD"),
    );
    setStDay(_day);
  };

  //날짜 출력
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const formatDate = `${year}-${month}-${day}`;

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
                <p> BMR:</p>
                <p>{bmr}</p>
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
              min: "-10000",
              max: "10000",
              stacked: false, //누적? 수정시 false엿음
              reverse: false,
            }}
            // yFormat=" >-.2f"
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
              tickValues: [
                -10000, -8000, -6000, -4000, -2000, 0, 2000, 4000, 6000, 8000,
                10000,
              ],
              legendOffset: 0,
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
          <div
            className="left"
            onClick={handleDatePrev}
            style={{ cursor: "pointer" }}
          >
            <FontAwesomeIcon icon={faChevronLeft} />
            지난주
          </div>
          <p>{showPeriod}</p>
          <div
            className="right"
            onClick={handleDate}
            style={{ cursor: "pointer" }}
          >
            이번주
          </div>
        </div>
      </GraphTotal>

      <TodayTotal>
        {/* 칼로리 섭취량 */}
        <div className="todayUp">
          <p>현재 섭취 칼로리량</p>
          <p className="upCalorie">{todayPlusData}</p>
        </div>
        <div className="todayDown">
          <p>현재 소모 칼로리량</p>
          <p className="downCalorie">{todayMinusData}</p>
        </div>
      </TodayTotal>
    </Total>
  );
};

export default Main;
