import React from "react";
import "./CurrentForecastStyles.css";

export default function CurrentForecast() {
  return (

      <div id="forcast">
        <img
          src="http://openweathermap.org/img/wn/10d@2x.png" alt="Weather-icon"
          id="mainIcon" 
          className="dayEmoji"
        />
       
        <strong className="dayTemp">--</strong>
     
      <div id="converter" >
        <button class="cTemp">
          <a class="active" id="celcius" href="#/">
            °C
          </a>
        </button>
      <small className="divider">  | </small>
        <button className="fTemp">
          <a id="fahrenheit" href="#/">
            °F
          </a>
        </button>
        
     </div>
       </div>
  
  );
}
