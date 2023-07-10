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

//graph get 기능
export const getHealthGraph = async (_start, _end) => {
  try {
    // console.log(
    //   `/api/main/graph?iuser=${1}&startDate=${_start}&endDate=${_end}`,
    // );
    const res = await axios.get(
      `/api/main/graph?iuser=${1}&startDate=${_start}&endDate=${_end}`,
    );
    const result = res.data;
    console.log(result);
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
