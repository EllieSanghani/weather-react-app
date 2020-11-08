import React, {useState} from "react";
import WeatherForecastPreview from "./WeatherForecastPreview"
import axios from "axios";
import "./WeeklyForecastStyles.css";

export default function WeeklyForecast(props) {
const [loaded, setLoaded] = useState (false);
const [weeklyData, setWeeklyData] = useState (null);


function handleForecastResponse(response) {
setWeeklyData(response.data);
setLoaded(true);

}


if (loaded && props.data.cityName === weeklyData.city.name) { 
Math.round(weeklyData.list[0].main.temp_max);

return (


  <div className="week row" id="forecast">
<WeatherForecastPreview data={weeklyData.list[0]}/>
<div className="vl"></div>
<WeatherForecastPreview data={weeklyData.list[1]}/>
<div className="vl"></div>
<WeatherForecastPreview data={weeklyData.list[2]}/>
<div className="vl"></div>
<WeatherForecastPreview data={weeklyData.list[3]}/>
<div className="vl"></div>
<WeatherForecastPreview data={weeklyData.list[4]}/>
         </div>);
 } 
 else {

const apiKey = "087f0ef7dd56ce65c496f8db8c2c8fa0";
    let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.data.cityName}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(handleForecastResponse);


return null;


 }

}

