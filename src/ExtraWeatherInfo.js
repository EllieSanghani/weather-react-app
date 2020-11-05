import React from "react";
import "./ExtraWeatherInfoStyles.css";

export default function ExtraWeatherInfo(props) { 
return (

    <main className="extraInfo">
      <div className="row">
          
        <div className="col-4">
          <span id="humidity">
          <strong>
              Humidity <i className="fas fa-tint"></i>:{" "}
            </strong>{" "}
            {props.data.humidity}%
          </span>
          </div>
             <div className="col-4">
          <span id="wind-speed">
          <strong>
              {" "}
              Windspeed <i className="fas fa-wind"></i>:
            </strong>{" "}
            {props.data.wind} km/h
          </span>
       </div>
           <div className="col-4">
          <span id="currentWeather">
           <strong>
              {" "}
              Condition <i className="fas fa-cloud"></i>:
            </strong>{" "}
            {props.data.condition}
          </span>
        </div>
        </div>
        
    </main>
  );
}
