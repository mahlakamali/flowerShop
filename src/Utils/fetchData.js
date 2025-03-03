import { message } from "../App";

const fetchData = async (url, option = {}) => {
  try {
    const res = await fetch(import.meta.env.VITE_API + url, option);
    const data = await res.json();
    return data.data;
  } catch (error) {
    message({type:'error',message:'Network error!'})
  }
};

export default fetchData;