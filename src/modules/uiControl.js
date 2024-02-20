import { applyIndexColor, createGraphicNode } from "./sideFunctions.js";

function displayData(data, container) {
  container.innerHTML = "";
  for (let i of Object.entries(data).flat()) {
    let info = document.createElement("p");
    isNaN(i) ? (info.innerText = i) : (info.innerText = Math.round(i));
    if (!isNaN(i)) applyIndexColor(i, info);
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
  const temp = document.getElementById("tempC");
  const feelsLike = document.getElementById("feelsLike");
  const condition = document.getElementById("condition");
  const graphicContainer = document.getElementById("graphic");
  const wind = document.getElementById("wind");
  const graphicNode = createGraphicNode(data);

  feelsLike.innerText =
    units === "c"
      ? `Fells like ${Math.round(data.feelslike_c)}°C`
      : `Fells like ${Math.round(data.feelslike_f)}°F`;
  temp.innerText =
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

function displayHourlyWeather(data, units) {
  const hourly = document.getElementById("hourly");
  hourly.innerHTML = "";

  const prevBtn = document.getElementById("prev-day");
  const nextBtn = document.getElementById("next-day");

  let firstDay = 0;
  let lastDay = 6;

  prevBtn.addEventListener("click", () => calculateShortDay());
  nextBtn.addEventListener("click", () => calculateShortDay2());

  function calculateShortDay() {
    if (firstDay === 0) return;
    firstDay -= 1;
    lastDay -= 1;
    hourly.innerHTML = "";
    makeHourlyWeather();
  }

  function calculateShortDay2() {
    if (lastDay === 24) return;
    firstDay += 1;
    lastDay += 1;
    hourly.innerHTML = "";
    makeHourlyWeather();
  }

  function makeHourlyWeather(units) {
    let shortDay = data.slice(firstDay, lastDay);
    shortDay.forEach((element) => {
      const hourlyDisplay = document.createElement("div");
      hourlyDisplay.classList.add("by-hour");
      const hour = document.createElement("span");
      const temp = document.createElement("span");
      const cor = document.createElement("span");
      const graphicNode = createGraphicNode(element);
      hour.innerText = `${element.hourlyNewTime}`;
      temp.innerText =
        units === "c"
          ? `${Math.round(element.temp_c)}°`
          : `${Math.round(element.temp_f)}°`;
      cor.innerText = `${element.chance_of_rain}`;
      hourlyDisplay.append(temp, graphicNode, cor, hour);
      hourly.appendChild(hourlyDisplay);
    });
  }
  makeHourlyWeather();
}

export { displayCurrent, displayLocation, displayData, displayHourlyWeather };
