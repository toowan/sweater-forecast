$(document).ready(function() {  

var appID = '1af00c9ec196ff14716375cebe917a01';
var tempMode = 1;

function getWeather(lat, lon) {
  var apiURI = 'http://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&' + 'lon=' + lon + '&appid=' + appID;

  $.ajax({
    url: apiURI,
    dataType: "json",
    type: "GET",
    async: "false",
    success: function(weatherdata) {
      $("#tempMode").on("click", function() {
        if (this.checked) {
          $("#temp").html(cels + " C&deg");
          console.log("checked");
        } else
          $("#temp").html(fahr + " F&deg");
      });
      console.log(apiURI);
      console.log(weatherdata.name);
      if (weatherdata.name) {
        $("#city-text").html(weatherdata.name + ", " + weatherdata.sys.country);
      }
      if (weatherdata.main.temp) {
        var fahr = Math.floor(weatherdata.main.temp * (9/5) - 459.67);
        var cels = Math.floor(weatherdata.main.temp - 273.15);
        $("#temp").html((tempMode === 1 ? fahr + " F&deg" : cels + " C&deg"));
      }
      if (weatherdata.weather) {
        var imgURL = "http://openweathermap.org/img/w/" + weatherdata.weather[0].icon + ".png";
        console.log(imgURL)
        $("#weatherImg").attr("src", imgURL);
        $("#weather-text").html(weatherdata.weather[0].description);
      }   
    },
    error: function(weatherdata) {
       alert("Error: " + e);
       clearInterval(updateinter);
    }
  });
}

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      getWeather(position.coords.latitude, position.coords.longitude);
    })
  } else {
    alert("geolocation not available");
  }
}



getLocation();


}
