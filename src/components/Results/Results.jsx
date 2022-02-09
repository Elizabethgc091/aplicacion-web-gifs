import React, { useContext } from "react";
import { AppContext } from "../Context/GifContext";
import GiphyCard from "../GiphyCard/GiphyCard";

import "./results.css";

export default function Results() {
  const { isLoading } = useContext(AppContext);
  return (
    <div className="container-results">
      <div className="text-results">Resultados de la búsqueda</div>
      <div className="giphy-grid ">
        <GiphyCard />
        {isLoading ? <p>Cargando...</p> : ""}
      </div>
    </div>
  );
}
