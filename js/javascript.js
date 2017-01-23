$(document).ready(function() {

// API key 
var appID = "&APPID=1af00c9ec196ff14716375cebe917a01";
var city;
var state;
var fahrenheit = "&units=imperial";
var temp;

// using a geo-location API to get city and state info of current user
$.getJSON('http://ip-api.com/json/?callback=?', function(data) {
  city = data.city;
  state = data.regionName;
  getWeather(city, state);
});

// using weather API and outputting results into our HTML
function getWeather(city, state) {
  var api = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "," + state + "" + fahrenheit + "" + appID;

  $.ajax({
    url: api,
    dataType: 'json',
    success: function(data) {
      console.log(JSON.stringify(data));
      // get condition of weather
      var weatherCondition = data.weather[0].main;
      // get weather icon
      var weatherDayNight = data.weather[0].icon;
      var weatherID = data.weather[0].id;
      temp = {
        F: Math.round((data.main.temp)) + "° F",
        C: Math.round((data.main.temp - 32) * 5 / 9) + "° C"
      };
      $('.cityState').text(city + ", " +  state);
      $('.data-nextTemp').html(temp['F']);
      $('span').text(weatherCondition);


    }
  });
}

// Toggle between C and F
  $('span').on('click', function() {
    var current = $(this).data('nextTemp');
    $('span').text(temp[current]);

    if (current == 'C') {
      $(this).data('nextTemp', 'F');
      return;
    }
    $(this).data('nextTemp', 'C');
  });


});