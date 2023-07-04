import axios from "axios";

const axiosInstance = axios.create({
  timeout: 1000,
});

// health
export const getHealthCate = async () => {
  try {
    const res = await axiosInstance.get("/api/exrec/exlist");
    const result = res.data;
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};
