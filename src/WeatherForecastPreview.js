import React from "react"; 
import WeatherIcon from "./WeatherIcon";
import "./WeeklyForecastStyles.css";

export default function WeatherForecastPreview(props) {

function hours() { 
    let date = new Date (props.data.dt * 1000);
    let hours = date.getHours();

    return `${hours}:00`;

}

function maxTemperature() {
let maxTemperature = Math.round(props.data.main.temp_max);
console.log (props.data.main.temp_max)
return `${maxTemperature}°`;

}

function minTemperature() {
let minTemperature = Math.round(props.data.main.temp_min);


return ` ${minTemperature}°`;


}


return (

<div className="forecastPreview">

 <div className="col-3" >
        <WeatherIcon code={props.data.weather[0].icon} />
      <div className="col-1">
        <h5 className="temp">
          <strong className="day"> {maxTemperature()} </strong>
            <span> {minTemperature()}</span>
        </h5>
      <div className="col-12">

{hours()}

      </div>
     </div>
    </div>

</div>

);
} 
