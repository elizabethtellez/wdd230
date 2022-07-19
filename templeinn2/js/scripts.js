function toggleMenu() {
  document.getElementById("primaryNav").classList.toggle("open");
  document.getElementById("hamburgerBtn").classList.toggle("open");
  document.querySelector(".navbar").classList.toggle("white");
  document.querySelector(".navbar").classList.toggle("no_border");
}
/*function background_border() {
  
}*/
const x = document.getElementById("hamburgerBtn");
x.onclick = toggleMenu;

/*-----------------------------------------------------------------------*/

const apiURL = "../Week_10/weather_api.json";
const iconUrl = "http://openweathermap.org/img/wn/02d@2x.png";
const content = document.querySelector("#forecast");

fetch(apiURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); // temporary checking for valid response and data parsing
    const weatherInfo = jsonObject;
    displayWeatherInfo(weatherInfo);
  });

function displayWeatherInfo(weatherInfo) {
  //create all the elments that will be used
  let title = document.createElement("h3");
  let icon = document.createElement("img");
  let temperature = document.createElement("p");
  let subtitle = document.createElement("h4");
  let windSpeed = document.createElement("p");
  let windChill = document.createElement("p");

  //Changing the value from kelvin to Celsius
  const celsiustemp = weatherInfo.main.temp - 273.15;

  //adding all the textContent to the variables
  title.textContent = "Weather";
  temperature.textContent = celsiustemp.toFixed(1) + " °C";
  subtitle.textContent = weatherInfo.weather[0].description;
  windSpeed.textContent = "Wind Speed:  " + weatherInfo.wind.speed + " km/h";
  if (weatherInfo.main.feels_like == 0) {
    windChill.textContent = "Wind Chill:  N/A";
  } else {
    windChill.textContent = "Wind Chill:  " + weatherInfo.main.feels_like;
  }

  //Building the image attributes
  icon.setAttribute("src", iconUrl);
  icon.setAttribute("class", "icon");
  icon.setAttribute("alt", "icon");

  //Appending the elemnts to the html
  content.appendChild(title);
  content.appendChild(icon);
  content.appendChild(temperature);
  content.appendChild(subtitle);
  content.appendChild(windSpeed);
  content.appendChild(windChill);
}
