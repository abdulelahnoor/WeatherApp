const setCity = (obj) => {
    document.getElementById("currentCity").innerHTML = 
    `
    <div class="row justify-content-center" id="currentCity">
    <h1 class="display-1">${obj.name}</h1>
    <br />
    <br />
    <h6 class="h6">${obj.weather[0].description}</h6>
    <div class="row align-items-center justify-content-center">
        <div class="col-auto px-5">
            <h1 class="display-1">${obj.main.temp}°</h1>
        </div>
        <div class="col-auto">
            <h6 class="m-0">${obj.main.temp_max}°</h6>
            <hr/>
            <h6 class="m-0">${obj.main.temp_min}°</h6>
        </div>
    </div>
    <div class="card p-4" style="width: 50%; background-color: var(--bs-gray-600);">
        <div class="row">
            <div class="col text-start">
                <h6>Wind: ${obj.wind.speed} m/s</h6>
                <h6>Humidity: ${obj.main.humidity} %</h6>
                <h6>Pressure: ${obj.main.pressure} hPa</h6>
            </div>
            <div class="col">
                <img src="http://openweathermap.org/img/wn/${obj.weather[0].icon}@2x.png" style="width: 5rem;">
            </div>
        </div>
    </div>
</div>
    `
}
const CallAPI = (city) => {
    const APIKEY = "5f54c09da0926b522bb9f01fde44a7ba"
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=metric`).then(d => {
        d.json().then(c => {
            console.log(c)
            setCity(c)
        }).catch(e => {
            console.log(e)
        })
    })
    .catch(e => {
        console.log(e)
    })
}