import React from "react";
import "./header.css";
import DarkMode from "../DarkMode/DarkMode";

import ilustraHeader from "./ilustraHeader.svg";

export default function Header({ darkModeEnabled }) {
  let base = "text-large";
  let estiloDinamico = darkModeEnabled ? "dark" : "ligth";
  return (
    <div className="main-content">
      <div className="content-text">
        <div className={base + " " + estiloDinamico}>
          ¡Inspirate y busca los mejores
        </div>
        <div className={"txt-small" + " " + estiloDinamico}>GIFS!</div>
      </div>
      <div className="content-img">
        <img src={ilustraHeader} alt="img-header" />
      </div>
    </div>
  );
}
