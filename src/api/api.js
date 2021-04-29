import getGuardianArticles from "./sources/guardian";
import getTimesArticles from "./sources/times";

const sources = [
  {
    title: "guardian",
    method: getGuardianArticles
  },
  { title: "times", method: getTimesArticles }
];

const getResults = async (query, selectedApis) => {
  const filteredResults = await Promise.all(
    selectedApis.map(async api => {
      const source = sources.find(source => source.title === api);
      if (source) return { source: api, results: await source.method(query) };
      else return null;
    })
  );
  return filteredResults;
};

export default getResults;
