import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Search.css";

export default function Search() {
  let [keyword, setKeyword] = useState("");
  let [definition, setDefinition] = useState(null);

  function handleResponse(response) {
    setDefinition(response.data[0]);
  }

  function search(event) {
    event.preventDefault();

    // documentation: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Search">
      <form onSubmit={search}>
        <input type="search" onChange={handleKeywordChange} />
      </form>
      <Results definition={definition} />
    </div>
  );
}
