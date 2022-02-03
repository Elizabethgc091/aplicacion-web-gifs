import React from "react";
import "./darkMode.css";

export default function DarkMode({ dark }) {
  function btnDarkMode(params) {
    console.log("dark Mode Activo");
  }
  return (
    <div>
      <button className="btn-dark-mode" type="button" onClick={btnDarkMode}>
        Dark Mode
      </button>
    </div>
  );
}
