import React, { useContext } from "react";
import { AppContext } from "../Context/GifContext";
import GiphyCard from "../GiphyCard/GiphyCard";
import "./results.css";

/**
 * El contenedor de resultados
 * @returns Results
 */
export default function Results() {
  const { isLoading, gifs } = useContext(AppContext);

  return (
    <div className="container-results">
      <div className="text-results">Resultados de la búsqueda</div>
      <div className="giphy-grid ">
        {gifs.map((gif, index) => {
          return <GiphyCard gif={gif} index={index} />;
        })}
        {gifs.length === 0 ? "no hay resultados" : ""}
        {isLoading ? <p>Cargando...</p> : ""}
      </div>
    </div>
  );
}
