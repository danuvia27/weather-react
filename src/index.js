import React from "react";
import ReactDOM from "react-dom";
import Weather from "./Weather";
import "bootstrap/dist/css/bootstrap.css";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Weather defaultCity="San Diego" />
      <footer className="footer">
        This project was coded by Carolina Vallecillo and is {""}
        <a
          href="https://github.com/danuvia27/weather-react"
          target="_blank"
          rel="noopener noreferrer"
        >
          open-sourced on GitHub
        </a>{" "}
        and{" "}
        <a
          href="https://clever-noyce-9be2d7.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          hosted on Netlify
        </a>
      </footer>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
