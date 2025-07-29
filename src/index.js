import "./style.css"; // Importing the CSS file to apply styles

async function getWeatherData(city) {
    try {
        const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=HSLWYUPP5G5KM5CS3FCF8EBTM`);
        if (!response.ok) { // Ok if in range 200-299
            throw new Error("HTTP Error: " + response.status);
        }
        const data = await response.json();
        console.log("Weather data for", city, ":", data);
    } catch (error) {
        console.error("Error fetching weather data:", error);
    }
}

// Function to process JSON data and return object with relevant data
function processWeatherData(data) {
    // Current weather data
    const location = data.resolvedAddress;
    const currentConditions = data.currentConditions;
    const currentTemp = currentConditions.temp;

    // Get data for the next 7 days
    const forecast = data.days
        .slice(0, 7)
        .map(day => ({
            date: day.datetime,
            tempHigh: day.tempmax,
            tempLow: day.tempmin,
            conditions: day.conditions
        }));
    
    return {
        location,
        currentTemp,
        forecast
    };
}

// Function to display weather data on the page
function displayWeatherData(weather) {
    const currentDiv = document.getElementById("currentWeather");
    const forecastDiv = document.getElementById("forecastWeather");

    // Clear previous content
    currentDiv.innerHTML = "";
    forecastDiv.innerHTML = "";

    // Display current weather
    const currentHTML = `
        <h2>Current Weather for ${weather.location}</h2>
        <p>Temperature: ${weather.currentTemp}°F</p>
    `;
    currentDiv.innerHTML = currentHTML;

    // 7-day Forecast
    const forecastHTML = weather.forecast.map(day => {
        return `
            <div class="forecast-day">
                <p>${day.date}</p>
                <p>High: ${day.tempHigh}</p>
                <p>Low: ${day.tempLow}</p>
                <p>Conditions: ${day.conditions}</p>
            </div>
        `;
    }).join(""); // Take the new array of strings and combine into one string

    forecastDiv.innerHTML = `<h2>7-Day Forecast</h2>${forecastHTML}`;
}


const city_button = document.getElementById("getWeatherBtn");
city_button.addEventListener("click", () => {
    const city = document.getElementById("cityInput").value.toLowerCase();
    getWeatherData(city);
})