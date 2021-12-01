import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="overview">
        <h1>{props.data.city} </h1>
        <h2>
          <div className="float-left">
            <WeatherIcon code={props.data.icon} />
          </div>
          <span className="temperature">
            {Math.round(props.data.temperature)}{" "}
          </span>
        </h2>

        <ul>
          <li className="text-capitalize">{props.data.description} </li>
          <li>
            <FormattedDate date={props.data.date} />
          </li>
          <li>Humidity: {props.data.humidity}%</li>
          <li>Wind: {Math.round(props.data.wind)} km/h</li>
        </ul>
      </div>
    </div>
  );
}
