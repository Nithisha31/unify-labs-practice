
const cities = [
    { name: "Hyderabad", lat: 17.3850, lon: 78.4867, id: "hyderabad" },
    { name: "Warangal", lat: 17.9689, lon: 79.5941, id: "warangal" },
    { name: "Bhupalpally", lat: 18.4386, lon: 79.8672, id: "bhupalpally" }
];

async function fetchWeather(city) {
    const spinner = document.getElementById("spinner");
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${city.lat}&longitude=${city.lon}&current_weather=true`;

    try {
        spinner.style.display = "block";

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Unable to fetch weather data");
        }

        const data = await response.json();

        spinner.style.display = "none";

        const card = document.getElementById(city.id);

        card.innerHTML = `
            <h2>${city.name}</h2>
            <p><strong>🌡 Temperature:</strong> ${data.current_weather.temperature} °C</p>
            <p><strong>💨 Wind Speed:</strong> ${data.current_weather.windspeed} km/h</p>
            <p><strong>🧭 Wind Direction:</strong> ${data.current_weather.winddirection}°</p>
            <p><strong>⏰ Time:</strong> ${data.current_weather.time}</p>
        `;

    } catch (error) {
        spinner.style.display = "none";
        const card = document.getElementById(city.id);
        card.innerHTML = `<p>Error: ${error.message}</p>`;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    cities.forEach(city => fetchWeather(city));
});
