import axios from "axios";


// const axiosInstance = axios.create({
//   timeout: 1000,
// });

//************************운동********************

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




//*******************식단**************************

