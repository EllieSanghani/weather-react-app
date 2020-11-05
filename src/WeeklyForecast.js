import React from "react";
import "./WeeklyForecastStyles.css";

export default function WeeklyForecast() {
return (
   
   <div className="week" id="forecast">

          <div className="col-3">
            <img
              src="http://openweathermap.org/img/wn/10d@2x.png" alt="tuesday-icon"
          
              id="icon"
              className="emoji"
            />
            <div className="col-12">
              <h5 className="temp">
                <strong className="day">15
                ° </strong> 
                <span> 10°</span> 
              </h5>
              <div className="col-12">
                <p>Tuesday</p>
              </div>
            </div>
            </div>
            <div className="vl"></div> 
            <div className="col-3">
            <img
              src="http://openweathermap.org/img/wn/10d@2x.png" alt="wednesday-icon"
         
              id="icon"
              className="emoji"
            />
            <div className="col-12">
              <h5 className="temp">
                <strong className="day">16
                ° </strong> 
                <span> 10°</span> 
              </h5>
              <div className="col-12">
                <p>Wednesday</p>
              </div>
            </div>
            </div>
            <div className="vl"></div> 
            <div className="col-3">
            <img
              src="http://openweathermap.org/img/wn/10d@2x.png" alt="thursday-icon"
          
              id="icon"
              className="emoji"
            />
            <div className="col-12">
              <h5 className="temp">
                <strong class="day">17
                ° </strong> 
                <span> 13°</span> 
              </h5>
              <div className="col-12">
                <p>Thursday</p>
              </div>
            </div>
            </div>
            <div className="vl"></div> 
            <div className="col-3">
            <img
              src="http://openweathermap.org/img/wn/10d@2x.png" alt="friday-icon"
        
              id="icon"
              className="emoji"
            />
            <div className="col-12">
              <h5 className="temp">
                <strong className="day">20
                ° </strong> 
                <span> 12°</span> 
              </h5>
              <div className="col-12">
                <p>Friday</p>
              </div>
            </div>
            </div>
           
          </div>
        

);} 