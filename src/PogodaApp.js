import { getUnits } from "./modules/sideFunctions.js";
import {
  displayCurrent,
  displayLocation,
  displayData} from "./modules/uiControl.js";
import  displayHourlyWeather  from "./modules/displayHourlyWeather.js";
import displayNextTwoDay from "./modules/displayNextTwoDay";
import provideWeatherData from "./modules/dataProvider.js";


let weatherData;
const form = document.querySelector("form");
const unitsToggle = document.getElementById("units");
form.addEventListener("submit", handleSubmit);
unitsToggle.addEventListener("change", () => {
  if (weatherData) displayAll()
});

function displayAll() {
  const airQualityDisplay = document.querySelector(".air-quality");
  displayLocation(weatherData.location);
  displayCurrent(weatherData.currentWeather, getUnits());
  displayData(weatherData.airQuality, airQualityDisplay);
  displayHourlyWeather(weatherData.hourly, getUnits())
  displayNextTwoDay(weatherData.twoDayData, getUnits())
}

async function handleSubmit(e) {
  e.preventDefault();
  let inputValue = document.querySelector("#location-input").value;
  weatherData = await provideWeatherData(inputValue ? inputValue : "Wroclaw");
  if (weatherData) {
    displayAll(weatherData);
    inputValue = "";
  }
}
