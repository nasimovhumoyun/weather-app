
function getWeather() {
  var location = document.getElementById("location").value;
  var apiKey = "0d3910ba5ce3b0dac767f65ec3b202b9";
  var url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      var temperature = data.main.temp;
      var description = data.weather[0].description;
      var city = data.name;
      var country = data.sys.country;
      var humid = data.main.humidity;
      var wind = data.wind.speed*3.6;
      var cloud = data.clouds.all;

     if(description=='overcast clouds'){
      document.querySelector('.icon').innerHTML = '<i class="bi bi-clouds"></i>'
     }
     if(description=='clear sky'){
      document.querySelector('.icon').innerHTML = '<i class="bi bi-sun"></i>'
      document.querySelector('.container').style.backgroundImage = "url('assets/img/sky.avif')"
     }
     if(description=='scattered clouds'){
      document.querySelector('.icon').innerHTML = '<i class="bi bi-cloud-sun"></i>'
     }
     if(description=='broken clouds'){
      document.querySelector('.icon').innerHTML = '<i class="bi bi-clouds"></i>'
     }
     if(description=='light rain'){
      document.querySelector('.icon').innerHTML = '<i class="bi bi-cloud-drizzle"></i>'
      document.querySelector('.container').style.backgroundImage = "url('assets/img/rain.avif')"
     }
     if(description=='moderate rain'){
      document.querySelector('.icon').innerHTML = '<i class="bi bi-cloud-drizzle"></i>'
      document.querySelector('.container').style.backgroundImage = "url('assets/img/rain.avif')"
     }
     if(description=='shower rain'){
      document.querySelector('.icon').innerHTML = '<i class="bi bi-cloud-rain-heavy"></i>';
      document.querySelector('.container').style.backgroundImage = "url('assets/img/rain.avif')"
     }


      document.querySelector(".temperature").innerHTML = `${Math.round(temperature)} °C `;
      document.querySelector(".moodd").innerHTML = `${description}`;
      document.querySelector(".cloud").innerHTML = `${cloud} %`;
      document.querySelector(".city").innerHTML = `${city}`;
      document.querySelector(".humid").innerHTML = `${humid} %`;
      document.querySelector(".wind").innerHTML = `${Math.round(wind)} km/h`;
      // document.getElementById("weather").innerHTML = `Current weather in ${city}, ${country}: ${temperature}°C ${description} ${icon}`;
    })
    
    .catch(error => console.error(error));
    
}
