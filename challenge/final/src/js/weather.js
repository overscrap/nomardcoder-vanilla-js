const city = document.querySelector("#weather span");
const weatherIcon = document.querySelector("#weather img");

const API_KEY = "bdc0d41d904c092a750d26c9e469b039";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            weatherIcon.src = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
            city.innerText = data.name;
            // weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
        });
}
function onGeoError() {
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);