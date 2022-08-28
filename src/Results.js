import React from "react";
import Meaning from "./Meaning";
import Synonyms from "./Synonyms";
import Phonetic from "./Phonetic";
import "./Results.css";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <section className="wordPhonetics">
          <h2>
            <strong>{props.results.word}</strong>
          </h2>
          {props.results.phonetics.map(function (phonetic, index) {
            return (
              <div key={index}>
                <Phonetic phonetic={phonetic} />
              </div>
            );
          })}
        </section>
        <section className="definition">
          {props.results.meanings.map(function (meaning, index) {
            return (
              <div key={index}>
                <Meaning meaning={meaning} />
              </div>
            );
          })}
        </section>
        <section className="synonyms">
          {props.results.meanings.map(function (meaning, index) {
            return (
              <div key={index}>
                <Synonyms synonyms={meaning.synonyms} />
              </div>
            );
          })}
        </section>
      </div>
    );
  } else {
    return null;
  }
}
