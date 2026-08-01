const API_KEY = "566a15fd21bf442c9b753012263007";

const cityInput = document.getElementById("city");

const searchBtn = document.getElementById("searchBtn");

const cityName = document.getElementById("cityName");

const temperature = document.getElementById("temperature");

const description = document.getElementById("description");
const weatherIcon = document.getElementById("weatherIcon");

const humidity = document.getElementById("humidity");

const wind = document.getElementById("wind");


searchBtn.addEventListener("click", getWeather);


async function getWeather(){

    const city = cityInput.value;

    if(city===""){
        alert("Enter city name");
        return;
    }

    const url = `http://api.weatherapi.com/v1/current.json?key=566a15fd21bf442c9b753012263007&q=${city}&aqi=no`;

    try{

        const response = await fetch(url);
        

        if(!response.ok){

            // throw new Error("City Not Found");
             throw new Error(`HTTP Error: ${response.status}`);
        }

        const data = await response.json();
      
          console.log(data);
        displayWeather(data);

    }

    catch(error){

        alert(error.message);
    }

}

function displayWeather(data){
    

    cityName.innerText =
        data.location.name;

    temperature.innerText =
        "🌡 Temperature : " + data.current.temp_c + " °C";

    description.innerText =
        "☁ Weather : " + data.current.condition.text;
    weatherIcon.src = "https:" + data.current.condition.icon;
    weatherIcon.alt = data.current.condition.text;
  weatherIcon.style.visibility = "visible";
    humidity.innerText =
        "💧 Humidity : " + data.current.humidity + "%";

    wind.innerText =
        "🌬 Wind Speed : " + data.current.wind_kph + " m/s";
}