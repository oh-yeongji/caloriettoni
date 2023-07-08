import axios from "axios";

//************************운동********************

// 운동카테고리목록+분당칼로리 Get 기능
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

//헬스 분당칼로리 GET기능 계산하기누를때
export const getHealthCalorie = async (helName, time) => {
  try {
    const res = await axios.get(`/api/exrec/subinfo?ihelCate=${1}&time=${10}`);
    const result = res.data;
    console.log(result);
    return result;
  } catch (err) {
    console.log(err);
  }
};

////헬스 분당칼로리 GET기능 계산하기누를때
// export const getHealthCalculate = async () => {
//   try {
//     const res = await axios.get("/api/exrec/kcalbyex?ihelCate=1");
//     const result = res.data;
//     console.log(result);
//     return result;
//   } catch (err) {
//     console.log(err);
//   }
// };

//운동 기록(post)
export const postHealthRecord = async (ical, uhKcal, ctnt, time) => {
  try {
    const data = {
      ical: ical,
      uhKcal: uhKcal,
      ctnt: ctnt,
      time: time,
    };
    const res = await axios.get("/api/exrec", data);
    const result = res.data;
    return result;
  } catch (err) {
    console.log(err);
    return 0;
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

// export const postDietRecordIuser = async _obj => {
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
// };

//식단 이미지 사진 post기능
// const postDietUpload = async () => {
//   try {
//     const data = {
//       foodName: foodName,
//     };

//     const res = await axios.post(
//       "/api/foodcate?foodName=string&f_kcal=0",
//       data,
//     );
//     const result = res.data;
//     return result;
//     // const res= await axios.post(`/api/foodcate${}?foodName=string&f_kcal=0`)
//   } catch (err) {
//     console.log(err);
//     return 0;
//   }
// };
