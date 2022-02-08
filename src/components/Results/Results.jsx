import React from "react";
import GiphyCard from "../GiphyCard/GiphyCard";

import "./results.css";

export default function Results() {
  return (
    <div className="container-results">
      <div>Resultados de la búsqueda</div>
      <div className="giphy-grid ">
        <GiphyCard />
      </div>
    </div>
  );
}
