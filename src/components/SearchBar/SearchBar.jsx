import React from "react";

/** Style */
import "./searchBar.css";
/** Imports */
import iconSearch from "./iconSearch.svg";

export default function SearchBar({ darkModeEnabled }) {
  let base = "container-search";
  let estiloDark = darkModeEnabled ? "dark" : "ligth";
  return (
    <div className="container-search-bar">
      <div className={base + " " + estiloDark}>
        <input type="text" placeholder="Busca gifs"></input>
        <button>
          {" "}
          <img src={iconSearch} alt="icono-busqueda" />
        </button>
      </div>
    </div>
  );
}
