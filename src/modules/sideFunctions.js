import img1 from "../assets/01d.svg"
import img2 from "../assets/02d.svg"
import img3 from "../assets/03d.svg"
import img4 from "../assets/50d.svg"
import img5 from "../assets/09d.svg"
import img6 from "../assets/10d.svg"

function getUnits() {
  const unitsToggle = document.getElementById("units");
  let units = unitsToggle.checked ? "c" : "f";
  return units;
}

function applyIndexColor(i, element) {
  // if (i >= 0 && i < 36) element.style.backgroundColor = "#DFFFE2";
  if (i >= 36 && i < 54) element.style.backgroundColor = "#FFF2D9";
  if (i >= 54) element.style.backgroundColor = "#FFD9D9";
}

function createGraphicNode(data) {
  let graphicNode = document.createElement("img");
  let code = data.condition.code;
  if (code == 1000) {
    graphicNode.src = img1;
  } else if (code == 1003) {
    graphicNode.src = img2;
  } else if (code == 1006 || code == 1009) {
    graphicNode.src = img3;
  } else if (code == 1030 || code == 1135) {
    graphicNode.src = img4;
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
    graphicNode.src = img5;
  } else if (code == 1186) {
    graphicNode.src = img6;
  }
  return graphicNode;
}

export { getUnits, applyIndexColor, createGraphicNode } 
