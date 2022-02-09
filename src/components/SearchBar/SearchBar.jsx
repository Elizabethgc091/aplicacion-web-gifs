import React, { useContext, useEffect, useState } from "react";

/** Style */
import "./searchBar.css";
/** Imports */
import iconSearch from "./iconSearch.svg";
import { AppContext } from "../Context/GifContext";

export default function SearchBar() {
  const [valueSearch, setValueSearch] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const { setGif } = useContext(AppContext);
  const { setIsLoading } = useContext(AppContext);

  /** Funcion que guarda la palabra ingresada en el buscador */
  function searchWord(event) {
    setValueSearch(event.target.value);
    console.log(valueSearch);
  }

  /** Fetch */
  useEffect(() => {
    if (isSearching && valueSearch.length > 0) {
      setIsLoading(true);
      fetch(
        `https://api.giphy.com/v1/gifs/search?api_key=Idcf4kl34F4NqGMRtxFAeFaKJ4NVrC8h&q=${valueSearch}&limit=9&offset=0&lang=en`
      )
        .then((response) => response.json())
        .then((data) => {
          setIsSearching(false);
          setGif(data.data);
          setIsLoading(false);
        })
        .catch((error) => console.log(error));
    }
  }, [isSearching, valueSearch]);

  return (
    <div className="container-search-bar">
      <div className="container-search">
        <input
          type="text"
          placeholder="Busca gifs"
          onChange={searchWord}
          value={valueSearch}
        />
        <button
          onClick={() => {
            setIsSearching(true);
          }}
        >
          {" "}
          <img src={iconSearch} alt="icono-busqueda" />
        </button>
      </div>
    </div>
  );
}
