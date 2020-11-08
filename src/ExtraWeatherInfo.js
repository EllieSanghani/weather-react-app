import React from "react";
import "./ExtraWeatherInfoStyles.css";

export default function ExtraWeatherInfo(props) { 
return (

    <main className="extraInfo">
      <div className="row">
          
        <div className="col-4">
          <span id="humidity">
          <strong>
              Humidity 
              <img src = "https://image.flaticon.com/icons/png/512/63/63123.png" alt ="humidity icon" className="extraIcon"/>:{" "}
            </strong>{" "}
            {props.data.humidity}%
          </span>
          </div>
             <div className="col-4">
          <span id="wind-speed">
          <strong>
              {" "}
              Windspeed 
               <img src = "https://upload-icon.s3.us-east-2.amazonaws.com/uploads/icons/png/2468012341543238955-512.png" alt ="wind icon" className="extraIcon"/>:
            </strong>{" "}
            {props.data.wind} km/h
          </span>
       </div>
           <div className="col-4">
          <span id="currentWeather">
           <strong>
              Condition<img src = "https://upload-icon.s3.us-east-2.amazonaws.com/uploads/icons/png/3426801271548329610-512.png" alt ="conditions icon" className="extraIcon"/>:
            </strong>{" "}
            {props.data.condition}
          </span>
        </div>
        </div>
        
    </main>
  );
}
