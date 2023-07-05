import axios from "axios";

export const getFoodSchedule = async () => {
  try {
    const res = await axios.get(`/api${location.pathname}/food`);
    const result = res.data;
    return result;
  } catch (err) {
    console.log(err);
  }
};

export const getHealthSchedule = async () => {
  try {
    const res = await axios.get(`/api${location.pathname}/hel`);
    const result = res.data;
    return result;
  } catch (err) {
    console.log(err);
  }
};
