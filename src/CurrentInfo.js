import React, {useState} from "react";
import axios from "axios";
import "./CurrentInfoStyles.css";

export default function CurrentInfo() {
  const [ready, setReady] = useState(false);
const [date, setDate] = useState(null);

function handleResponse(response) {
setDate ("Weds 12.00")

setReady(true);
  }
  

if (ready) {
  return (
    <div className="CurrentInfo">
      <h5 id="current-city">Enter city above...</h5>
      <h5 id="current-date">{date}</h5>
    </div>
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
