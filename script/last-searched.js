function addToRecentSearches(location) {
  let recentSearches = JSON.parse(localStorage.getItem("recentSearches")) || [];

  recentSearches = recentSearches.filter((item) => item !== location);
  recentSearches.unshift(location);
  if (recentSearches.length > 5) {
    recentSearches.pop();
  }

  localStorage.setItem("recentSearches", JSON.stringify(recentSearches));

  updateRecentSearchList(recentSearches);
}

function handleListItemClick(location) {
  main(location, api);
  hour(location, api);
  more(location, api);
  var mainbody = document.getElementById("all");
  var formbody = document.getElementById("weatherform");
  mainbody.style.visibility = "visible";
  formbody.style.visibility = "hidden";
}

function updateRecentSearchList(recentSearches) {
  const recentSearchList = document.getElementById("recent-search-list");
  recentSearchList.innerHTML = "";

  recentSearches.forEach((location) => {
    const li = document.createElement("li");
    li.classList.add("recent-search-item");
    li.addEventListener("click", () => {
      handleListItemClick(location);
    });
    const base = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${api}&units=metric`;

    fetch(base)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const listicon = data.weather[0].icon;
        const listiconUrl = `http://openweathermap.org/img/wn/${listicon}@2x.png`;

        const iconImg = document.createElement("img");
        iconImg.classList.add("list-element-icon");
        iconImg.src = listiconUrl;

        li.appendChild(iconImg);
        li.insertAdjacentText("beforeend", location);
      });
    recentSearchList.appendChild(li);
  });
}

window.addEventListener("load", () => {
  const recentSearches =
    JSON.parse(localStorage.getItem("recentSearches")) || [];
  if (recentSearches == "") {
    const recentSearchesBlock = document.getElementById("recent-searches");
    recentSearchesBlock.style.display = "none";
  }

  updateRecentSearchList(recentSearches);
});

function timeline(location) {
  addToRecentSearches(location);
}
