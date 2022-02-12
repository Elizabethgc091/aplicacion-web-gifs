import React, { useContext } from "react";
import { AppContext } from "../Context/GifContext";

import "./giphyCard.css";

/**
 * El contenedor de cada GIF
 * @param {gif} - El objeto gif
 * @returns GiphyCard
 */

export default function GiphyCard({ gif, index }) {
  return (
    <div key={`${index + 1}-${gif.images.downsized_medium.url}`}>
      <a href={gif.url} target="_blank">
        <img className="giphy-card" src={gif.images.downsized_medium.url} />
      </a>
    </div>
  );
}
