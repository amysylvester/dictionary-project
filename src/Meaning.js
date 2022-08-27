import React from "react";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <div>
              <strong>Definition:</strong>
              {definition.definition}
              <br />
              <em>{definition.example}</em>
            </div>
          </div>
        );
      })}
    </div>
  );
}
