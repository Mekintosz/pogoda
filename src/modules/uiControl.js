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
  location.innerText = data.location.name;
  country.innerText = data.location.country;
  latitude.innerText = `${data.location.lat}°`;
  longitude.innerText = `${data.location.lon}°`;
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

export { displayCurrent, displayLocation, displayData }
