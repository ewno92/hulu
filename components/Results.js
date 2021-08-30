import React from "react";
import requests from "../utils/requests";
import Thumbnail from "./Thumbnail";

const Results = ({ results }) => {
  results = results.results.results;
  // console.log(results);
  return (
    <div>
      {results.map((result) => (
        <Thumbnail key={result.id} result={result} />
      ))}
    </div>
  );
};

export default Results;
