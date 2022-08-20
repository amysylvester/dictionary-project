import "./App.css";
import Search from "./Search";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1 className="Title">Dictionary App</h1>
        </header>
        <main>
          <Search />
        </main>
        <footer className="App-footer">Coded by Amy C Sylvester</footer>
      </div>
    </div>
  );
}
