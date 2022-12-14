import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  if (props.synonyms[0]) {
    return (
      <div className="Synonyms">
        <h3>Synonyms</h3>
        <ul>
          {props.synonyms.map(function (synonyms, index) {
            return <li key={index}>{synonyms}</li>;
          })}
        </ul>
      </div>
    );
  } else {
    return null;
  }
}
