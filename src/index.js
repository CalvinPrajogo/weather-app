import "./style.css"; // Importing the CSS file to apply styles
import partlyCloudy from "./assets/icons/wi-day-cloudy.svg";
import clearSky from "./assets/icons/wi-day-sunny.svg";
import rain from "./assets/icons/wi-rain.svg";
import snow from "./assets/icons/wi-snow.svg";

// Global variable to track current temperature unit and weather data
let isCelsius = false;
let currentWeatherData = null;

async function getWeatherData(city) {
    try {
        const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=HSLWYUPP5G5KM5CS3FCF8EBTM`);
        if (!response.ok) { // Ok if in range 200-299
            throw new Error("HTTP Error: " + response.status);
        }
        const data = await response.json();
        const processed = processWeatherData(data);
        
        // Store the weather data globally so we can convert units without re-fetching
        currentWeatherData = processed;
        
        displayWeatherData(processed);
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
    const currentCond = currentConditions.conditions;

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
        currentCond,
        forecast
    };
}

// Function to convert Fahrenheit to Celsius
function fahrenheitToCelsius(fahrenheit) {
    return Math.round((fahrenheit - 32) * 5/9);
}

// Function to convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    return Math.round((celsius * 9/5) + 32);
}

// Function to get temperature with correct unit
function getTemperatureWithUnit(tempF) {
    if (isCelsius) {
        return `${fahrenheitToCelsius(tempF)}°C`;
    } else {
        return `${Math.round(tempF)}°F`;
    }
}

// Function to display weather data on the page
function displayWeatherData(weather) {
    const currentDiv = document.getElementById("currentWeather");
    const forecastDiv = document.getElementById("forecastCards");

    // Clear previous content
    currentDiv.innerHTML = "";
    forecastDiv.innerHTML = "";

    const currentIconPath = mapWeatherIcons(weather.currentCond);

    // Display current weather with correct temperature unit
    const currentHTML = `
        <h2>Current Weather for ${weather.location}</h2>
        <p>Temperature: ${getTemperatureWithUnit(weather.currentTemp)}</p>
        <img src="${currentIconPath}" alt="${weather.currentCond}">
    `;
    currentDiv.innerHTML = currentHTML;

    // 7-day Forecast with correct temperature units
    const forecastHTML = weather.forecast.map(day => {
        const iconPath = mapWeatherIcons(day.conditions);
        return `
            <div class="forecast-day">
                <p>${day.date}</p>
                <p>High: ${getTemperatureWithUnit(day.tempHigh)}</p>
                <p>Low: ${getTemperatureWithUnit(day.tempLow)}</p>
                <img src="${iconPath}" alt="${day.conditions}">
            </div>
        `;
    }).join(""); // Take the new array of strings and combine into one string

    forecastDiv.innerHTML = forecastHTML;
}

function mapWeatherIcons(condition) { // Map conditions from api to icons in assets
    const lowerCondition = condition.toLowerCase(); // Convert to lowercase once
    
    if (lowerCondition.includes("clear")) {
        return clearSky;
    }
    if (lowerCondition.includes("cloudy")) {
        return partlyCloudy;
    }
    if (lowerCondition.includes("rain")) {
        return rain;
    }
    if (lowerCondition.includes("snow")) {
        return snow;
    }
    return clearSky; // Default icon if no match found
}

// Function to update temperature unit labels
function updateTempLabels() {
    const labels = document.querySelectorAll('.temp-label');
    labels.forEach(label => label.classList.remove('active'));
    
    if (isCelsius) {
        labels[1].classList.add('active'); // °C label
    } else {
        labels[0].classList.add('active'); // °F label
    }
}

// Event listeners
const city_button = document.getElementById("getWeatherBtn");
city_button.addEventListener("click", () => {
    const city = document.getElementById("cityInput").value.toLowerCase();
    getWeatherData(city);
});

// Temperature toggle functionality
const tempToggle = document.getElementById("tempUnit");
tempToggle.addEventListener("change", () => {
    isCelsius = tempToggle.checked;
    updateTempLabels();
    
    // If we have weather data, re-display it with new units
    if (currentWeatherData) {
        displayWeatherData(currentWeatherData);
    }
});

// Initialize temperature labels on page load
updateTempLabels();