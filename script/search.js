const api = "3d0e75b1809f78f44935c36ada7b307f";
function weatherApp() {
  var cityForm = document.getElementById("cityform").value;
  const base = `https://api.openweathermap.org/data/2.5/weather?q=${cityForm}&appid=${api}&units=metric`;
  fetch(base)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const errorcheck = data.cod;

      if (cityForm != "" && errorcheck != "404") {
        let input = document.getElementById("cityform");
        input.value = "";
        main(cityForm, api);
        hour(cityForm, api);
        more(cityForm, api);
        var mainbody = document.getElementById("all");
        var formbody = document.getElementById("weatherform");
        mainbody.style.visibility = "visible";
        formbody.style.visibility = "hidden";
      } else {
        let input = document.getElementById("cityform");
        location.reload;
        input.value = "";
        const error_msg = document.createElement("p");
        error_msg.innerHTML = "Wrong location";
        const error_div = document.getElementById("errordiv");
        error_div.appendChild(error_msg);
      }
    });
}

function changeCity() {
  var cityinput = prompt("Enter city: ");
  const hourly_div = document.getElementById("hourlyforecast");
  hourly_div.innerHTML = "";
  main(cityinput, api);
  hour(cityinput, api);
  more(cityinput, api);
}

document.querySelector("#form").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    event.preventDefault();
    weatherApp();
  }
});
