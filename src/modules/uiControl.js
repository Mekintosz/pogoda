import { applyIndexColor, createGraphicNode } from './sideFunctions.js'


function displayData(data, container) {
  container.innerHTML = "";
  for (let i of Object.entries(data).flat()) {
    let info = document.createElement("p");
    isNaN(i) ? info.innerText = i : info.innerText = Math.round(i);
    if (!isNaN(i)) applyIndexColor(i, info)
    container.appendChild(info);
  }
}
    
function displayLocation(data) {
  const location = document.getElementById("location");
  const country = document.getElementById("country");
  const latitude = document.getElementById("latitude");
  const longitude = document.getElementById("longitude");

  location.innerText = data.name;
  country.innerText = data.country;
  latitude.innerText = `${data.lat}°`;
  longitude.innerText = `${data.lon}°`;
}

function displayCurrent(data, units) {
  const tempC = document.getElementById("tempC");
  const feelsLike = document.getElementById("feelsLike");
  const condition = document.getElementById("condition");
  const graphicContainer = document.getElementById("graphic");
  const wind = document.getElementById("wind");
  const graphicNode = createGraphicNode(data);

  feelsLike.innerText =
    units === "c"
      ? `Fells like ${Math.round(data.feelslike_c)}°C`
      : `Fells like ${Math.round(data.feelslike_f)}°F`;
  tempC.innerText =
    units === "c"
      ? `${Math.round(data.temp_c)}°`
      : `${Math.round(data.temp_f)}°`;
  condition.innerText = data.condition.text;
  graphicContainer.innerHTML = "";
  graphicContainer.appendChild(graphicNode);
  wind.innerText =
    units === "c"
      ? `${Math.round(data.wind_kph)} km/h`
      : `${Math.round(data.wind_mph)} m/h`;
}

function displayHourlyWeather(data) {
  const hourly = document.getElementById('hourly')
  hourly.innerHTML = ''

  data.forEach(element => {
    let hourlyDisplay = document.createElement('div')
    hourlyDisplay.classList.add('by-hour')
    let hour = document.createElement('span')
    let temp = document.createElement('span')
    let cor = document.createElement('span')
    hour.innerText = `${element.hourlyNewTime}`
    temp.innerText = `${element.temp_c}`
    cor.innerText = `${element.chance_of_rain}`
    hourlyDisplay.append(temp, cor, hour)
    hourly.appendChild(hourlyDisplay)
  });
}

export { displayCurrent, displayLocation, displayData, displayHourlyWeather }
