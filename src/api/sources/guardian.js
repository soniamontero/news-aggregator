import axios from "axios";
import groupBy from "../common.js";

const API_BASE = process.env.REACT_APP_API_BASE_GUARDIAN;

export const mapping = item => {
  const { webPublicationDate: date, webUrl: url, webTitle: title, sectionName, id } = { ...item };
  const newObject = Object.assign({}, { date, url, title, sectionName, id });
  return newObject;
};

const getGuardianArticles = async query => {
  const apiKey = process.env.REACT_APP_API_KEY_GUARDIAN;
  const { data } = await axios.get(`${API_BASE}/search?api-key=${apiKey}&q=${query}`);
  const results = data.response ? data.response.results : {};

  return groupBy(results, "sectionName", mapping);
};

export default getGuardianArticles;
