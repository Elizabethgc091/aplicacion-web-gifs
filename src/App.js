import React, { useState } from "react";

/** style App */

import "./App.css";
/** imports components */
import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar/SearchBar";
import Results from "./components/Results/Results";
import Footer from "./components/Footer/Footer";
import DarkMode from "./components/DarkMode/DarkMode";

function App() {
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);
  function toggleDarkMode() {
    setDarkModeEnabled(!darkModeEnabled);
  }
  return (
    <div className={`App ${darkModeEnabled ? "dark" : "ligth"}`}>
      <Header darkModeEnabled={darkModeEnabled} />
      <DarkMode
        darkModeEnabled={darkModeEnabled}
        toggleDarkMode={toggleDarkMode}
      />
      <SearchBar darkModeEnabled={darkModeEnabled} />
      <Results darkModeEnabled={darkModeEnabled} />
      <Footer />
    </div>
  );
}

export default App;
