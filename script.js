const apiKey = "2656f343e3514403bd1141244232812";
const locationInput = document.querySelector("#location");
const btn = document.querySelector("button");
const h1 = document.querySelector("h1");
const weatherInfoDiv = document.querySelector("#weather-info");

btn.addEventListener("click", function(){
    getWeather()
})

function getWeather() {
    const location = locationInput.value;

    if (!location) {
        alert("Please enter a location");
        return;
    }

    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${encodeURIComponent(location)}`;

    fetch(apiUrl)
        .then(res => res.json())
        .then(data => {

            h1.innerHTML=`Weather in ${data.location.name}, ${data.location.country}`
            weatherInfoDiv.innerHTML =
            `<p> Temp: ${data.current.temp_c}°C</p>
            <p> localtime: ${data.location.localtime}</p>`
             

            //incase if you wanna checkout more detail
            console.log(data)           

        })
        .catch(error => {
            
            h1.textContent = `You are a piece of shit, you don't even know a location.`
            
        });
}
