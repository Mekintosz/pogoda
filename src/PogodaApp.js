import  { getUnits } from './modules/sideFunctions.js'
import { displayCurrent, displayLocation, displayData } from './modules/uiControl.js'
import provideWeatherData from './modules/dataProvider.js'

export default function displayAll() {
    const airQualityDisplay = document.querySelector(".air-quality");
  let bigData = provideWeatherData()
    displayLocation(bigData);
    displayCurrent(bigData.current, getUnits());
    displayData(bigData.air_quality, airQualityDisplay);
  }