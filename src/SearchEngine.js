import React, {useState} from "react"; 
import CurrentForecast from "./CurrentForecast";
import FormattedDate from "./FormattedDate";
import axios from "axios";
import "./SearchEngineStyles.css";


export default function SearchEngine(props) {
  const [city, setCity] = useState(props.defaultCity);
   const [ready, setReady] = useState(false);
const [date, setDate] = useState({});
  
  function search(){
const apiKey = "087f0ef7dd56ce65c496f8db8c2c8fa0";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse)
  }

  function handleSubmit (event) {
event.preventDefault();
search();
   }

   function handleCityChange(event) {
setCity(event.target.value);
   }

function handleResponse(response) {
setDate ({
  date: new Date(response.data.dt * 1000)
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
          autocomplete="off"
          id="search-city-input"
          onChange={handleCityChange}
        />

        <button type="submit" value="Search" className="searchbutton">
          <i className="fas fa-search"></i>
        </button>
        <button className="location">
          <i className="fas fa-search"></i>

        </button>
      </div>
    </form>
    <div className="CurrentInfo">
      <h5 id="current-city">Enter city above...</h5>
      <FormattedDate date={date.date} />
      </div>
      <CurrentForecast city={city}/>
      
  </div> );
  }

else {
search();
return "Loading"

} }

  




