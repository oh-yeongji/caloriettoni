import axios from "axios";

export const getFoodSchedule = async () => {
  try {
    const res = await axios.get(`/api${location.pathname}/food?iuser=1`);
    const result = res.data;
    return result;
  } catch (err) {
    console.log(err);
  }
};

export const getHealthSchedule = async () => {
  try {
    const res = await axios.get(`/api${location.pathname}/hel?iuser=1`);
    const result = res.data;
    return result;
  } catch (err) {
    console.log(err);
  }
};

// 달력 text get

export const getScheduleTextData = async setScheduleText => {
  try {
    const res = await axios.get(`/api/user/1`);
    const result = res.data;
    setScheduleText([result]);
  } catch (err) {
    console.log(err);
  }
};

// 달력 text patch

export const patchScheduleTextData = async (iuser, editScheduleText) => {
  try {
    const res = await axios.patch(`/api/user`, {
      iuser: iuser,
      goal: editScheduleText,
    });
    const result = res.data;
    // console.log(result);
  } catch (error) {
    console.log(error);
  }
};

// 달력 기록 리스트 get

export const getScheduleList = async yearMonth => {
  try {
    const res = await axios.get(`/api/calender/1?yearMonth=${yearMonth}`);
    const result = res.data;
    // console.log(result);
    return result;
  } catch (err) {
    console.log(err);
  }
};
