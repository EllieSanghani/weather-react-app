import React from "react";
import "./ExtraWeatherInfoStyles.css";

export default function ExtraWeatherInfo() {
  return (
    <main className="extraInfo">
      <div className="row">
          
        <div className="col-6">
          <span id="humidity">
            <strong>
              Humidity <i className="fas fa-tint"></i>:{" "}
            </strong>{" "}
            --
          </span>
          
          <span id="wind-speed">
            <strong>
              {" "}
              Windspeed <i className="fas fa-wind"></i>:
            </strong>{" "}
            --
          </span>
       
        
          <span id="currentWeather">
            <strong>
              {" "}
              Condition <i className="fas fa-cloud"></i>:
            </strong>{" "}
            --
          </span>
        </div>
      </div>
    </main>
  );
}
