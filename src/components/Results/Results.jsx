import React from "react";
import "./results.css";

export default function Results({ darkModeEnabled }) {
  let base = "container-txt-results";
  let estiloDark = darkModeEnabled ? "dark" : "ligth";
  return (
    <div className="container-results">
      <div className={base + " " + estiloDark}>Resultados de la búsqueda</div>
      <div className="seccion-gifs">seccion de gifs</div>
    </div>
  );
}
