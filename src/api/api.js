import getGuardianArticles from "./sources/guardian";
import getTimesArticles from "./sources/times";

const getResults = async query => {
  return await getGuardianArticles(query);
};

export default getResults;
