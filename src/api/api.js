import axios from "axios";
// const axiosInstance = axios.create({
//   timeout: 1000,
// });

// 음식목록 데이터 불러오기
export const getFoodCate = async () => {
  try {
    const res = await axios.get("/api/foodcate");
    const data = res.data;
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

// 운동카테고리목록 Get 기능
export const getHealthCate = async () => {
  try {
    const res = await axios.get("/api/exrec/exlist");
    const result = res.data;
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

export const getDiet = async () => {
  try {
    const res = await axios.get("/api/exrec/exlist");
    const result = res.data;
    console.log(result);
  } catch (error) {
    console.error(error);
  }
};
