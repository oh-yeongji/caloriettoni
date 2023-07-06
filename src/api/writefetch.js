import axios from "axios";

//************************운동********************

// 운동카테고리목록 Get 기능(칼로리랑 묶어줄것임?)
export const getHealthCate = async () => {
  try {
    const res = await axios.get("/api/exrec/exlist");

    const result = res.data;
    // console.log(result);
    return result;
  } catch (err) {
    console.log(err);
  }
};
////헬스 칼로리 GET기능
export const getHealthCalorie = async () => {
  try {
    const res = await axios.get("");
    const result = res.data;
    console.log(result);
    return result;
  } catch (err) {
    console.log(err);
  }
};

//*******************식단**************************

//식단 칼로리 get기능(모든음식카테고리 조회)
export const getDietCalorie = async () => {
  try {
    const res = await axios.get("/api/foodcate");
    const result = res.data;
    // console.log(result);
    return result;
  } catch (err) {
    console.log(err);
  }
};

export const postDietRecord = async (_ifood, _ical, _uefTime, _ctnt) => {
  try {
    const data = {
      ifood: _ifood,
      ical: _ical,
      uefTime: _uefTime,
      ctnt: _ctnt,
    };
    const res = await axios.post("/api/foodrecord", data);
    const result = res.data;
    return result;
  } catch (err) {
    console.log(err);
    //0을 리턴해주라고 적혀있음. Example value
    return 0;
  }
};

export const postDietRecordIuser = async _obj => {
  // try {
  //   const data = {
  //     ifood: _ifood,
  //     ical: _ical,
  //     uefTime: _uefTime,
  //     ctnt: _ctnt,
  //   };
  //   const res = await axios.post(
  //     //변하는 값이기때문에 ${}처리
  //     `/api/foodrecord/${1}?ifood=${_ifood}&ical=${_ical}&uefTime=${_uefTime}&ctnt=${_ctnt}`,
  //     data,
  //   );
  //   const result = res.data;
  //   return result;
  // } catch (err) {
  //   console.log(err);
  //   return 0;
  // }
};
