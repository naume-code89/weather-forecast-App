function refreshWeather(response) {
    let temperatureElement = document.querySelector("#temperature");
    let temperature = response.data.temperature.current;

     temperatureElement.innerHTML = Math.round(temperature);

}


function searchCity(city) {
 let apiKey = "79f10te4a3db72b2821oed920f46defa";
 let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
 axios.get(apiUrl).then(refreshWeather);
 
 console.log(apiUrl);
}





function searchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  let cityElement = document. querySelector("#heading");
  cityElement.innerHTML = searchInput.value;

  searchCity(searchInput.value);
}

let searFormElement = document.querySelector("#search-form");
searFormElement.addEventListener("submit", searchSubmit);