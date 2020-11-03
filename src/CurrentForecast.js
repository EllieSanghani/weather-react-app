import React, {useState} from "react";
import axios from "axios"
import "./CurrentForecastStyles.css";

export default function CurrentForecast() {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  

  

  function handleResponse(response) {
console.log(response.data);
setWeatherData ({
  temp : Math.round(response.data.main.temp),
  cityName : response.data.name,
icon: "http://openweathermap.org/img/wn/10d@2x.png"
        

})




setReady(true);
  }

if (ready) {
return (

      <div id="forcast">
        <img
          src= {weatherData.icon} alt="Weather-icon"
          id="mainIcon" 
          className="dayEmoji"
        />
       
        <strong className="dayTemp">{weatherData.temp}</strong>
     
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

} else {

  const apiKey = "087f0ef7dd56ce65c496f8db8c2c8fa0";
  const cityName = "New York"
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse)

return "Loading...";
}



  
}
