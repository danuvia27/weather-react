import React from "react";
import ReactDOM from "react-dom";
import Weather from "./Weather";
import "bootstrap/dist/css/bootstrap.css";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Weather />
      <footer>
        This project was coded by Carolina Vallecillo and is{""}
        <a href="https://github.com/danuvia27/weather-react" target="_blank">
          open-sourced on GitHub
        </a>
      </footer>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
