import React from "react";
import SearchEngine from "./SearchEngine";
import CurrentInfo from "./CurrentInfo";
import CurrentForecast from "./CurrentForecast";
import ExtraWeatherInfo from "./ExtraWeatherInfo";
import WeeklyForecast from "./WeeklyForecast";
import './App.css';

function App() {
  return (
    
    <div className="App">
     <SearchEngine />
     <CurrentInfo />
     <CurrentForecast />
     <ExtraWeatherInfo />
<div className="weeklyForcast">
     <WeeklyForecast />
    </div>
    </div>
  );
}

export default App;
