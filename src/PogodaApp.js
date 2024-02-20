import { getUnits } from "./modules/sideFunctions.js";
import {
  displayCurrent,
  displayLocation,
  displayData,
  displayHourlyWeather
} from "./modules/uiControl.js";
import provideWeatherData from "./modules/dataProvider.js";

let weatherData;
const form = document.querySelector("form");
const unitsToggle = document.getElementById("units");
form.addEventListener("submit", handleSubmit);
unitsToggle.addEventListener("change", () => {
  if (weatherData) displayCurrent(weatherData.currentWeather, getUnits());
});

function displayAll() {
  const airQualityDisplay = document.querySelector(".air-quality");
  displayLocation(weatherData.location);
  displayCurrent(weatherData.currentWeather, getUnits());
  displayData(weatherData.airQuality, airQualityDisplay);
  displayHourlyWeather(weatherData.hourly)
}

async function handleSubmit(e) {
  e.preventDefault();
  let inputValue = document.querySelector("#location-input").value;
  weatherData = await provideWeatherData(inputValue ? inputValue : "honolulu");
  if (weatherData) {
    displayAll(weatherData);
    inputValue = "";
  }
}