import React from "react"; 
import "./SearchEngineStyles.css";


export default function SearchEngine() {
   return (
    <form id="search-form">
      <div className="form-group">
        <input
          type="text"
          placeholder="Enter City"
          autocomplete="off"
          id="search-city-input"
        />

        <button type="submit" value="Search" className="searchbutton">
          <i className="fas fa-search"></i>
        </button>
        <button className="location">
          <i className="fas fa-search"></i>

        </button>
      </div>
    </form>
  );
}
