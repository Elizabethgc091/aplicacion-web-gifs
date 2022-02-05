import React from "react";

/** Style */
import "./searchBar.css";
/** Imports */
import iconSearch from "./iconSearch.svg";

export default function SearchBar() {
  return (
    <div className="container-search-bar">
      <div className="container-search">
        <input type="text" placeholder="Busca gifs"></input>
        <button>
          {" "}
          <img src={iconSearch} alt="icono-busqueda" />
        </button>
      </div>
    </div>
  );
}
