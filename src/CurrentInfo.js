import React, {useState} from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import "./CurrentInfoStyles.css";

export default function CurrentInfo() {
  const [ready, setReady] = useState(false);
const [date, setDate] = useState({});

function handleResponse(response) {

setDate ({
  date: new Date(response.data.dt * 1000)

});


setReady(true);
  }
  

if (ready) {
  return (
    <div className="CurrentInfo">
      <h5 id="current-city">Enter city above...</h5>
      <FormattedDate date={date.date} />
    </div>
  );
}

else {

  const apiKey = "087f0ef7dd56ce65c496f8db8c2c8fa0";
  const cityName = "London"
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse)

return "Loading...";

} }
