import React from "react";
import "./CurrentForecastStyles.css";
export default function CurrentForecast(props) {
  return (
    <div id="forcast">
      <img
        src={props.data.icon}
        alt="Weather-icon"
        id="mainIcon"
        className="dayEmoji"
      />
      <strong className="dayTemp">{props.data.temp}</strong>
​
      <div id="converter">
        <button class="cTemp">
          <a class="active" id="celcius" href="#/">
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
