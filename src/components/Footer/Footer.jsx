import React from "react";
/** Style */
import "./footer.css";
import linkedin from "./linkedin.svg";

export default function Footer() {
  return (
    <div className="container-footer">
      <div className="copyright">
        <p>© 2022 - GIFOS</p>
        <p>ACAMICA</p>{" "}
      </div>

      <div className="info-creator">
        <p>Elizabeth González</p>
        <div className="social-netwoks">
          <div className="github">
            <a href="https://github.com/Elizabethgc091" target="_blank">
              <img src="https://img.icons8.com/glyph-neue/64/000000/github.png" />
            </a>
          </div>
          <div className="linkedin">
            <a
              href="https://www.linkedin.com/in/elizabethgc091"
              target="_blank"
            >
              <img src={linkedin} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
