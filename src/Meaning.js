import React from "react";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div className="definitionExample" key={index}>
            <div>
              <strong>➢ </strong>
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
