async function provideWeatherData(location = 'Wroclaw') {
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
      air_quality: { co, no2, o3, so2, pm2_5, pm10 }
    }
  } = data;
  return {
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
      air_quality: { co, no2, o3, so2, pm2_5, pm10 }
    }
  }
}

const data = provideWeatherData('klodzko');
console.log(data);
