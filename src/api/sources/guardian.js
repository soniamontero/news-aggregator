import axios from "axios";

const API_BASE = process.env.REACT_APP_API_BASE_GUARDIAN;

const getGuardianArticles = async query => {
  const apiKey = process.env.REACT_APP_API_KEY_GUARDIAN;
  const { data } = await axios.get(`${API_BASE}/search?api-key=${apiKey}&q=${query}`);
  console.log(data);
  const results = data.response ? data.response.results : {};
  return results;
  // redesign object architecture for data cosnsitency if multiple apis
};

export default getGuardianArticles;
