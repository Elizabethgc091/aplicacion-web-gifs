import React from "react";
import "./header.css";
import DarkMode from "../DarkMode/DarkMode";
import logoHeader from "./logoHeader.svg";
import ilustraHeader from "./ilustraHeader.svg";

export default function Header() {
  return (
    <div className="container-header">
      <div className="principal-top">
        <img src={logoHeader} alt="logo-header" />
        <DarkMode />
      </div>
      <div className="content-text">
        <div className="text-large">¡Inspirate y busca los mejores</div>
        <div className="txt-small">GIFS!</div>
      </div>
      <div className="content-img">
        <img src={ilustraHeader} alt="img-header" />
      </div>
    </div>
  );
}
