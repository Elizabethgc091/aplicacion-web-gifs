import React, { useContext } from "react";
import { AppContext } from "../Context/GifContext";

import "./giphyCard.css";

export default function GiphyCard() {
  const { gif } = useContext(AppContext);
  return (
    <div className="giphy-grid">
      {gif.map((item, index) => {
        return (
          <div>
            <a href={item.url} target="_blank">
              <img
                key={`${index + 1}-${item.images.downsized_medium.url}`}
                className="giphy-card"
                src={item.images.downsized_medium.url}
              />
            </a>
          </div>
        );
      })}
    </div>
  );
}
