//api.openweathermap.org/data/2.5/weather?lat=36.7964468&lon=127.1580071&appid=dcbd54b31cfcf1a0bff791ac3c61fec8
const API_KEY = "dcbd54b31cfcf1a0bff791ac3c61fec8";
const city = document.querySelector(".weather span:first-child");
const weather = document.querySelector(".weather span:last-child");
https: function OnGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      city.innerText = data.name;
      weather.innerText = data.weather[0].main;
    });
}
function OnGeoError() {
  alert("Error! Can't find your location!");
}

navigator.geolocation.getCurrentPosition(OnGeoOk, OnGeoError);
