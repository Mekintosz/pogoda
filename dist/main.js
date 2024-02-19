/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/PogodaApp.js":
/*!**************************!*\
  !*** ./src/PogodaApp.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_sideFunctions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/sideFunctions.js */ \"./src/modules/sideFunctions.js\");\n/* harmony import */ var _modules_uiControl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/uiControl.js */ \"./src/modules/uiControl.js\");\n/* harmony import */ var _modules_dataProvider_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/dataProvider.js */ \"./src/modules/dataProvider.js\");\n\n\n\n\nlet weatherData;\nconst form = document.querySelector(\"form\");\nconst unitsToggle = document.getElementById(\"units\");\nform.addEventListener(\"submit\", handleSubmit);\nunitsToggle.addEventListener(\"change\", () => {\n  if (weatherData) (0,_modules_uiControl_js__WEBPACK_IMPORTED_MODULE_1__.displayCurrent)(weatherData.current, (0,_modules_sideFunctions_js__WEBPACK_IMPORTED_MODULE_0__.getUnits)());\n});\n\nfunction displayAll() {\n  const airQualityDisplay = document.querySelector(\".air-quality\");\n  (0,_modules_uiControl_js__WEBPACK_IMPORTED_MODULE_1__.displayLocation)(weatherData);\n  (0,_modules_uiControl_js__WEBPACK_IMPORTED_MODULE_1__.displayCurrent)(weatherData.current, (0,_modules_sideFunctions_js__WEBPACK_IMPORTED_MODULE_0__.getUnits)());\n  (0,_modules_uiControl_js__WEBPACK_IMPORTED_MODULE_1__.displayData)(weatherData.air_quality, airQualityDisplay);\n}\n\nasync function handleSubmit(e) {\n  e.preventDefault();\n  let inputValue = document.querySelector(\"#location-input\").value;\n  weatherData = await (0,_modules_dataProvider_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(inputValue ? inputValue : \"honolulu\");\n  if (weatherData) {\n    displayAll(weatherData);\n    inputValue = \"\";\n  }\n}\n\n//# sourceURL=webpack://pogoda/./src/PogodaApp.js?");

/***/ }),

/***/ "./src/modules/dataProvider.js":
/*!*************************************!*\
  !*** ./src/modules/dataProvider.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ provideWeatherData)\n/* harmony export */ });\nasync function provideWeatherData(location = \"Wroclaw\") {\n    const apiCall = `http://api.weatherapi.com/v1/current.json?key=ad519565f97d430fb67163741240602&q=${location}&aqi=yes`;\n    try {\n      const response = await fetch(apiCall, { mode: \"cors\" });\n      if (!response.ok) throw new Error(`Location ${location} not found`);\n      console.log(response)\n      const weatherData = convertData(await response.json());\n      console.log(weatherData)\n      return weatherData;\n    } catch (err) {\n      alert(err);\n      return null;\n    }\n  }\n  \n  function convertData(data) {\n    console.log(data)\n    const {\n      location: { name, country, lat, lon },\n      current: {\n        temp_c,\n        feelslike_c,\n        temp_f,\n        feelslike_f,\n        wind_mph,\n        wind_kph,\n        humidity,\n        condition: { text, code },\n        air_quality: { co, no2, o3, so2, pm2_5, pm10 },\n      },\n    } = data;\n    return {\n      location: { name, country, lat, lon },\n      air_quality: { co, no2, o3, so2, pm25: pm2_5, pm10 },\n      current: {\n        temp_c,\n        feelslike_c,\n        temp_f,\n        feelslike_f,\n        wind_mph,\n        wind_kph,\n        humidity,\n        condition: { text, code },\n      },\n    };\n  }\n\n//# sourceURL=webpack://pogoda/./src/modules/dataProvider.js?");

/***/ }),

/***/ "./src/modules/sideFunctions.js":
/*!**************************************!*\
  !*** ./src/modules/sideFunctions.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   applyIndexColor: () => (/* binding */ applyIndexColor),\n/* harmony export */   createGraphicNode: () => (/* binding */ createGraphicNode),\n/* harmony export */   getUnits: () => (/* binding */ getUnits)\n/* harmony export */ });\nfunction getUnits() {\n  const unitsToggle = document.getElementById(\"units\");\n  let units = unitsToggle.checked ? \"c\" : \"f\";\n  return units;\n}\n\nfunction applyIndexColor(i, element) {\n  if (i >= 0 && i < 36) element.style.backgroundColor = \"#DFFFE2\";\n  if (i >= 36 && i < 54) element.style.backgroundColor = \"#FFF2D9\";\n  if (i >= 54) element.style.backgroundColor = \"#FFD9D9\";\n}\n\nfunction createGraphicNode(data) {\n  let graphicNode = document.createElement(\"img\");\n  let code = data.condition.code;\n  if (code == 1000) {\n    graphicNode.src = \"../assets/01d.svg\";\n  } else if (code == 1003) {\n    graphicNode.src = \"./assets/02d.svg\";\n  } else if (code == 1006 || code == 1009) {\n    graphicNode.src = \"../assets/03d.svg\";\n  } else if (code == 1030 || code == 1135) {\n    graphicNode.src = \"../assets/50d.svg\";\n  } else if (\n    code == 1063 ||\n    code == 1150 ||\n    code == 1153 ||\n    code == 1168 ||\n    code == 1171 ||\n    code == 1180 ||\n    code == 1183 ||\n    code == 1189 ||\n    code == 1192 ||\n    code == 1192\n  ) {\n    graphicNode.src = \"./assets/09d.svg\";\n  } else if (code == 1186) {\n    graphicNode.src = \"../assets/10d.svg\";\n  }\n  return graphicNode;\n}\n\n \n\n\n//# sourceURL=webpack://pogoda/./src/modules/sideFunctions.js?");

/***/ }),

/***/ "./src/modules/uiControl.js":
/*!**********************************!*\
  !*** ./src/modules/uiControl.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   displayCurrent: () => (/* binding */ displayCurrent),\n/* harmony export */   displayData: () => (/* binding */ displayData),\n/* harmony export */   displayLocation: () => (/* binding */ displayLocation)\n/* harmony export */ });\n/* harmony import */ var _sideFunctions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sideFunctions.js */ \"./src/modules/sideFunctions.js\");\n\n\n\nfunction displayData(data, container) {\n  container.innerHTML = \"\";\n  for (let i of Object.entries(data).flat()) {\n    let info = document.createElement(\"p\");\n    isNaN(i) ? info.innerText = i : info.innerText = Math.round(i);\n    if (!isNaN(i)) (0,_sideFunctions_js__WEBPACK_IMPORTED_MODULE_0__.applyIndexColor)(i, info)\n    container.appendChild(info);\n  }\n}\n\nfunction displayLocation(data) {\n  const location = document.getElementById(\"location\");\n  const country = document.getElementById(\"country\");\n  const latitude = document.getElementById(\"latitude\");\n  const longitude = document.getElementById(\"longitude\");\n  location.innerText = data.location.name;\n  country.innerText = data.location.country;\n  latitude.innerText = `${data.location.lat}°`;\n  longitude.innerText = `${data.location.lon}°`;\n}\n\nfunction displayCurrent(data, units) {\n  const tempC = document.getElementById(\"tempC\");\n  const feelsLike = document.getElementById(\"feelsLike\");\n  const condition = document.getElementById(\"condition\");\n  const graphicContainer = document.getElementById(\"graphic\");\n  const wind = document.getElementById(\"wind\");\n  const graphicNode = (0,_sideFunctions_js__WEBPACK_IMPORTED_MODULE_0__.createGraphicNode)(data);\n\n  feelsLike.innerText =\n    units === \"c\"\n      ? `Fells like ${Math.round(data.feelslike_c)}°C`\n      : `Fells like ${Math.round(data.feelslike_f)}°F`;\n\n  tempC.innerText =\n    units === \"c\"\n      ? `${Math.round(data.temp_c)}°`\n      : `${Math.round(data.temp_f)}°`;\n\n  condition.innerText = data.condition.text;\n\n  graphicContainer.innerHTML = \"\";\n\n  graphicContainer.appendChild(graphicNode);\n  wind.innerText =\n    units === \"c\"\n      ? `${Math.round(data.wind_kph)} km/h`\n      : `${Math.round(data.wind_mph)} m/h`;\n}\n\n\n\n\n//# sourceURL=webpack://pogoda/./src/modules/uiControl.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/PogodaApp.js");
/******/ 	
/******/ })()
;