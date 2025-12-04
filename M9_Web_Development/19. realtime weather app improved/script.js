// Configuration
const API_KEY = '29c36d36d6ff458080c234316250810';
const favoriteCities = ['Bengaluru', 'Delhi', 'Mumbai', 'Hyderabad', 'London'];
let currentCity = 'Bengaluru';

// DOM Elements
const searchField = document.querySelector('.searchField');
const searchBtn = document.querySelector('.searchBtn');
const mainWeather = document.getElementById('mainWeather');
const loadingState = document.getElementById('loadingState');
const errorMsg = document.getElementById('errorMsg');
const favCitiesDiv = document.getElementById('favoriteCities');

// Event Listeners
searchBtn.addEventListener('click', handleSearch);
searchField.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') handleSearch();
});

// Initialize
displayFavoriteCities();
fetchWeatherData('Bengaluru');

function handleSearch() {
    const city = searchField.value.trim();
    if (city) {
        fetchWeatherData(city);
        searchField.value = '';
    }
}

async function fetchWeatherData(city) {
    try {
        showLoading(true);
        hideError();

        const url = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=yes`;
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error('City not found');
        }

        const data = await response.json();
        updateWeatherUI(data);
        currentCity = city;
        fetchHourlyForecast(city);

    } catch (err) {
        showError(err.message || 'Failed to fetch weather data');
        console.error('Error:', err);
    } finally {
        showLoading(false);
    }
}

function updateWeatherUI(data) {
    const current = data.current;
    const location = data.location;

    // Update main info
    document.querySelector('.location').textContent = `${location.name}, ${location.country}`;
    document.getElementById('temperature').textContent = `${Math.round(current.temp_c)}°C`;
    document.getElementById('condition').textContent = current.condition.text;
    
    // Update date/time
    const [date, time] = location.localtime.split(' ');
    const dayName = getDayName(new Date(date).getDay());
    document.getElementById('dateTime').textContent = `${time} - ${dayName} - ${date}`;

    // Update weather icon
    updateWeatherIcon(current.condition.code, current.is_day);

    // Update details
    document.getElementById('humidity').textContent = `${current.humidity}%`;
    document.getElementById('windSpeed').textContent = `${current.wind_kph.toFixed(1)} km/h`;
    document.getElementById('pressure').textContent = `${current.pressure_mb.toFixed(0)} mb`;
    document.getElementById('visibility').textContent = `${current.vis_km.toFixed(1)} km`;
    document.getElementById('cloudCover').textContent = `${current.cloud}%`;
    document.getElementById('uvIndex').textContent = current.uv ? current.uv.toFixed(1) : 'N/A';
}

async function fetchHourlyForecast(city) {
    try {
        const url = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=1&aqi=no`;
        const response = await fetch(url);
        const data = await response.json();

        const hours = data.forecast.forecastday[0].hour;
        const currentHour = new Date().getHours();
        const upcomingHours = hours.slice(currentHour, currentHour + 12);

        const forecastHTML = upcomingHours.map(hour => `
            <div class="hour-card">
                <div class="hour-time">${new Date(hour.time).getHours()}:00</div>
                <div class="hour-icon">${getWeatherEmoji(hour.condition.code, hour.is_day)}</div>
                <div class="hour-temp">${Math.round(hour.temp_c)}°C</div>
            </div>
        `).join('');

        document.getElementById('hourlyForecast').innerHTML = forecastHTML || '<p>No forecast available</p>';
    } catch (err) {
        console.error('Forecast error:', err);
    }
}

function displayFavoriteCities() {
    favCitiesDiv.innerHTML = favoriteCities.map(city => `
        <button class="favorite-btn" onclick="fetchWeatherData('${city}')">${city}</button>
    `).join('');
}

function updateWeatherIcon(code, isDay) {
    const iconEl = document.getElementById('weatherIcon');
    iconEl.innerHTML = getWeatherEmoji(code, isDay);
}

function getWeatherEmoji(code, isDay) {
    // Weather condition codes mapping
    if (code === 1000) return isDay ? '☀️' : '🌙';
    if (code === 1003) return isDay ? '🌤️' : '🌥️';
    if (code === 1006 || code === 1009) return '☁️';
    if (code === 1030) return '🌫️';
    if ([1063, 1069, 1072, 1150, 1153, 1180, 1183, 1186, 1189, 1192, 1195, 1198, 1201, 1204, 1207, 1240, 1243, 1246].includes(code)) return '🌧️';
    if ([1114, 1117, 1210, 1213, 1216, 1219, 1222, 1225, 1237, 1249, 1252, 1255, 1258, 1261, 1264].includes(code)) return '❄️';
    if ([1087, 1279, 1282].includes(code)) return '⛈️';
    return '🌡️';
}

function getDayName(num) {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[num];
}

function showLoading(show) {
    loadingState.style.display = show ? 'block' : 'none';
    mainWeather.style.display = show ? 'none' : 'block';
}

function showError(message) {
    errorMsg.style.display = 'block';
    errorMsg.textContent = `❌ ${message}`;
}

function hideError() {
    errorMsg.style.display = 'none';
}