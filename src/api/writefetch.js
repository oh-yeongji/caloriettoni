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

    return result;
  } catch (err) {
    console.log(err);
  }
};

//식단 post 기능
export const postDietRecord = async (_formData, _data) => {
  try {
    const res = await axios.post("api/foodrecord", _formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    const data = res.data;
    console.log(data);
    return data;
  } catch (err) {
    console.log(err);
    return {};
  }
};
