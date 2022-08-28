import React from "react";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <section className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <section className="definitionExample" key={index}>
            <div>
              <strong>➢ </strong>
              {definition.definition}
              <br />
              <em>{definition.example}</em>
            </div>
          </section>
        );
      })}
    </section>
  );
}
