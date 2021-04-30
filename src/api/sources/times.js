import groupBy from "../common.js";

export const mapping = item => {
  const { publishedDate: date, url, publicationTitle: title, category: sectionName, id } = { ...item };
  return Object.assign({}, { date, url, title, sectionName, id });
};

const getTimesArticles = async () => {
  const results = [
    {
      id: 234567,
      publicationTitle: "Article 1",
      publishedDate: "2019-12-20",
      url: "https://google.com",
      category: "Sports"
    },
    {
      id: 23567,
      publicationTitle: "Article 2",
      publishedDate: "2019-12-10",
      url: "https://google.com",
      category: "Business"
    }
  ];
  return groupBy(results, "category", mapping);
};

export default getTimesArticles;
