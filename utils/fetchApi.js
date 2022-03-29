import axios from "axios";
export const baseUrl = "https://bayut.p.rapidapi.com";
export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "X-RapidAPI-Host": "bayut.p.rapidapi.com",
      "X-RapidAPI-Key": "4ef8590048msh5350f4effeca8bcp195e32jsnb98bc462a0fa",
    },
  });
  return data;
};
