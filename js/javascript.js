$(document).ready(function() {  

  // global variables
  var appID = '1af00c9ec196ff14716375cebe917a01';
  var lat; 
  var lon; 

  // autocomplete places
  searchedCity = new google.maps.places.Autocomplete(
    (document.getElementById('autocomplete')), {
        types: ['geocode']
  });


  // Get user's local location (latitude and longtitude) and weather
  $.ajax('http://ip-api.com/json', {
    success: function(data) {
      lat = data.lat;
      lon = data.lon;
      // Use ajax to get data from openweathermap's API
      var url = 'http://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&' + 'lon=' + lon + '&appid=' + appID;
      $.ajax(url, {
        success: openWeatherCallback
      })
    }
  })


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
    console.log(weatherdata);
    // Fetch weather condition for description
    var condition = weatherdata.weather[0].description;
    // Fetch weather id for icon
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


  // Toggle temperature unit switch
  $('#tempMode').change(function(event) {
    if ($(this).is(':checked')) {
      $('.f-deg').addClass('hidden');
      $('.c-deg').removeClass('hidden');
    } else {
      $('.c-deg').addClass('hidden');
      $('.f-deg').removeClass('hidden');
    }
  });

  // Add icon from Erik Flowers based on weather conditions ID
  function weatherIcon(id) {
    if (id >= 200 || id <= 232) {
      $('#icon').addClass('wi-thunderstorm');
    } else if (id >= 300 || id <= 331) {
      $('#icon').addClass('wi-showers');
    } else if (id >= 500 || id <= 531) {
      $('#icon').addClass('wi-rain');
    } else if (id >= 600 || id <= 622) {
      $('#icon').addClass('wi-snow');
    } else if (id == 701 || id == 721) {
      $('#icon').addClass('wi-day-haze');
    } else if (id == 711) {
      $('#icon').addClass('wi-smoke');
    } else if (id == 731) {
      $('#icon').addClass('wi-dust');
    } else if (id == 741) {
      $('#icon').addClass('wi-fog');
    } else if (id == 800 || id == 951) {
      $('#icon').addClass('wi-day-sunny');
    } else if (id >= 801 || id < 805) {
      $('#icon').addClass('wi-cloudy');
    } else if (id == 900) {
      $('#icon').addClass('wi-tornado');
    } else if (id == 906) {
      $('#icon').addClass('wi-hail');
    } else if (id >= 952 || id <= 956 && id == 905) {
      $('#icon').addClass('wi-windy');
    } else if (id >= 957 || id <= 959) {
      $('#icon').addClass('wi-strong-wind');
    } else if (id == 960 || id == 961 || id == 901) {
      $('#icon').addClass('wi-storm-showers');
    } else if (id == 902 || id == 962) {
      $('#icon').addClass('wi-hurricane');
    }
  }

});

