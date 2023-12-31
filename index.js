const apiKey = "0428a7a27215d8a86a1f53b565140c61";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?=&units=metric&q="
const searchBox = document.querySelector("#search input");
const searchBtn = document.querySelector("#search button");
const weatherIcon = document.querySelector("#weather-icon")
async function cheackWheather( city){
    const response = await fetch(apiUrl +city +`&appid=${apiKey}`);
    let data = await response.json();
    
    if(response.status == 404){
        document.querySelector("#error").style.display = "block"
        document.querySelector("#weather").style.display = "none"
    }else if(response.status == 400){
        document.querySelector("#error").style.display = "block"
        document.querySelector("#error").innerHTML = "Enter The City Name First**"
        document.querySelector("#weather").style.display = "none"
    }
    else{
        
        document.querySelector("#city").innerHTML = data.name ;
        document.querySelector("#temp").innerHTML = Math.round(data.main.temp)+"°C" ;
        document.querySelector("#humidity").innerHTML = data.main.humidity+ "%";
    document.querySelector("#wind").innerHTML = data.wind.speed+" Km/h";
    if(data.weather[0] == "Clear"){
        weatherIcon.src = "./images/clear.png"
    }
    else if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "./images/clouds.png"
    } 
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "./images/rain.png"
    } 
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "./images/drizzle.png"
    } 
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "./images/mist.png"
    } else if(data.weather[0].main == "Snow"){
        weatherIcon.src = "./images/snow.png"
    }
    document.querySelector("#weather").style.display = "block"
    document.querySelector("#error").style.display = "none"
}
}

searchBtn.addEventListener("click",()=>{
    cheackWheather(searchBox.value);
    searchBox.value = ""
})


