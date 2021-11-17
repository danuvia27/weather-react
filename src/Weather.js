import React from "react";
import Search from "./Search";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="container">
        <div className="weather-app-wrapper">
          <div className="weather-app">
            <div className="overview">
              <h1> San Diego </h1>
              <h2>
                <img src="http://openweathermap.org/img/wn/50d@2x.png" />

                <span className="temprature"> 24 </span>
                <span className="unit">
                  <a href="/" className="active">
                    °C{" "}
                  </a>
                  |{" "}
                  <a href="/" className="current">
                    °F
                  </a>
                </span>
              </h2>
              <ul>
                <li></li>
                <span> Cloudy </span>
                <li>
                  <span> Friday 10 am</span>
                </li>
                <li>Humidity:25%</li>
                <li>Wind: 2 km/h</li>
              </ul>
              <Search />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
