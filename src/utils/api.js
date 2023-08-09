import axios from "axios";
const base_url = "https://youtube138.p.rapidapi.com";

const options = {
  params: {
    hl: "en",
    gl: "US",
  },
  headers: {
    "X-RapidAPI-Key": "2c46d34fadmshe603f4fd229e787p111a5ajsnc9c0eaa4519e",
    "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
  },
};
//aldığı url yi Apinin temel linkine uç nokta olarak ekleyerek o linke
// istek atan bir yardımcı fonk.

export const fetchDataFromApi = async (url) => {
  const { data } = await axios.get(`${base_url}/${url}`, options);

  return data;
};
