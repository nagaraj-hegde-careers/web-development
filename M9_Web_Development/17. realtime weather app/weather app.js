// http://api.weatherapi.com/v1/current.json?key=29c36d36d6ff458080c234316250810&q=Bengaluru&aqi=no

async function fetchData(target) {
    try {
        const url = `http://api.weatherapi.com/v1/current.json?key=29c36d36d6ff458080c234316250810&q=${target}&aqi=no`;
        const response = await fetch(url);
        const data = await response.json();
        console.log(data)

        // extract useful values from data JSON
        const currentTemp = data.current.temp_c;
        const currentCondition = data.current.condition.text;
        const locationName = data.location.name;
        const localTime = data.location.localtime;
        const conditionEmoji = data.current.condition.icon;

        // identify DOM nodes
        const temperatureField = document.querySelector('.temp');
        const weatherField = document.querySelector('.weather_condition span');
        const cityField = document.querySelector('.time_location p');
        const dateField = document.querySelector('.time_location span');
        const emojiField = document.querySelector('.weather_condition img');

        // time handling
        const [exactDate, exactTime] = localTime.split(' ');
        console.log(exactDate, exactTime);
        const dayInNumber = new Date(exactDate).getDay();
        const exactDay = getFullDay(dayInNumber); 

        // update DOM
        temperatureField.innerText = currentTemp;
        weatherField.innerText = currentCondition;
        cityField.innerText = locationName;
        dateField.innerText = `${exactTime} - ${exactDay} - ${exactDate}`;
        emojiField.src = conditionEmoji;

    }catch (err){
        console.log(err)
    }
}

const searchField = document.querySelector('.searchField');
const form = document.querySelector('form');
form.addEventListener('submit', searchCallback);
function searchCallback(ev){
    ev.preventDefault();
    const target = searchField.value;
    fetchData(target);
}

function getFullDay(num) {
    switch (num){
        case 0:
            return 'Sunday';
        case 1:
            return 'Monday';
        case 2:
            return 'Tuesday';
        case 3:
            return 'Wednesday';
        case 4:
            return 'Thursday';
        case 5:
            return 'Friday';
        case 6:
            return 'Saturday';
        break;
        default:
            return ''
    }
}