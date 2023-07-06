import axios from "axios";

// List Delete 기능
export const deleteFoodList = async _id => {
  try {
    const res = await axios.delete(`/api${location.pathname}/food`);
    const result = res.data;
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

export const deleteHealthList = async _id => {
  try {
    const res = await axios.delete(`/api${location.pathname}/hel`);
    const result = res.data;
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};
