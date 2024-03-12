(()=>{"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var n=e.g.document;if(!t&&n&&(n.currentScript&&(t=n.currentScript.src),!t)){var o=n.getElementsByTagName("script");if(o.length)for(var c=o.length-1;c>-1&&(!t||!/^http(s?):/.test(t));)t=o[c--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})();const t=e.p+"54288da67b71b4b19483.svg",n=e.p+"9a86613b2a5a0aebf924.svg",o=e.p+"f6e6108ec3b4605bda2a.svg",c=e.p+"e61faee5b9692f9897af.svg",r=e.p+"6f43169e2db3a96adc41.svg",a=e.p+"4c0668cce0f70c7678d5.svg";function i(){return document.getElementById("units").checked?"c":"f"}function s(e,t){e>=36&&e<54&&(t.style.backgroundColor="#FFF2D9"),e>=54&&(t.style.backgroundColor="#FFD9D9")}function d(e){let i=document.createElement("img"),s=e.condition.code;return 1e3==s?i.src=t:1003==s?i.src=n:1006==s||1009==s?i.src=o:1030==s||1135==s?i.src=c:1063==s||1150==s||1153==s||1168==s||1171==s||1180==s||1183==s||1189==s||1192==s||1192==s?i.src=r:1186==s&&(i.src=a),i}async function u(e){const t=`https://api.weatherapi.com/v1/forecast.json?key=ad519565f97d430fb67163741240602&q=${e}&days=3&aqi=yes&alerts=yes`;try{const n=await fetch(t,{mode:"cors"});if(!n.ok)throw new Error(`Location ${e} not found`);const o=function(e){const{location:{name:t,country:n,lat:o,lon:c}}=e,r={name:t,country:n,lat:o,lon:c},{current:{temp_c:a,feelslike_c:i,temp_f:s,feelslike_f:d,wind_mph:u,wind_kph:l,humidity:m,condition:{text:f,code:p},air_quality:{co:h,no2:y,o3:_,so2:g,pm2_5:E,pm10:w}}}=e,T={temp_c:a,feelslike_c:i,temp_f:s,feelslike_f:d,wind_mph:u,wind_kph:l,humidity:m,condition:{text:f,code:p}},v={co:h,no2:y,o3:_,so2:g,pm25:E,pm10:w};let x=e.forecast.forecastday[0].astro;const{sunrise:$,sunset:b}=x;x={sunrise:$,sunset:b};const k=function(e){let t=e.forecast.forecastday[0].hour,n=e.forecast.forecastday[1].hour,o=t.concat(n),c=[];for(let e=0;e<o.length;e++){const{time:t,temp_c:n,temp_f:a,chance_of_rain:i,condition:{code:s}}=o[e];let d=r(t);const u=(new Date).getHours();let l=parseInt(d.slice(0,2));if(e>23&&(l+=24),l>=u&&c.length<10)c.push({hourlyNewTime:d,temp_c:n,temp_f:a,chance_of_rain:i,condition:{code:s}});else if(l>=u&&c.length>=10)return c}function r(e){return e.split(" ")[1]}return c}(e);const B=function(e){const t=[];for(let n=1;n<3;n++){let o=e.forecast.forecastday[n].day;const{avgtemp_c:c,avgtemp_f:r,daily_chance_of_rain:a,condition:{code:i}}=o;t.push({avgtemp_c:c,avgtemp_f:r,daily_chance_of_rain:a,condition:{text:f,code:i}})}return t}(e);return{location:r,currentWeather:T,airQuality:v,astro:x,hourly:k,twoDayData:B}}(await n.json());return o}catch(e){return alert(e),null}}let l;!async function(){l=await u("Wroclaw"),l&&p()}();const m=document.querySelector("form"),f=document.getElementById("units");function p(){const e=document.querySelector(".air-quality");!function(e){const t=document.getElementById("location"),n=document.getElementById("country"),o=document.getElementById("latitude"),c=document.getElementById("longitude");t.innerText=e.name,n.innerText=e.country,o.innerText=`${e.lat}°`,c.innerText=`${e.lon}°`}(l.location),function(e,t){const n=document.getElementById("tempC"),o=document.getElementById("feelsLike"),c=document.getElementById("condition"),r=document.getElementById("graphic"),a=document.getElementById("wind"),i=d(e);o.innerText="c"===t?`Fells like ${Math.round(e.feelslike_c)}°C`:`Fells like ${Math.round(e.feelslike_f)}°F`,n.innerText="c"===t?`${Math.round(e.temp_c)}°`:`${Math.round(e.temp_f)}°`,c.innerText=e.condition.text,r.innerHTML="",r.appendChild(i),a.innerText="c"===t?`${Math.round(e.wind_kph)} km/h`:`${Math.round(e.wind_mph)} m/h`}(l.currentWeather,i()),function(e,t){t.innerHTML="";for(let n of Object.entries(e).flat()){let e=document.createElement("p");isNaN(n)?e.innerText=n:e.innerText=Math.round(n),isNaN(n)||s(n,e),t.appendChild(e)}}(l.airQuality,e),function(e,t){const n=document.getElementById("hourly");n.innerHTML="",e.forEach((e=>{const o=document.createElement("div");o.classList.add("by-hour");const c=document.createElement("span"),r=document.createElement("span"),a=document.createElement("span"),i=d(e);c.innerText=`${e.hourlyNewTime}`,r.innerText="c"===t?`${Math.round(e.temp_c)}°`:`${Math.round(e.temp_f)}°`,a.innerText=`${e.chance_of_rain}`,o.append(r,i,a,c),n.appendChild(o)}))}(l.hourly,i()),function(e,t){const n=document.getElementById("two_day");n.innerHTML="",e.forEach((e=>{const o=document.createElement("div");o.classList.add("by-day");const c=document.createElement("span"),r=document.createElement("span"),a=d(e),i=document.createElement("span");c.innerText="c"===t?`${Math.round(e.avgtemp_c)}°`:`${Math.round(e.avgtemp_f)}°`,r.innerText=`${e.daily_chance_of_rain}`,i.innerText=`${e.condition.text}`,o.append(c,a,i,r),n.appendChild(o)}))}(l.twoDayData,i()),function(e){const t=document.getElementById("sunrise");document.getElementById("sunset").innerText=`${e.sunset}`,t.innerText=`${e.sunrise}`}(l.astro)}m.addEventListener("submit",(async function(e){e.preventDefault();let t=document.querySelector("#location-input").value;l=await u(t||"Wroclaw"),l&&(p(),t="")})),f.addEventListener("change",(()=>{l&&p()}))})();