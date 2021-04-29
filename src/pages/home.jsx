import React, { useEffect, useState } from "react";
import getResults from "../api/api";

const Home = () => {
  const [results, setResults] = useState([]);

  const handleSearch = async query => {
    const results = await getResults(query);
    if (results) setResults(results);
  };

  useEffect(() => {
    console.log(results);
  }, [results]);

  return (
    <div className="home">
      <div className="results">
        <h3>Search and results</h3>
        <input placeholder="Enter your keywords" onChange={e => handleSearch(e.target.value)} />
        <div className="results"></div>
      </div>
    </div>
  );
};

export default Home;
