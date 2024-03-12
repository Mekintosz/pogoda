import { getUnits } from "./modules/sideFunctions.js";
import {
  displayCurrent,
  displayLocation,
  displayData,
  displayAstro,
} from "./modules/uiControl.js";
import displayHourlyWeather from "./modules/displayHourlyWeather.js";
import displayNextTwoDay from "./modules/displayNextTwoDay.js";
import provideWeatherData from "./modules/dataProvider.js";

(async function startApp() {
  weatherData = await provideWeatherData("Wroclaw");
  if (weatherData) {
    displayAll(weatherData);
  }
})();

let weatherData;
const form = document.querySelector("form");
const unitsToggle = document.getElementById("units");
form.addEventListener("submit", handleSubmit);
unitsToggle.addEventListener("change", () => {
  if (weatherData) displayAll();
});

function displayAll() {
  const airQualityDisplay = document.querySelector(".air-quality");
  displayLocation(weatherData.location);
  displayCurrent(weatherData.currentWeather, getUnits());
  displayData(weatherData.airQuality, airQualityDisplay);
  displayHourlyWeather(weatherData.hourly, getUnits());
  displayNextTwoDay(weatherData.twoDayData, getUnits());
  displayAstro(weatherData.astro);
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
