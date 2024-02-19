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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ provideWeatherData)\n/* harmony export */ });\nasync function provideWeatherData(location = \"Wroclaw\") {\n  const apiCall = `http://api.weatherapi.com/v1/forecast.json?key=ad519565f97d430fb67163741240602&q=London&days=1&aqi=yes&alerts=yes`;\n  try {\n    const response = await fetch(apiCall, { mode: \"cors\" });\n    if (!response.ok) throw new Error(`Location ${location} not found`);\n    console.log(response);\n    const weatherData = convertData(await response.json());\n    console.log(weatherData);\n    return weatherData;\n  } catch (err) {\n    alert(err);\n    return null;\n  }\n}\n\nfunction convertData(data) {\n  console.log(data);\n  \n\n  const {location: { name, country, lat, lon }} = data;\n  const location = { name, country, lat, lon }\n\n  const {current: {\n    temp_c,\n    feelslike_c,\n    temp_f,\n    feelslike_f,\n    wind_mph,\n    wind_kph,\n    humidity,\n    condition: { text, code },\n    air_quality: { co, no2, o3, so2, pm2_5, pm10 },\n  }} = data\n\n  const currentWeather = {\n          temp_c,\n          feelslike_c,\n          temp_f,\n          feelslike_f,\n          wind_mph,\n          wind_kph,\n          humidity,\n          condition: { text, code },\n        }\n\n  const airQuality = { co, no2, o3, so2, pm25: pm2_5, pm10 }\n\n  \n  let astro = data.forecast.forecastday[0].astro\n  const { sunrise, sunset } = astro\n  astro = {sunrise, sunset}\n\nconst hourly = organizeHourlyWeather(data)\n  \n\n  return { location, currentWeather, astro, hourly}\n\n  function organizeHourlyWeather(data) {\n    let hourlyData = data.forecast.forecastday[0].hour\n    let hourly =[]\n    for (let h = 0; h < hourlyData.length; h++){\n    const {time, temp_c, temp_f, chance_of_rain} = hourlyData[h]\n    let hourlyNewTime = newTime(time)\n    hourly.push({hourlyNewTime, temp_c, temp_f, chance_of_rain})\n    }\n\n    function newTime(time) {\n      let newTime = time.split(' ')\n      return newTime[1]\n    }\n    return hourly\n  }\n//   const {\n//     location: { name, country, lat, lon },\n//     current: {\n//       temp_c,\n//       feelslike_c,\n//       temp_f,\n//       feelslike_f,\n//       wind_mph,\n//       wind_kph,\n//       humidity,\n//       condition: { text, code },\n//       air_quality: { co, no2, o3, so2, pm2_5, pm10 },\n//     },\n//     // forecast: {\n//     //   forecastday: [\n//     //       {\n//   } = data;\n// let location = data.location: { name, country, lat, lon }\n\n//   let weatherData = {\n//     location: { name, country, lat, lon },\n//     air_quality: { co, no2, o3, so2, pm25: pm2_5, pm10 },\n//     current: {\n//       temp_c,\n//       feelslike_c,\n//       temp_f,\n//       feelslike_f,\n//       wind_mph,\n//       wind_kph,\n//       humidity,\n//       condition: { text, code },\n//     },\n//     forecast: {\n//       forecastday: [\n//         {\n//           astro: {\n//             sunrise,\n//             sunset,\n//           },\n//           hour: [\n//             {\n//               time: newTime[1],\n//               temp_c\n//             }\n//           ]\n//         },\n//       ],\n//     },\n//   }\n  \n//   let newTime = time.split(' ')\n//   return {\n//     location: { name, country, lat, lon },\n//     air_quality: { co, no2, o3, so2, pm25: pm2_5, pm10 },\n//     current: {\n//       temp_c,\n//       feelslike_c,\n//       temp_f,\n//       feelslike_f,\n//       wind_mph,\n//       wind_kph,\n//       humidity,\n//       condition: { text, code },\n//     },\n//     forecast: {\n//       forecastday: [\n//         {\n//           astro: {\n//             sunrise,\n//             sunset,\n//           },\n//           hour: [\n//             {\n//               time: newTime[1],\n//               temp_c\n//             }\n//           ]\n//         },\n//       ],\n//     },\n//   };\n}\n\n\n//# sourceURL=webpack://pogoda/./src/modules/dataProvider.js?");

/***/ }),

/***/ "./src/modules/sideFunctions.js":
/*!**************************************!*\
  !*** ./src/modules/sideFunctions.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   applyIndexColor: () => (/* binding */ applyIndexColor),\n/* harmony export */   createGraphicNode: () => (/* binding */ createGraphicNode),\n/* harmony export */   getUnits: () => (/* binding */ getUnits)\n/* harmony export */ });\n/* harmony import */ var _assets_01d_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/01d.svg */ \"./src/assets/01d.svg\");\n/* harmony import */ var _assets_02d_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/02d.svg */ \"./src/assets/02d.svg\");\n/* harmony import */ var _assets_03d_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/03d.svg */ \"./src/assets/03d.svg\");\n/* harmony import */ var _assets_50d_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/50d.svg */ \"./src/assets/50d.svg\");\n/* harmony import */ var _assets_09d_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/09d.svg */ \"./src/assets/09d.svg\");\n/* harmony import */ var _assets_10d_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/10d.svg */ \"./src/assets/10d.svg\");\n\n\n\n\n\n\n\nfunction getUnits() {\n  const unitsToggle = document.getElementById(\"units\");\n  let units = unitsToggle.checked ? \"c\" : \"f\";\n  return units;\n}\n\nfunction applyIndexColor(i, element) {\n  if (i >= 0 && i < 36) element.style.backgroundColor = \"#DFFFE2\";\n  if (i >= 36 && i < 54) element.style.backgroundColor = \"#FFF2D9\";\n  if (i >= 54) element.style.backgroundColor = \"#FFD9D9\";\n}\n\nfunction createGraphicNode(data) {\n  let graphicNode = document.createElement(\"img\");\n  let code = data.condition.code;\n  if (code == 1000) {\n    graphicNode.src = _assets_01d_svg__WEBPACK_IMPORTED_MODULE_0__;\n  } else if (code == 1003) {\n    graphicNode.src = _assets_02d_svg__WEBPACK_IMPORTED_MODULE_1__;\n  } else if (code == 1006 || code == 1009) {\n    graphicNode.src = _assets_03d_svg__WEBPACK_IMPORTED_MODULE_2__;\n  } else if (code == 1030 || code == 1135) {\n    graphicNode.src = _assets_50d_svg__WEBPACK_IMPORTED_MODULE_3__;\n  } else if (\n    code == 1063 ||\n    code == 1150 ||\n    code == 1153 ||\n    code == 1168 ||\n    code == 1171 ||\n    code == 1180 ||\n    code == 1183 ||\n    code == 1189 ||\n    code == 1192 ||\n    code == 1192\n  ) {\n    graphicNode.src = _assets_09d_svg__WEBPACK_IMPORTED_MODULE_4__;\n  } else if (code == 1186) {\n    graphicNode.src = _assets_10d_svg__WEBPACK_IMPORTED_MODULE_5__;\n  }\n  return graphicNode;\n}\n\n \n\n\n//# sourceURL=webpack://pogoda/./src/modules/sideFunctions.js?");

/***/ }),

/***/ "./src/modules/uiControl.js":
/*!**********************************!*\
  !*** ./src/modules/uiControl.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   displayCurrent: () => (/* binding */ displayCurrent),\n/* harmony export */   displayData: () => (/* binding */ displayData),\n/* harmony export */   displayLocation: () => (/* binding */ displayLocation)\n/* harmony export */ });\n/* harmony import */ var _sideFunctions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sideFunctions.js */ \"./src/modules/sideFunctions.js\");\n\n\n\nfunction displayData(data, container) {\n  container.innerHTML = \"\";\n  for (let i of Object.entries(data).flat()) {\n    let info = document.createElement(\"p\");\n    isNaN(i) ? info.innerText = i : info.innerText = Math.round(i);\n    if (!isNaN(i)) (0,_sideFunctions_js__WEBPACK_IMPORTED_MODULE_0__.applyIndexColor)(i, info)\n    container.appendChild(info);\n  }\n}\n    \nfunction displayLocation(data) {\n  const location = document.getElementById(\"location\");\n  const country = document.getElementById(\"country\");\n  const latitude = document.getElementById(\"latitude\");\n  const longitude = document.getElementById(\"longitude\");\n\n  location.innerText = data.location.name;\n  country.innerText = data.location.country;\n  latitude.innerText = `${data.location.lat}°`;\n  longitude.innerText = `${data.location.lon}°`;\n}\n\nfunction displayCurrent(data, units) {\n  const tempC = document.getElementById(\"tempC\");\n  const feelsLike = document.getElementById(\"feelsLike\");\n  const condition = document.getElementById(\"condition\");\n  const graphicContainer = document.getElementById(\"graphic\");\n  const wind = document.getElementById(\"wind\");\n  const graphicNode = (0,_sideFunctions_js__WEBPACK_IMPORTED_MODULE_0__.createGraphicNode)(data);\n\n  feelsLike.innerText =\n    units === \"c\"\n      ? `Fells like ${Math.round(data.feelslike_c)}°C`\n      : `Fells like ${Math.round(data.feelslike_f)}°F`;\n  tempC.innerText =\n    units === \"c\"\n      ? `${Math.round(data.temp_c)}°`\n      : `${Math.round(data.temp_f)}°`;\n  condition.innerText = data.condition.text;\n  graphicContainer.innerHTML = \"\";\n  graphicContainer.appendChild(graphicNode);\n  wind.innerText =\n    units === \"c\"\n      ? `${Math.round(data.wind_kph)} km/h`\n      : `${Math.round(data.wind_mph)} m/h`;\n}\n\n// function displayHourlyWeather() {\n//   const hourly = document.getElementById('hourly')\n\n//   data.\n// }\n\n\n\n\n//# sourceURL=webpack://pogoda/./src/modules/uiControl.js?");

/***/ }),

/***/ "./src/assets/01d.svg":
/*!****************************!*\
  !*** ./src/assets/01d.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"54288da67b71b4b19483.svg\";\n\n//# sourceURL=webpack://pogoda/./src/assets/01d.svg?");

/***/ }),

/***/ "./src/assets/02d.svg":
/*!****************************!*\
  !*** ./src/assets/02d.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9a86613b2a5a0aebf924.svg\";\n\n//# sourceURL=webpack://pogoda/./src/assets/02d.svg?");

/***/ }),

/***/ "./src/assets/03d.svg":
/*!****************************!*\
  !*** ./src/assets/03d.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f6e6108ec3b4605bda2a.svg\";\n\n//# sourceURL=webpack://pogoda/./src/assets/03d.svg?");

/***/ }),

/***/ "./src/assets/09d.svg":
/*!****************************!*\
  !*** ./src/assets/09d.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"6f43169e2db3a96adc41.svg\";\n\n//# sourceURL=webpack://pogoda/./src/assets/09d.svg?");

/***/ }),

/***/ "./src/assets/10d.svg":
/*!****************************!*\
  !*** ./src/assets/10d.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"4c0668cce0f70c7678d5.svg\";\n\n//# sourceURL=webpack://pogoda/./src/assets/10d.svg?");

/***/ }),

/***/ "./src/assets/50d.svg":
/*!****************************!*\
  !*** ./src/assets/50d.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"e61faee5b9692f9897af.svg\";\n\n//# sourceURL=webpack://pogoda/./src/assets/50d.svg?");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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