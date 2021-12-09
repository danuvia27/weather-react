import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="overview">
        <h1>{props.data.city} </h1>
        <div className="row">
          <div className="col-11">
            <div className="clearfix">
              <div className="float-left">
                <div class="d-flex justify-content-center ">
                  <WeatherIcon code={props.data.icon} size={52} />
                  <div className="float-left">
                    <WeatherTemperature celsius={props.data.temperature} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="d-flex justify-content-center">
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
      </div>
    </div>
  );
}
