function callWeatherApi(userData) {
  console.log("shu", userData);

  var apiKey = "28f67a45e6b4a08cf33e8c62a3469a55";

  var url =
    "http://api.openweathermap.org/data/2.5/weather?q=" +
    userData.city.toLowerCase() +
    "&units=metric&appid=" +
    apiKey;

  var weather;

  fetch(url)
    .then((response) => response.json())
    .then((weatherJson) => {
      console.log(weatherJson);
      weather = weatherJson;
    });

  return weather;
}

export default function searchWeather() {
  var userWeather = {};
  fetch("https://extreme-ip-lookup.com/json/")
    .then((response) => response.json())
    .then((responseJson) => {
      console.log("shu res", responseJson);
      // callWeatherApi(responseJson);
      userWeather = callWeatherApi(responseJson);
    })
    .then(() => {
      return userWeather;
    });

  // if (userData.city.trim().length === 0) {
  //   return alert("Please enter a City Name");
  // }

  // var apiKey = "28f67a45e6b4a08cf33e8c62a3469a55";

  // var url =
  //   "http://api.openweathermap.org/data/2.5/weather?q=" +
  //   "dearborn" +
  //   "&units=metric&appid=" +
  //   apiKey;

  // fetch(url)
  //   .then((response) => response.json())
  //   .then((weatherJson) => {
  //     console.log(weatherJson);
  //   });

  // var http = new XMLHttpRequest();
  // var method = "GET";

  //   http.open(method, url);
  //   http.onreadystatechange = function () {
  //     if (http.readyState === XMLHttpRequest.DONE && http.status === 200) {
  //       var data = JSON.parse(http.responseText);

  //       var weatherData = new Weather(
  //         userData.cityName,
  //         data.weather[0].description.toUpperCase()
  //       );

  //       weatherData.temperature = data.main.temperature;

  //       console.log(weatherData);
  //     } else if (http.readyState === XMLHttpRequest.DONE) {
  //       alert("Something went Error");
  //     }
  //   };
  //   http.send();
}
