import React from "react";
import axios from "axios";
import { useState } from "react";
import "./style.css";

let Weather = () => {
  const [cityName, setCityName] = useState("");
  console.log("cityName :", cityName);

  const [weatherData, setWeatherData] = useState(null);

  let takeInput = (e) => {
    setCityName(e.target.value);
    console.log(cityName);
  };

  let getWeather = (e) => {
    e.preventDefault();
    axios
      .get(
        `https://api.weatherapi.com/v1/current.json?key=1148694ef40c4addba8201236223006&q=${cityName}`
      )
      .then(function (response) {
        setWeatherData(response.data);
        console.log("weatherData : ", weatherData);
      })
      .catch((err) => {
        console.log("error : ", err);
      });
  };
  return (
    <div>
      <h1 id="head"> Weather </h1>

      <form action="" onSubmit={getWeather}>
        <input
          type="text"
          placeholder=" Enter Your City Name : "
          autoFocus
          required
          id="iCity"
          onChange={takeInput}
        />
      </form>

      {weatherData === null ? null : (
        <div id="weatherReport" className="hidden">
          <div id="iconDiv">
            <div id="icon">
              {" "}
              <img src="" alt="" id="wIcon" />
            </div>
            <div id="temp">
              <h2> {weatherData.current.temp_c} &deg;C </h2>
            </div>
          </div>

          <div id="weatherType">
            <h2> {weatherData.current.condition.text} </h2>
          </div>

          <div id="name">
            <div id="cityName" className="name">
              {" "}
              <h2> {weatherData.location.name} </h2>{" "}
            </div>
            <div id="countryName" className="name">
              <h3> {weatherData.location.country} . </h3>
            </div>
          </div>

          <div id="details">
            <div id="div1">
              <div id="precipitations" className="div">
                <p className="cHead"> Precipitation: </p>
                <p className="content"> {weatherData.current.precip_in}% </p>
              </div>

              <div id="humidity" className="div">
                <p className="cHead"> Humidity: </p>
                <p className="content"> {weatherData.current.humidity} % </p>
              </div>
            </div>

            <div id="div2">
              <div id="wind" className="div">
                <p className="cHead"> Wind: </p>
                <p className="content"> {weatherData.current.wind_kph} km/h </p>
              </div>

              <div id="visibility" className="div">
                <p className="cHead"> Visibility: </p>
                <p className="content"> {weatherData.current.vis_km}km/h </p>
              </div>
            </div>
          </div>

          <div id="maxTemp"></div>
          <div id="minTemp"></div>
        </div>
      )}
    </div>
  );
};

export default Weather;
