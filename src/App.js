import React from "react";
import SearchEngine from "./SearchEngine";


import GitHubUrl from "./GitHubUrl";
import './App.css';

export default function App() {
  return (
    
    <div className="App">
     <SearchEngine defaultCity="Dubai"/>

    <GitHubUrl />
    </div>
  );
}


