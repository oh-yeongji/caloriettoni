import axios from "axios";

//************************운동********************

//운동 사진 업로드 Get기능
export const getHealthUpload = async () => {
  try {
    const res = await axios.get("");
    const result = res.data;
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};
// 운동카테고리목록 Get 기능
export const getHealthCate = async () => {
  try {
    const res = await axios.get("/api/exrec/exlist");

    const result = res.data;
    console.log(result);
    return result;
  } catch (err) {
    console.log(err);
  }
};

//*******************식단**************************

export const getDietCalorie = async () => {
  try {
    const res = await axios.get("api/foodcate");
    const result = res.data;
    // console.log(result);
    return result;
  } catch (err) {
    console.log(err);
  }
};
