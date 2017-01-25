


$(document).ready(function() {  

  // global variables
  var appID = '1af00c9ec196ff14716375cebe917a01';
  var lat; 
  var lon; 
  var googleMapsUrl = 'https://maps.googleapis.com/maps/api/place/autocomplete/json?input=Paris&types=geocode&key=AIzaSyC3NdHq48NCNlfEnW5Hm98PvTHybNVxfJc'; 

  // autocomplete places
  searchedCity = new google.maps.places.Autocomplete(
    (document.getElementById('autocomplete')), {
        types: ['geocode']
  });


  // Get user's local location (latitude and longtitude) and weather
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
         lat = position.coords.latitude;
         lon = position.coords.longitude; 

         // Use ajax to get data from openweathermap's API
         var url = 'http://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&' + 'lon=' + lon + '&appid=' + appID;
         $.ajax(url, {
          success: openWeatherCallback
        })
    });
  }

  // Update weather info for searched location when search button is clicked. 
  $('.btn-search').click(function() {
    var query = searchedCity.getPlace().formatted_address;
    console.log(query);
    $.ajax('http://api.openweathermap.org/data/2.5/weather?q=' + query + '&appid=' + appID, {
      success: openWeatherCallback
    });

  });


  // Callback function to update weather info
  function openWeatherCallback(weatherdata) {
    var condition = weatherdata.weather[0].description;
    var id = weatherdata.weather[0].id;
    // Convert Kelvin to F
    var fahrenheit = kelvinToF(weatherdata.main.temp);
    // Convert Kelvin to C
    var celsius = kelvinToC(weatherdata.main.temp);
    $('.temp.f-deg').text(fahrenheit);
    $('.temp.c-deg').text(celsius);
    $('#location').text(weatherdata.name + ', ' + weatherdata.sys.country);
    $('#condition').html(condition);
    weatherIcon(id);
  }
  
  // Convert temperature units
  function kelvinToF (kelvin) {
    var fahrenheit =  Math.floor(kelvin * (9/5) - 459.67) + '\xB0' +'F';
    return fahrenheit;
  }

  function kelvinToC (kelvin) {
    var celsius = Math.floor(kelvin - 273.15) + '\xB0' + 'C';
    return celsius; 
  }


  // If temperature unit toggle switch is activated
  $('#tempMode').change(function(event) {
    if ($(this).is(':checked')) {
      $('.f-deg').addClass('hidden');
      $('.c-deg').removeClass('hidden');
    } else {
      $('.c-deg').addClass('hidden');
      $('.f-deg').removeClass('hidden');
    }
  });

  // Get weather icon based on id
  function weatherIcon(id) {
    if (id >= 200 && id <= 232) {
      $('#icon').addClass('wi-thunderstorm');
    } else if (id >= 300 && id <= 331) {
      $('#icon').addClass('wi-showers');
    } else if (id >= 500 && id <= 531) {
      $('#icon').addClass('wi-rain');
    } else if (id >= 600 && id <= 622) {
      $('#icon').addClass('wi-snow');
    } else if (id == 741) {
      $('#icon').addClass('wi-fog');
    } else if (id == 800) {
      $('#icon').addClass('wi-day-sunny');
    } else if (id > 800 && id < 805) {
      $('#icon').addClass('wi-cloudy');
    }
  }

});

