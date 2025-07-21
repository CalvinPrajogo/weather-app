import "./style.css"; // Importing the CSS file to apply styles

async function getWeatherData(city) {
    try {
        const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=HSLWYUPP5G5KM5CS3FCF8EBTM`);
        if (!response.ok) {
            throw new Error("HTTP Error: " + response.status);
        }
        const data = await response.json();
        console.log("Weather data for", city, ":", data);
    } catch (error) {
        console.error("Error fetching weather data:", error);
    }
}