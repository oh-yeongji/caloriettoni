import axios from "axios";

export const getFoodSchedule = async () => {
  try {
    const res = await axios.get(`/List${location.pathname}/food`);
    const result = res.data;
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

export const getHealthSchedule = async () => {
  try {
    const res = await axios.get(`/List${location.pathname}/hel`);
    const result = res.data;
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};
