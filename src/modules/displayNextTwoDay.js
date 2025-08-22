import { createGraphicNode } from "./sideFunctions.js";

export default function displayNextTwoDay(data, units) {
  const container = document.getElementById("two_day");
  container.innerHTML = "";
  data.forEach((element) => {
    const byDayDisplay = document.createElement("div");
    byDayDisplay.classList.add("by-day");
    const temp = document.createElement("span");
    const cor = document.createElement("span");
    const graphicNode = createGraphicNode(element);
    const condition = document.createElement("span");
    temp.innerText =
      units === "c"
        ? `${Math.round(element.avgtemp_c)}°`
        : `${Math.round(element.avgtemp_f)}°`;
    cor.innerText = `${element.daily_chance_of_rain} %`;
    condition.innerText = `${element.condition.text}`;
    byDayDisplay.append(temp, graphicNode, condition, cor);
    container.appendChild(byDayDisplay);
  });
}
