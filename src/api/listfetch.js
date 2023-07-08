import axios from "axios";

// List Delete 기능

export const deleteFoodList = async _id => {
  try {
    const res = await axios.delete(`/api/list/1/meal`);
    const result = res.data;
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

export const deleteHealthList = async _id => {
  try {
    const res = await axios.delete(`/api/list/1/hel`);
    const result = res.data;
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};
