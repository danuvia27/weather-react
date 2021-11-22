import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <form>
          <input
            class="form-control"
            list="datalistOptions"
            id="search-text-input"
            placeholder="Search Weather..."
          />

          <button type="submit" className="btn btn-primary search-button">
            Search
          </button>
        </form>
        <Weather />
        <div className="weather-forecast" id="forecast">
          <div className="row">
            <div className="col-2">
              <div className="weather-forecast-date">
                <img
                  src="http://openweathermap.org/img/wn/50d@2x.png"
                  alt=""
                  width="42"
                />

                <div className="weather-forecast-temperatures">
                  <span className="weather-forecast-temperature-max">22°</span>
                  <span className="weather-forecast-temperature-min">18°</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer>
        This project was coded by Carolina Vallecillo and is{""}
        <a href="https://github.com/danuvia27/weather-react" target="_blank">
          open-sourced on GitHub
        </a>
      </footer>
    </div>
  );
}
