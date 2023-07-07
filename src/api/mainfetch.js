import axios from "axios";

//마이페이지 유저 정보 get기능
export const getMypageInfo = async () => {
  try {
    const res = await axios.get("/api/user/1");
    const result = res.data;
    // console.log(result);
    return result;
  } catch (err) {
    console.log(err);
  }
};

//총 섭취칼로리/소모 칼로리 get기능
export const getTodayMinusCalorie = async () => {
  try {
    const res = await axios.get("/api/main/1");
    const result = res.data;
    console.log(result);
    return result;
  } catch (err) {
    console.log(err);
  }
};
