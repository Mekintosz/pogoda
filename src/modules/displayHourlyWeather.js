import { createGraphicNode } from "./sideFunctions.js";
import provideWeatherData from "./dataProvider.js";
import { getUnits } from "./sideFunctions.js";

const hourlyDisplayContainer = document.getElementById("hourly");
// const prevBtn = document.getElementById("prev-day");
// const nextBtn = document.getElementById("next-day");
// prevBtn.addEventListener("click", () => calculateShortDay());
// nextBtn.addEventListener("click", () => calculateShortDay2());

// let firstHour = 0;
// let lastHour = 6;
// const { hourly } = provideWeatherData();
// console.log(hourly);

// function calculateShortDay() {
//   if (firstHour === 0) return;
//   firstHour -= 1;
//   lastHour -= 1;
//   hourlyDisplayContainer.innerHTML = "";
//   displayHourlyWeather(hourly, getUnits());
// }

// function calculateShortDay2() {
//   if (lastHour === 24) return;
//   firstHour += 1;
//   lastHour += 1;
//   hourlyDisplayContainer.innerHTML = "";
//   displayHourlyWeather(hourly, getUnits());
// }

export default function displayHourlyWeather(data, units) {
  hourlyDisplayContainer.innerHTML = "";
  // const shortDay = data.slice(firstHour, lastHour);
  data.forEach((element) => {
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
    hourlyDisplayContainer.appendChild(hourlyDisplay);
  });
}
