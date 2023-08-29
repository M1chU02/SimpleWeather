function hour(city, api) {
  displayHour(city, api);
  const forecastContainer = document.getElementById("hourlyforecast");
  function displayHour() {
    const base = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&exclude=minutely&units=metric&appid=${api}`;
    fetch(base)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const forecasts = data.list.slice(0, 6);
        forecasts.forEach((forecast) => {
          console.log(forecast);
          const date = forecast.dt_txt;
          const temperature = forecast.main.feels_like;
          const description = forecast.weather[0].description;
          const iconUrl = `https://openweathermap.org/img/w/${forecast.weather[0].icon}.png`;

          const forecastElement = document.createElement("div");
          forecastElement.classList.add("block");

          forecastElement.innerHTML = `
                  <p>${date}</p>
                  <img src="${iconUrl}" alt="Weather Icon">
                  <p>${temperature} &#8451;</p>
                  <p>${description}</p>`;
          forecastContainer.appendChild(forecastElement);
        });
      });
  }
}
