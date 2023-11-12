api = "";
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
        timeline(cityForm);
        var mainbody = document.getElementById("all");
        var formbody = document.getElementById("weatherform");
        mainbody.style.visibility = "visible";
        formbody.style.visibility = "hidden";
      } else {
        let input = document.getElementById("cityform");
        location.reload;
        input.value = "";
        let errortxt = document.getElementById("errortxt");
        errortxt.innerHTML = "";
        errortxt.innerHTML = "Wrong location";
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

document.querySelector("#cityform").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    e.preventDefault();
    weatherApp();
    console.log("asdasdd");
  }
});

window.addEventListener("load", () => {
  document.getElementById("cityform").focus();
});
