import axios from "axios";
export const BASE_URL = "https://www.googleapis.com/youtube/v3";
const KEY = "AIzaSyD82Z44coJToMBO_lhvlujaABO3zQOz5ok";
const options = {
  params: {
    part: "snippet",
    maxResults: 50,
    key: KEY,
  },
  headers: {},
};

export const fetchFromAPI = async (url) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
