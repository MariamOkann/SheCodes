let daysDate = new Date()

let days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
]

let day = days[daysDate.getDay()]

let hour = daysDate.getHours()

let minutes = daysDate.getMinutes()

if(minutes < 10){
    minutes = `0${minutes}`
}

if (hour < 10) {
    hour = `0${hour}`
}

let dayAndTime = document.querySelector('#date')

dayAndTime.innerHTML = `${day} ${hour}:${minutes}`


function celsiusChange(){
    let temperature = document.querySelector('#temperature')
    temperature.innerHTML = "25º"
}
let celsiusConversion = document.querySelector('#celsius')
celsiusConversion.addEventListener('click', celsiusChange)

function fahrenheitChange() {
    let temperature = document.querySelector('#temperature')
    temperature.innerHTML = "30º"
}
let fahrenheitConversion = document.querySelector('#fahrenheit')
fahrenheitConversion.addEventListener('click', fahrenheitChange)


// Function to display the weather information on the result page
function displayWeather(response) {
    document.querySelector("#city").innerHTML = response.data.name
    document.querySelector("#temperature").innerHTML = `${Math.round(response.data.main.temp)}º`
}

// Function to fetch weather data from the OpenWeatherMap API
function searchCity(city) {
    let apiKey = "8944afa6845bd7c413a687258d3211ef"
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric`

    axios.get(`${url}&appid=${apiKey}`).then(displayWeather)
}

// Function to handle the city search event
function showCity(event) {
    event.preventDefault()
    let city = document.querySelector('#search-input').value
    searchCity(city)
}


let search = document.querySelector('#search-btn')
search.addEventListener("click", showCity)
// searchCity("Nigeria")
