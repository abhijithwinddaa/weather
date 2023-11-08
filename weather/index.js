let cityInputEl = document.getElementById("cityInput");
let addBtnEl = document.getElementById("addBtn");
let cityOutPutEl = document.getElementById("cityOutPut");
let descriptionEl = document.getElementById("description");
let tempEl = document.getElementById("temp");
let windEl = document.getElementById("wind");
let appid = "2ac2b8a0a935288446791ef0ba0e717b";

function convertion(Val) {
    return (Val - 273).toFixed(3);
}

function onclickSubmitButton() {
    let inputValue = cityInputEl.value;
    let url = "https://api.openweathermap.org/data/2.5/weather?q=" + inputValue + "&appid=" + appid;
    let options = {
        method: "GET"
    };
    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            let nameVal = jsonData["name"];
            let descripVal = jsonData["weather"]["0"]["description"];
            let tempVal = jsonData["main"]["temp"];
            let wndspeed = jsonData["wind"]["speed"];

            cityOutPutEl.textContent = "weather of " + nameVal;
            descriptionEl.textContent = "Sky Conditions:" + descripVal;
            tempEl.textContent = "Temperature:" + convertion(tempVal) + "c";
            windEl.textContent = wndspeed + "Km/h";
        })

        .catch(err => alert("You Entered Wrong City Name"))
}

addBtnEl.addEventListener("click", onclickSubmitButton);