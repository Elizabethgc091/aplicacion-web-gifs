import React, { useState, useContext, useEffect } from "react";

/** style App */

import "./App.css";

/** logos */
import logoHeader from "./components/Header/logoHeader.svg";
import logoHeaderDark from "./components/Header/logoHeaderDark.svg";
/** imports components */
import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar/SearchBar";
import Results from "./components/Results/Results";
import Footer from "./components/Footer/Footer";
import DarkMode from "./components/DarkMode/DarkMode";
import { AppContext } from "./components/Context/GifContext";

function App() {
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);
  const { gifs, setGifs } = useContext(AppContext);
  function toggleDarkMode() {
    setDarkModeEnabled(!darkModeEnabled);
  }

  /** Fetch trending */

  useEffect(() => {
    fetch(
      "https://api.giphy.com/v1/gifs/trending?api_key=Idcf4kl34F4NqGMRtxFAeFaKJ4NVrC8h&limit=15&rating=g"
    )
      .then((response) => response.json())
      .then((data) => {
        setGifs(data.data);
      });
  }, []);

  return (
    <div className={`App ${darkModeEnabled ? "dark" : "ligth"}`}>
      <header className="container-top main-margin">
        <img
          src={darkModeEnabled ? logoHeaderDark : logoHeader}
          alt="logo-header"
        />
        <DarkMode
          darkModeEnabled={darkModeEnabled}
          toggleDarkMode={toggleDarkMode}
        />
      </header>
      <div className="container-header">
        <Header />
      </div>
      <SearchBar />
      <Results />
      <Footer />
    </div>
  );
}

export default App;
