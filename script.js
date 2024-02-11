async function provideWeatherData(location = "Wroclaw") {
  const apiCall = `http://api.weatherapi.com/v1/current.json?key=ad519565f97d430fb67163741240602&q=${location}&aqi=yes`;
  try {
    const response = await fetch(apiCall, { mode: "cors" });
    if (!response.ok) throw new Error(`Location ${location} not found`);
    const weatherData = convertData(await response.json());
    return weatherData;
  } catch (err) {
    alert(err);
    return null;
  }
}

function convertData(data) {
  const {
    location: { name, country, lat, lon },
    current: {
      temp_c,
      feelslike_c,
      temp_f,
      feelslike_f,
      wind_mph,
      wind_kph,
      humidity,
      condition: { text, code },
      air_quality: { co, no2, o3, so2, pm2_5, pm10 },
    },
  } = data;
  return {
    location: { name, country, lat, lon },
    air_quality: { co, no2, o3, so2, pm25: pm2_5, pm10 },

    current: {
      temp_c,
      feelslike_c,
      temp_f,
      feelslike_f,
      wind_mph,
      wind_kph,
      humidity,
      condition: { text, code },
    },
  };
}

const form = document.querySelector("form");
const submitBtn = document.querySelector(".submit-btn");

const locationDisplay = document.querySelector(".location-display");
const airQualityDisplay = document.querySelector(".air-quality");
const currentDisplay = document.querySelector(".current-weather");
form.addEventListener("submit", handleSubmit);

async function handleSubmit(e) {
  e.preventDefault();
  const inputValue = document.querySelector("#location-input").value;
  const bigData = await provideWeatherData(inputValue);

  console.log(inputValue);
  console.table(bigData);
  displayLocation(bigData, locationDisplay);
  displayCurrent(bigData.current);
  displayData(bigData.air_quality, airQualityDisplay);
  console.log(allPs);
}

function displayData(data, container) {
  container.innerHTML = "";
  for (const [key, value] of Object.entries(data)) {
    let info = document.createElement("p");
    info.innerText = `${key}:   ${value}`;
    container.appendChild(info);
  }
}

const allPs = document.querySelectorAll("p");
console.log(allPs);

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

function displayCurrent(data) {
  const tempC = document.getElementById("tempC");
  tempC.innerText = `${data.temp_c}°C`;
  const condition = document.getElementById("condition");
  condition.innerText = data.condition.text;
  const graphicContainer = document.getElementById("graphic");
  const graphicNode = loadGraphicNode(data)
  graphicContainer.appendChild(graphicNode)
  const wind = document.getElementById('wind')
  wind.innerText = `${data.wind_kph} km/h`
}

function loadGraphicNode(data) {
  let graphic = document.createElement("img");
  let code = data.condition.code;
  if (code == 1000) {
    graphic.src = "./assets/01d.svg";
  } else if (code == 1003) {
    graphic.src = "./assets/02d.svg";
  } else if (code == 1006 || code == 1009) {
    graphic.src = "./assets/03d.svg";
  } else if (code == 1030 || code == 1135) {
    graphic.src = "./assets/50d.svg";
  } else if (
    code == 1063 ||
    code == 1150 ||
    code == 1153 ||
    code == 1168 ||
    code == 1171 ||
    code == 1180 ||
    code == 1183 ||
    code == 1189 ||
    code == 1192 ||
    code == 1192
  ) {
    graphic.src = "./assets/09d.svg";
  } else if (code == 1186) {
    graphic.src = "./assets/10d.svg";
  }
  return graphic;
}
