import React from "react";
import searchAutoComplete from "./searchAutoComplete.svg";
import "./autocompleteResults.css";

export default function AutocompleteResults({
  valueSearch,
  autocompleteResults,
  setValueSearch,
  setIsSearching,
}) {
  return (
    <div>
      {valueSearch.length > 0 && autocompleteResults.length > 0 ? (
        <div className="container-autocomplete-results">
          <ol>
            {autocompleteResults.map((result, index) => {
              return (
                <div
                  onClick={() => {
                    setValueSearch(result.name);
                    setIsSearching(true);
                  }}
                  key={`${index + 1}-${result.name}`}
                >
                  <div
                    key={`${index + 1}-${result.name}`}
                    className="search-autocomplete"
                  >
                    <img
                      src={searchAutoComplete}
                      alt={`${index + 1}-${result.name}`}
                    />

                    <li key={`${index + 1}-${result.name}`}>{result.name}</li>
                  </div>
                </div>
              );
            })}
          </ol>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
