import React, { useContext, useEffect, useState } from "react";

/** Style */
import "./searchBar.css";
/** Imports */
import iconSearch from "./iconSearch.svg";
import AutocompleteResults from "../AutocompleteResults/AutocompleteResults";

import { AppContext } from "../Context/GifContext";

export default function SearchBar() {
  const [valueSearch, setValueSearch] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [autocompleteResults, setAutocompleteResults] = useState([]);
  const [isLoadingAutocomplete, setIsLoadingAutocomplete] = useState(false);
  const { setGifs } = useContext(AppContext);
  const { setIsLoading } = useContext(AppContext);

  /** Funcion que guarda la palabra ingresada en el buscador */

  function searchWord(event) {
    setIsLoadingAutocomplete(true);
    setValueSearch(event.target.value);
  }

  /** Fetch Search */
  useEffect(() => {
    if (isSearching && valueSearch.length > 0) {
      setIsLoading(true);
      fetch(
        `https://api.giphy.com/v1/gifs/search?api_key=Idcf4kl34F4NqGMRtxFAeFaKJ4NVrC8h&q=${valueSearch}&limit=15&offset=0&lang=en`
      )
        .then((response) => response.json())
        .then((data) => {
          setIsSearching(false);
          setGifs(data.data);
          setIsLoading(false);
        })
        .catch((error) => console.log(error));
    }
  }, [isSearching, valueSearch]);

  /** Fetch de autocomplete */

  useEffect(() => {
    if (isLoadingAutocomplete && valueSearch.length > 0) {
      fetch(
        `https://api.giphy.com/v1/gifs/search/tags?api_key=Idcf4kl34F4NqGMRtxFAeFaKJ4NVrC8h&q=${valueSearch}&limit=5&offset=0&lang=en`
      )
        .then((response) => response.json())
        .then((data) => {
          setAutocompleteResults(data.data);
          setIsLoadingAutocomplete(false);
        })
        .catch((error) => console.log(error));
    }
  }, [isLoadingAutocomplete, valueSearch]);

  return (
    <div className="container-search-bar">
      <div className="container-search">
        <div className="container-barra-busqueda">
          <input
            type="text"
            placeholder="Busca gifs"
            onChange={searchWord}
            value={valueSearch}
          />

          <button onClick={() => setIsSearching(true)}>
            <img src={iconSearch} alt="icono-busqueda" />
          </button>
        </div>
        {/** Lista de sugerencias */}

        <AutocompleteResults
          valueSearch={valueSearch}
          autocompleteResults={autocompleteResults}
          setAutocompleteResults={setAutocompleteResults}
          setIsSearching={setIsSearching}
          setValueSearch={setValueSearch}
        />
      </div>
    </div>
  );
}
