import "./App.css";
import Search from "./Search";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1 className="Title">
            <strong>Dictionary App</strong>
          </h1>
        </header>
        <main>
          <Search />
        </main>
        <footer className="App-footer">
          Coded by Amy C Sylvester. <br />
          Open-sourced on{" "}
          <a
            href="https://github.com/amysylvester/dictionary-project.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>{" "}
          hosted on{" "}
          <a
            href="https://eclectic-frangipane-718eca.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Netlify
          </a>
          .
        </footer>
      </div>
    </div>
  );
}
