import React from "react";

export default function Synonyms(props) {
  if (props.meaning) {
    return (
      <div className="Synonyms">
        <strong>Synonyms:</strong>
        <ul>
          {props.meaning.synonyms.map(function (synonyms, index) {
            return <li key={index}>{synonyms}</li>;
          })}
        </ul>
      </div>
    );
  } else {
    return null;
  }
}
