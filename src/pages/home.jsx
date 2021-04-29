import React, { useEffect, useState } from "react";
import getResults from "../api/api";
import Article from "../components/article";

const Home = () => {
  const [results, setResults] = useState([]);
  const [selectedApis, setSelectedApis] = useState([]);

  const handleSearch = async query => {
    const results = await getResults(query, selectedApis);
    if (results) setResults(results);
  };

  const handleSelectApis = name => {
    if (selectedApis.indexOf(name) !== -1) setSelectedApis(selectedApis.filter(api => api !== name));
    else setSelectedApis([...selectedApis, name]);
  };

  const generateApiOptions = () => {
    const apiNames = ["guardian", "times"];
    return apiNames.map((name, i) => (
      <div id={name} key={i}>
        <input
          type="checkbox"
          checked={selectedApis.indexOf(name) !== -1}
          value={name}
          onChange={() => handleSelectApis(name)}
        />
        <label>{name}</label>
      </div>
    ));
  };

  const displayArticles = results => {
    return results.map((articlesGroup, i) => (
      <div className="api" key={i}>
        <h4 className="title">{articlesGroup.source}</h4>
        {Object.keys(articlesGroup.results).map((key, i) => (
          <div className="section" key={i}>
            <h4>{key.toUpperCase()}</h4>
            {articlesGroup.results[key].map((article, i) => (
              <Article content={article} key={i} />
            ))}
          </div>
        ))}
      </div>
    ));
  };

  return (
    <div className="home">
      <div className="results">
        <h3>Search and results</h3>
        <input placeholder="Enter your keywords" onChange={e => handleSearch(e.target.value)} />
        {generateApiOptions()}
        <div className="results">{results ? displayArticles(results) : "No results."}</div>
      </div>
    </div>
  );
};

export default Home;
