import React, { useContext } from "react";
import { AppContext } from "../Context/GifContext";

import "./giphyCard.css";

export default function GiphyCard() {
  const { gifs } = useContext(AppContext);
  return (
    <div className="giphy-grid">
      {gifs.map((item, index) => {
        return (
          <div key={`${index + 1}-${item.images.downsized_medium.url}`}>
            <a href={item.url} target="_blank">
              <img
                className="giphy-card"
                src={item.images.downsized_medium.url}
              />
            </a>
          </div>
        );
      })}
      {gifs.length === 0 ? "no hay resultados" : ""}
    </div>
  );
}
