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
export const getHealthCalculate = async (helName, time) => {
  try {
    const res = await axios.get(
      `/api/exrec/subinfo?ihelCate=${helName}&time=${time}`,
    );
    const result = res.data;
    console.log("결과", result);
    return result;
  } catch (err) {
    console.log(err);
  }
};

//운동 기록(post)
export const postHealthRecord = async _data => {
  try {
    const res = await axios.post("/api/exrec", _data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    // const res = await axios.post("http://localhost:3000/todos");
    const data = res.data;
    console.log(data);
    return data;
  } catch (err) {
    console.log(err);
    return {};
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

//식단 post 기능
export const postDietRecord = async (_formData, _data) => {
  // console.log(
  //   `/api/foodrecord?ifood=${_data.ifood}&iuser=${_data.iuser}&resDate=${_data.recDate}&uefTime=${_data.uefTime}&ctnt=${_data.ctnt}`,
  // );
  try {
    const res = await axios.post(
      // `/api/foodrecord?ifood=${_data.ifood}&iuser=${_data.iuser}&resDate=${_data.recDate}&uefTime=${_data.uefTime}&ctnt=${_data.ctnt}`
      "api/foodrecord",
      _formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      },
    );
    // const res = await axios.post("http://localhost:3000/todos");
    const data = res.data;
    console.log(data);
    return data;
  } catch (err) {
    console.log(err);
    return {};
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
