const API_KEY = "291edf2350678ce9d7508168ba1d1beb"

function onGeoOkay(position){
    const lat = position.coords.latitude;
    const long = position.coords.longitude;
    console.log("hi");
    console.log(position);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`
    fetch(url)
    .then(response => response.json()
    .then(data => {
        const weatherContainer = document.querySelector("#weather span:first-child")
        const cityContainer = document.querySelector("#weather span:last-child")
        const name = data.name;
        const weather = data.weather[0].main;
        console.log(data.name, data.weather[0].main)
        weatherContainer.innerText = `${weather} / ${data.main.temp}`;
        cityContainer.innerText = name;
    }));
}

function onGeoError(){
    alert("Can't locate user, weather disabled!")
}

navigator.geolocation.getCurrentPosition(onGeoOkay, onGeoError)