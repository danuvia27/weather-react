import React from "react";

export default function Forecast() {
  return (
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
  );
}
