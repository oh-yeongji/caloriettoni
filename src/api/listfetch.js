import axios from "axios";
import { useLocation } from "react-router-dom";

export const getDietList = async () => {
  try {
    const location = useLocation();
    const res = await axios.get(`/List${location.pathname}/food`);
    const result = res.data;
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

export const getHealthList = async () => {
  try {
    const location = useLocation();
    const res = await axios.get(`/List${location.pathname}/hel`);
    const result = res.data;
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};
