import React from "react";
import SearchEngine from "./SearchEngine";

import WeeklyForecast from "./WeeklyForecast";
import GitHubUrl from "./GitHubUrl";
import './App.css';

export default function App() {
  return (
    
    <div className="App">
     <SearchEngine defaultCity="Dubai"/>
<div className="weeklyForcast">
     <WeeklyForecast />
    </div>
    <GitHubUrl />
    </div>
  );
}


