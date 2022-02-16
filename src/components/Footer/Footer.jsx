import React from "react";
/** Style */
import "./footer.css";
import logogithub from "./logogithub.png";

export default function Footer() {
  return (
    <div className="container-footer">
      <div className="txt-gifos">
        <p>GIFOS</p>
        <p>ACAMICA</p>
      </div>
      <div className="container-info">
        <p>Elizabeth González</p>
        <a href="https://github.com/Elizabethgc091" target="_blank">
          <img src="https://img.icons8.com/glyph-neue/64/000000/github.png" />
        </a>
        <a href="https://www.linkedin.com/in/elizabethgc091/" target="_blank">
          <img src="https://img.icons8.com/ios-filled/50/000000/linkedin.png" />
        </a>
      </div>
    </div>
  );
}
