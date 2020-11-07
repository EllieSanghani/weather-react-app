import React, {useState} from "react";
import WeatherIcon from "./WeatherIcon"
import axios from "axios";
import "./WeeklyForecastStyles.css";

export default function WeeklyForecast(props) {
const [loaded, setLoaded] = useState (false);
const [weeklyData, setWeeklyData] = useState (null);


function handleForecastResponse(response) {
setWeeklyData(response.data);
setLoaded(true);

}


if (loaded) {
Math.round(weeklyData.list[0].main.temp_max);

return (


  <div className="week" id="forecast">

      <div className="col-3">
        <WeatherIcon code={weeklyData.list[0].weather[0].icon} />
      <div className="col-12">
        <h5 className="temp">
          <strong className="day"> {Math.round(weeklyData.list[0].main.temp_max)}° </strong>
            <span> {Math.round(weeklyData.list[0].main.temp_min)}°</span>
        </h5>
      <div className="col-12">
          <p>{new Date (weeklyData.list[0].dt * 1000).getHours()}:00</p>
      </div>
     </div>
    </div>
        <div className="vl"></div>
          <div className="col-3">
             <WeatherIcon code={weeklyData.list[1].weather[0].icon} />
          <div className="col-12">
          <h5 className="temp">
            <strong className="day">{Math.round(weeklyData.list[1].main.temp_max)}° </strong>
             <span> {Math.round(weeklyData.list[1].main.temp_min)}°</span>
          </h5>
        <div className="col-12">
          <p>{new Date (weeklyData.list[1].dt * 1000).getHours()}:00</p>
        </div>
        </div>
        </div>
          <div className="vl"></div>
            <div className="col-3">
                 <WeatherIcon code={weeklyData.list[2].weather[0].icon} />
          <div className="col-12">
              <h5 className="temp">
                <strong className="day">{Math.round(weeklyData.list[2].main.temp_max)}° </strong>
                <span> {Math.round(weeklyData.list[2].main.temp_min)}°</span>
              </h5>
            <div className="col-12">
              <p>{new Date (weeklyData.list[2].dt * 1000).getHours()}:00</p>
            </div>
          </div>
        </div>
        <div className="vl"></div>
        <div className="col-3">
            <WeatherIcon code={weeklyData.list[3].weather[0].icon} />
        <div className="col-12">
            <h5 className="temp">
                <strong className="day">{Math.round(weeklyData.list[3].main.temp_max)}° </strong>
                <span> {Math.round(weeklyData.list[3].main.temp_min)}°</span>
            </h5>
        <div className="col-12">
        <p>{new Date (weeklyData.list[3].dt * 1000).getHours()}:00</p>
        </div>
        </div>
        </div>
         </div>);
 } 
 else {


const apiKey = "087f0ef7dd56ce65c496f8db8c2c8fa0";
    let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.data.cityName}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(handleForecastResponse);


return null;


 }

 


}

