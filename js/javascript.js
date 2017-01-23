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


