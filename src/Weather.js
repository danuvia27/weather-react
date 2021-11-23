import React, { useState } from "react";
import axios from "axios";
import Search from "./Search";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: "Friday 10:00",
      description: response.data.weather[0].description,
      iconUrl: "http://openweathermap.org/img/wn/50d@2x.png",
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="container">
          <div className="weather-app-wrapper">
            <div className="weather-app">
              <div className="overview">
                <h1>{weatherData.city} </h1>
                <h2>
                  <img
                    src={weatherData.iconUrl}
                    alt={weatherData.description}
                  />

                  <span className="temperature">
                    {Math.round(weatherData.temperature)}{" "}
                  </span>
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
                  <span className="text-capitalize">
                    {weatherData.description}{" "}
                  </span>
                  <li>
                    <span>{weatherData.date}</span>
                  </li>
                  <li>Humidity: {weatherData.humidity}%</li>
                  <li>Wind: {weatherData.wind} km/h</li>
                </ul>
                <Search />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "6ebe89c8349b2767cc0894daf553186c";
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
