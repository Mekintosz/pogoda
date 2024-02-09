async function provideWeatherData() {
  
    const response = await fetch('http://api.weatherapi.com/v1/current.json?key=ad519565f97d430fb67163741240602&q=wrolaw&aqi=no')
    const weatherData = await response.json()
    return weatherData

}

console.log(provideWeatherData())
