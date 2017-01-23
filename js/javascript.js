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
      var weatherOut = data.weather[0].main;
      // get weather icon
      var weatherDayNight = data.weather[0].icon;
      var weatherID = data.weather[0].id;
      temp = {
        F: Math.round((data.main.temp)) + "° F",
        C: Math.round((data.main.temp - 32) * 5 / 9) + "° C"
      };
      $('#location').text(city + ", " +  state);
      $('#temperature').html(temp['F']);
      $('.weather').text(weatherOut);

      var pickURL = weatherCond[data.weather[0].icon].cond;
      $('#weather-icon').css('background-image', 'url("' + pickURL + '")');

    }
  });
}

  $('span').on('click', function() {
    var current = $(this).data('nextTemp');
    $('span').text(temp[current]);

    if (current == 'C') {
      $(this).data('nextTemp', 'F');
      return;
    }
    $(this).data('nextTemp', 'C');
  });

  var weatherCond = {};

  weatherCond['01d'] = {
    'cond': "http://wfiles.brothersoft.com/b/blue-sky-with-clear-water_175256-1600x1200.jpg"
  };
  weatherCond['01n'] = {
    'cond': "https://web-assets.domo.com/blog/wp-content/uploads/2012/12/nighttimesky.jpeg"
  };
  weatherCond['03d'] = {
    'cond': "http://icons.wunderground.com/data/wximagenew/1/1photogirl93/29-800.jpg"
  };
  weatherCond['03n'] = {
    'cond': "http://icons.wunderground.com/data/wximagenew/1/1photogirl93/29-800.jpg"
  };
  weatherCond['04d'] = {
    'cond': "http://icons.wunderground.com/data/wximagenew/1/1photogirl93/29-800.jpg"
  };
  weatherCond['03n'] = {
    'cond': "http://icons.wunderground.com/data/wximagenew/1/1photogirl93/29-800.jpg"
  };
  weatherCond['09d'] = {
    'cond': "http://www.pureella.com/wp-content/uploads/2011/04/pleasurefeelingpeoplephotographyarm.jpg"
  };
  weatherCond['09n'] = {
    'cond': "http://alm0na.files.wordpress.com/2012/01/rain_drops_at_night-wide.jpg"
  };
  weatherCond['10d'] = {
    'cond': "http://www.pureella.com/wp-content/uploads/2011/04/pleasurefeelingpeoplephotographyarm.jpg"
  };
  weatherCond['10n'] = {
    'cond': "http://alm0na.files.wordpress.com/2012/01/rain_drops_at_night-wide.jpg"
  };
  weatherCond['11d'] = {
    'cond': "http://www.prevention.com/sites/prevention.com/files/images/news/featured_images/thunderstorm-628x363-TS-135165621_0.jpg"
  };
  weatherCond['11n'] = {
    'cond': "http://s3.amazonaws.com/rapgenius/1367403834_night-thunder-storm-lightning.jpg"
  };
  weatherCond['13d'] = {
    'cond': "https://img.buzzfeed.com/buzzfeed-static/static/2014-01/enhanced/webdr07/24/6/anigif_enhanced-buzz-2717-1390562645-0.gif"
  };
  weatherCond['13n'] = {
    'cond': "https://img.buzzfeed.com/buzzfeed-static/static/2014-01/enhanced/webdr07/24/6/anigif_enhanced-buzz-2717-1390562645-0.gif"
  };
  weatherCond['50d'] = {
    'cond': "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTNQzaAiOTFK70eqtdoaKTdMR63raFj-By0SklV6ixQPyTqt6_I"
  };
  weatherCond['50n'] = {
    'cond': "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTNQzaAiOTFK70eqtdoaKTdMR63raFj-By0SklV6ixQPyTqt6_I"
  };

});