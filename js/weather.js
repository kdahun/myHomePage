const API_KEY = "73c8b8e0b6386dac9b439c36263c9b12";
const weather = document.querySelector("#box-home div:first-child");

function onGeoOk(position) {
  console.log(position);
  const lat = position.coords.latitude;
  const log = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&appid=${API_KEY}&units=metric`;

  console.log(url);

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      weather.innerText = `위치 : ${data.name}\n${data.weather[0].main}\n현재 온도 : ${data.main.temp}`;
    });
}

function onGeoError() {
  alert("Can't find you. No weather for you.");
}

if ("geolocation" in navigator) {
  console.log("위치정보 사용 가능");
} else {
  console.log("위치정보 사용 불가능");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

// navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError, {
//   enableHighAccuracy: true,

//   maximumAge: 30000,

//   timeout: 27000,
// });

// geolocation API는 navigator.geolocation 객체로서 제공되는데
// 파이어폭스, 인터넷 익스프로어까지는 잘 지원하지만, 크롬에서는 https 프로토콜을
