document.addEventListener('DOMContentLoaded', cityWeather)

function weatherDataFetch( city ) {
    var key = '2480136665cdb67131edff2957abc326';
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
        .then(function(resp) {
            return resp.json()
        })
        .then(function(data) {
            console.log(data);
            drawWeather();
    })
    .catch(function() {

    });
}

function cityWeather(e) {
    weatherDataFetch('Tallinn')
}