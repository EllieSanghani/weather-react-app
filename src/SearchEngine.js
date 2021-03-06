import React, { useState } from "react";
import CurrentForecast from "./CurrentForecast";
import FormattedDate from "./FormattedDate";
import ExtraWeatherInfo from "./ExtraWeatherInfo";
import WeeklyForecast from "./WeeklyForecast";
import axios from "axios";
import "./SearchEngineStyles.css";
export default function SearchEngine(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  function search() {
    const apiKey = "087f0ef7dd56ce65c496f8db8c2c8fa0";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleCityChange(event) {
    setCity(event.target.value);
  }
  function handleResponse(response) {
    console.log(response.data.weather[0].icon)
    setWeatherData({
      temp: Math.round(response.data.main.temp),
      cityName: response.data.name,
      icon: response.data.weather[0].icon,
      date: new Date(response.data.dt * 1000),
      humidity : Math.round(response.data.main.humidity),
      wind : response.data.wind.speed,
      condition: response.data.weather[0].main,
  
    });

    setReady(true);
  }
  if (ready) {
    return (
      <div>
        <form id="search-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              placeholder="Enter City"
              autoComplete="off"
              id="search-city-input"
              onChange={handleCityChange}
            />
            <button type="submit" value="Search" className="searchbutton">
             <img src = "https://cdn0.iconfinder.com/data/icons/google-material-design-3-0/48/ic_search_48px-512.png" alt ="search icon"/>
            </button>
          
          </div>
        </form>
        <div className="CurrentInfo">
          <h5 id="current-city">{weatherData.cityName}</h5>
          <FormattedDate date={weatherData.date} />
        </div>
        <CurrentForecast data={weatherData} />
         <ExtraWeatherInfo data={weatherData}/>
         <div className="weeklyForcast">
         <WeeklyForecast data={weatherData} />
          </div>
      </div>
    );
  } else {
    search();
    return "Loading";
  }
}
