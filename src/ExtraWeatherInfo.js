import React, {useState} from "react";
import axios from "axios"
import "./ExtraWeatherInfoStyles.css";

export default function ExtraWeatherInfo() { 
  const [ready, setReady] = useState(false);
const [weatherInfo, setWeatherInfo] = useState({});


  function handleResponse(response) {
console.log(response.data);
setWeatherInfo ({
  humidity : Math.round(response.data.main.humidity),
  wind : response.data.wind.speed,
  condition: response.data.weather[0].main,
  cityName : response.data.name,

})
setReady(true);
  }
  

if (ready) {
return (

    <main className="extraInfo">
      <div className="row">
          
        <div className="col-4">
          <span id="humidity">
            <strong>
              Humidity <i className="fas fa-tint"></i>:{" "}
            </strong>{" "}
            {weatherInfo.humidity}
          </span>
          
          <span id="wind-speed">
            <strong>
              {" "}
              Windspeed <i className="fas fa-wind"></i>:
            </strong>{" "}
            {weatherInfo.wind}
          </span>
       
        
          <span id="currentWeather">
            <strong>
              {" "}
              Condition <i className="fas fa-cloud"></i>:
            </strong>{" "}
            {weatherInfo.condition}
          </span>
        </div>
      </div>
    </main>
  );
}

else {

  const apiKey = "087f0ef7dd56ce65c496f8db8c2c8fa0";
  //let cityName = document.querySelector("#search-city-input").value;
  const cityName = "London"
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse)

return "Loading...";

} }
