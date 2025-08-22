import { createGraphicNode } from "./sideFunctions.js";

export default function displayHourlyWeather(data, units) {
  const hourlyDisplayContainer = document.getElementById("hourly");
  hourlyDisplayContainer.innerHTML = "";

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
    cor.innerText = `${element.chance_of_rain} %`;
    hourlyDisplay.append(temp, graphicNode, cor, hour);
    hourlyDisplayContainer.appendChild(hourlyDisplay);
  });
}
