window.addEventListener("load", () => {
  document.addEventListener("contextmenu", (e) => e.preventDefault(), false);
  document.addEventListener("keydown", (e) => {
    if (e.ctrlKey || e.keyCode == 123) {
      e.stopPropagation();
      e.preventDefault();
    }
  });
});
function main(city, api) {
  displayMain(city, api);

  const iconImg = document.getElementById("weather-icon");
  const loc = document.querySelector("#location");
  const tempC = document.querySelector(".c");
  const tempF = document.querySelector(".f");
  const desc = document.querySelector(".desc");
  const sunriseDOM = document.querySelector(".sunrise");
  const sunsetDOM = document.querySelector(".sunset");

  function timeDisplay() {
    const currentDate = new Date();
    const yearp = currentDate.getFullYear();
    const monthp = String(currentDate.getMonth() + 1).padStart(2, "0");
    const dayp = String(currentDate.getDate()).padStart(2, "0");
    const hoursp = String(currentDate.getHours()).padStart(2, "0");
    const minutesp = String(currentDate.getMinutes()).padStart(2, "0");
    const secondsp = String(currentDate.getSeconds()).padStart(2, "0");

    const currentTime = `${hoursp}:${minutesp}:${secondsp}`;

    const formattedDate = `${yearp}-${monthp}-${dayp}`;

    const clockp = document.getElementById("clockp");
    clockp.innerText = `${currentTime}, ${formattedDate}`;
  }

  function displayMain() {
    setInterval(timeDisplay, 1000);

    document.addEventListener("contextmenu", (e) => e.preventDefault(), false);
    document.addEventListener("keydown", (e) => {
      if (e.ctrlKey || e.keyCode == 123) {
        e.stopPropagation();
        e.preventDefault();
      }
    });

    const base = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&units=metric`;

    fetch(base)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const { temp } = data.main;
        const place = data.name;
        const { description, icon } = data.weather[0];
        const { sunrise, sunset } = data.sys;

        const iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;
        const fahrenheit = (temp * 9) / 5 + 32;

        const sunriseGMT = new Date(sunrise * 1000);
        const sunsetGMT = new Date(sunset * 1000);

        iconImg.src = iconUrl;
        loc.textContent = `${place}`;
        desc.textContent = `${description}`;
        tempC.textContent = `${temp.toFixed(2)} °C`;
        tempF.textContent = `${fahrenheit.toFixed(2)} °F`;
        sunriseDOM.textContent = `${sunriseGMT.toLocaleDateString()}, ${sunriseGMT.toLocaleTimeString()}`;
        sunsetDOM.textContent = `${sunsetGMT.toLocaleDateString()}, ${sunsetGMT.toLocaleTimeString()}`;
      });
  }
}
