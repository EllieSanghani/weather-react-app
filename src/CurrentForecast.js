import React, {useState} from "react";
import WeatherIcon from "./WeatherIcon";
import "./CurrentForecastStyles.css";

export default function CurrentForecast(props) {
const [unit, setUnit] = useState("metrics"); 



function convertToFahrenheit(event) {
  event.preventDefault(); 
  setUnit("imperial");
}

function convertToCelcius(event) {
  event.preventDefault(); 
  setUnit("metrics");
}



if (unit === "metrics") {
let celcius = props.data.temp;
return (
  
  <div id="forcast">
      <WeatherIcon code={props.data.icon} alt={props.data.description} />
     

      <strong className="dayTemp">{celcius}</strong>
​
      <div id="converter">
         
            °C
        
        <small className="divider"> | </small>
        <button className="fTemp">
          <a id="fahrenheit" href="/" onClick={convertToFahrenheit}>
            °F
          </a>
        </button>
      </div>
    </div>
  );
} else {

  let celcius = props.data.temp;
  let fahrenheit = (celcius * 9 / 5) + 32;
  return (

<div id="forcast">
      <WeatherIcon code={props.data.icon} alt={props.data.description} />
     

      <strong className="dayTemp">{fahrenheit}</strong>
​
      <div id="converter">
        <button className="cTemp">
         
          <a id="celcius" href="/" onClick={convertToCelcius}> 
            °C
          </a>
        </button>
        <small className="divider"> | </small>

            °F
      
      </div>
    </div>

  )
}


}



