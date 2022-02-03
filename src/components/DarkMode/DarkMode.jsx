import React, { useState } from "react";
import "./darkMode.css";

export default function DarkMode({ darkModeEnabled, toggleDarkMode }) {
  let base = "btn-dark-mode";
  let estiloDinamico = darkModeEnabled ? "dark" : "ligth";
  return (
    <div>
      <button
        className={base + " " + estiloDinamico}
        type="button"
        onClick={toggleDarkMode}
      >
        {darkModeEnabled ? "MODO LIGTH" : "MODO DARK"}
      </button>
    </div>
  );
}
