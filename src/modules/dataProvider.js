export default async function provideWeatherData(location) {
  const apiCall = `https://api.weatherapi.com/v1/forecast.json?key=ad519565f97d430fb67163741240602&q=${location}&days=3&aqi=yes&alerts=yes`;

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
  } = data;
  const location = { name, country, lat, lon };

  const {
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

  const currentWeather = {
    temp_c,
    feelslike_c,
    temp_f,
    feelslike_f,
    wind_mph,
    wind_kph,
    humidity,
    condition: { text, code },
  };

  const airQuality = { co, no2, o3, so2, pm25: pm2_5, pm10 };

  let astro = data.forecast.forecastday[0].astro;
  const { sunrise, sunset } = astro;
  astro = { sunrise, sunset };

  function organizeHourlyWeather(data) {
    let hourlyData1 = data.forecast.forecastday[0].hour;
    let hourlyData2 = data.forecast.forecastday[1].hour;
    let finalHourlyData = hourlyData1.concat(hourlyData2);

    let hourly = [];
    for (let h = 0; h < finalHourlyData.length; h++) {
      const {
        time,
        temp_c,
        temp_f,
        chance_of_rain,
        condition: { code },
      } = finalHourlyData[h];

      let hourlyNewTime = newTime(time);
      const timeNow = new Date();
      const hourNow = timeNow.getHours();
      let elementHour = parseInt(hourlyNewTime.slice(0, 2));
      if (h > 23) elementHour += 24;
      if (elementHour >= hourNow && hourly.length < 10) {
        hourly.push({
          hourlyNewTime,
          temp_c,
          temp_f,
          chance_of_rain,
          condition: { code },
        });
      } else if (elementHour >= hourNow && hourly.length >= 10) return hourly;
    }

    function newTime(time) {
      let newTime = time.split(" ");
      return newTime[1];
    }

    return hourly;
  }

  const hourly = organizeHourlyWeather(data);

  function organizeTwoDayWeather(data) {
    const twoDayData = [];
    for (let d = 1; d < 3; d++) {
      let nextDayData = data.forecast.forecastday[d].day;
      const {
        avgtemp_c,
        avgtemp_f,
        daily_chance_of_rain,
        condition: { code },
      } = nextDayData;

      twoDayData.push({
        avgtemp_c,
        avgtemp_f,
        daily_chance_of_rain,
        condition: { text, code },
      });
    }

    return twoDayData;
  }

  const twoDayData = organizeTwoDayWeather(data);

  return { location, currentWeather, airQuality, astro, hourly, twoDayData };
}
