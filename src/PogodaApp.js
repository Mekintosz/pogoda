import  { getUnits } from './modules/sideFunctions.js'
import { displayCurrent, displayLocation, displayData } from './modules/uiControl.js'
import provideWeatherData from './modules/dataProvider.js'


let weatherData

function displayAll() {
    const airQualityDisplay = document.querySelector(".air-quality");
    displayLocation(weatherData);
    displayCurrent(weatherData.current, getUnits());
    displayData(weatherData.air_quality, airQualityDisplay);
  }

const form = document.querySelector("form");
const unitsToggle = document.getElementById("units");

form.addEventListener("submit", handleSubmit);

async function handleSubmit(e) {
  e.preventDefault();
  let inputValue = document.querySelector("#location-input").value;
  weatherData = await provideWeatherData(inputValue ? inputValue : "honolulu");
  if (weatherData) {
    displayAll(weatherData);
    inputValue = "";
  }
}

unitsToggle.addEventListener("change", () => {
if (weatherData)
  displayCurrent(weatherData.current, getUnits())
}
);