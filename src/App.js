/** style App */
import "./App.css";
/** imports components */
import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar/SearchBar";
import Results from "./components/Results/Results";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <Results />
      <Footer />
    </div>
  );
}

export default App;
