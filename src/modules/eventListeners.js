import  { provideWeatherData } from './dataProvider'
import { displayCurrent } from './uiControl';
import provideWeatherData from './dataProvider'

const form = document.querySelector("form");
const unitsToggle = document.getElementById("units");
let weatherData

form.addEventListener("submit", handleSubmit);

async function handleSubmit(e) {
  e.preventDefault();
  const inputValue = document.querySelector("#location-input").value;
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

