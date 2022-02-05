import React from "react";
import "./header.css";
import ilustraHeader from "./ilustraHeader.svg";

export default function Header() {
  return (
    <div className="main-content">
      <div className="content-text">
        <div className="text-large">¡Inspirate y busca los mejores</div>
        <div className="text-small">GIFS!</div>
      </div>
      <div className="content-img">
        <img src={ilustraHeader} alt="img-header" />
      </div>
    </div>
  );
}
