function more(city, api) {
  displayMore(city, api);

  function displayMore() {
    const base = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&units=metric`;
    fetch(base)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const temperature = data.main.feels_like;
        const humidity = data.main.humidity;
        const windspeed = data.wind.speed;
        const pressure = data.main.pressure;

        const temperature_div = document.getElementById("temperature_div");
        const humidity_div = document.getElementById("humidity_div");
        const wind_div = document.getElementById("wind_div");
        const pressure_div = document.getElementById("pressure_div");

        temperature_div.innerHTML = `<p>Perceptible temperature ${temperature}°C</p>
              <img class="icons" src="/img/tempicon.png">`;
        humidity_div.innerHTML = `<p>Humidity ${humidity}%</p><br>
              <img class="icons" src="/img/humidityicon.png">`;
        wind_div.innerHTML = `<p>Wind speed ${windspeed} m/s</p>
              <img class="icons" src="/img/windicon.png">`;
        pressure_div.innerHTML = `<p>Pressure ${pressure} hPa</p>
              <img class="icons" src="/img/pressureicon.png">`;
      });
  }
}
