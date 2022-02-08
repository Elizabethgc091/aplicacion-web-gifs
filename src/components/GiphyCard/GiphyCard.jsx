import React from "react";
import gifs from "./gifs";
import "./giphyCard.css";

export default function GiphyCard() {
  return (
    <div className="giphy-grid">
      {gifs.data.map((gif) => {
        return (
          <img
            className="giphy-card"
            src={gif.images.downsized_medium.url}
          ></img>
        );
      })}
    </div>
  );
}
