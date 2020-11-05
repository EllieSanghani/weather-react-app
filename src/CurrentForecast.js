import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./CurrentForecastStyles.css";

export default function CurrentForecast(props) {
  return (
    <div id="forcast">
      <WeatherIcon code={props.data.icon} alt={props.data.description} />
     
      <strong className="dayTemp">{props.data.temp}</strong>
​
      <div id="converter">
        <button className="cTemp">
          <a className="active" id="celcius" href="#/">
            °C
          </a>
        </button>
        <small className="divider"> | </small>
        <button className="fTemp">
          <a id="fahrenheit" href="#/">
            °F
          </a>
        </button>
      </div>
    </div>
  );
}
