$(document).ready(function() {


// Erik Flowers Weather Icons
var weatherConditionCodesModule = (function(Module) {

    Module.weatherConditionCodes = {
      200: {
        meaning: "thunderstorm with light rain",
        icon: "wi-owm-200",
        condition: "thunderstorm"
      },
      201: {
        meaning: "thunderstorm with rain",
        icon: "wi-owm-201",
        condition: "thunderstorm"
      },
      202: {
        meaning: "thunder with heavy rain",
        icon: "wi-owm-202",
        condition: "thunderstorm"
      },
      210: {
        meaning: "light thunderstorm",
        icon: "wi-owm-210",
        condition: "thunderstorm"
      },
      211: {
        meaning: "thunderstorm",
        icon: "wi-owm-211",
        condition: "thunderstorm"
      },
      212: {
        meaning: "heavy thunderstorm",
        icon: "wi-owm-212",
        condition: "thunderstorm"
      },
      221: {
        meaning: "ragged thunderstorm",
        icon: "wi-owm-221",
        condition: "thunderstorm"
      },
      230: {
        meaning: "thunderstorm with light drizzle",
        icon: "wi-owm-230",
        condition: "thunderstorm"
      },
      231: {
        meaining: "thunderstorm with drizzle",
        icon: "wi-owm-231",
        condition: "thunderstorm"
      },
      232: {
        meaning: "thunderstorm with heavy drizzle",
        icon: "wi-owm-232",
        condition: "thunderstorm"
      },
      300: {
        meaning: "light intensity drizzle",
        icon: "wi-owm-300",
        condition: "drizzle"
      },
      301: {
        meaning: "drizzle",
        icon: "wi-owm-301",
        condition: "drizzle"
      },
      302: {
        meaning: "heavy intensity drizzle",
        icon: "wi-owm-302",
        condition: "drizzle"
      },
      310: {
        meaning: "drizzle rain",
        icon: "wi-owm-310",
        condition: "drizzle"
      },
      311: {
        meaning: "drizzle rain",
        icon: "wi-owm-311",
        condition: "drizzle"
      },
      312: {
        meaning: "heavy intensity drizzle rain",
        icon: "wi-owm-312",
        condition: "drizzle"
      },
      313: {
        meaning: "shower rain and drizzle",
        icon: "wi-owm-313",
        condition: "drizzle"
      },
      314: {
        meaning: "heavy shower rain and drizzle",
        icon: "wi-owm-314",
        condition: "drizzle"
      },
      321: {
        meaning: "shower drizzle",
        icon: "wi-owm-321",
        condition: "drizzle"
      },
      500: {
        meaning: "light rain",
        icon: "wi-owm-500",
        condition: "rain"
      },
      501: {
        meaning: "moderate rain",
        icon: "wi-owm-501",
        condition: "rain"
      },
      502: {
        meaning: "heavy intensity rain",
        icon: "wi-owm-502",
        condition: "rain"
      },
      503: {
        meaning: "very heavy rain",
        icon: "wi-owm-503",
        condition: "rain"
      },
      504: {
        meaning: "extreme rain",
        icon: "wi-owm-504",
        condition: "rain"
      },
      511: {
        meaning: "freezing rain",
        icon: "wi-owm-511",
        condition: "rain"
      },
      520: {
        meaning: "light intensity shower rain",
        icon: "wi-owm-520",
        condition: "rain"
      },
      521: {
        meaning: "shower rain",
        icon: "wi-owm-521",
        condition: "rain"
      },
      522: {
        meaning: "heavy intensity shower rain",
        icon: "wi-owm-522",
        condition: "rain"
      },
      531: {
        meaning: "ragged shower rain",
        icon: "wi-owm-531",
        condition: "rain"
      },
      600: {
        meaning: "light snow",
        icon: "wi-owm-600",
        condition: "snow"
      },
      601: {
        meaning: "snow",
        icon: "wi-owm-601",
        condition: "snow"
      },
      602: {
        meaning: "heavy snow",
        icon: "wi-owm-602",
        condition: "snow"
      },
      611: {
        meaning: "sleet",
        icon: "wi-owm-611",
        condition: "snow"
      },
      612: {
        meaning: "shower sleet",
        icon: "wi-owm-612",
        condition: "snow"
      },
      615: {
        meaning: "light shower snow",
        icon: "wi-owm-615",
        condition: "snow"
      },
      616: {
        meaning: "rain and snow",
        icon: "wi-owm-616",
        condition: "snow"
      },
      620: {
        meaning: "light shower snow",
        icon: "wi-owm-620",
        condition: "snow"
      },
      621: {
        meaning: "shower snow",
        icon: "wi-owm-621",
        condition: "snow"
      },
      622: {
        meaning: "heavy shower snow",
        icon: "wi-owm-622",
        condition: "snow"
      },
      701: {
        meaning: "mist",
        icon: "wi-owm-701",
        condition: "atmosphere"
      },
      711: {
        meaning: "smoke",
        icon: "wi-owm-711",
        condition: "atmosphere"
      },
      721: {
        meaning: "haze",
        icon: "wi-owm-721",
        condition: "atmosphere"
      },
      731: {
        meaning: "sand, dust whirls",
        icon: "wi-owm-731",
        condition: "atmosphere"
      },
      741: {
        meaning: "fog",
        icon: "wi-owm-741",
        condition: "atmosphere"
      },
      751: {
        meaning: "sand",
        icon: "wi-sandstorm",
        condition: "atmosphere"
      },
      761: {
        meaning: "dust",
        icon: "wi-owm-761",
        condition: "atmosphere"
      },
      762: {
        meaning: "volcanic ash",
        icon: "wi-owm-762",
        condition: "atmosphere"
      },
      771: {
        meaning: "squalls",
        icon: "wi-owm-771",
        condition: "atmosphere"
      },
      781: {
        meaning: "tornado",
        icon: "wi-owm-781",
        condition: "atmosphere"
      },
      800: {
        meaning: "clear sky",
        icon: "wi-owm-800",
        condition: "default"
      },
      801: {
        meaning: "few clouds",
        icon: "wi-owm-801",
        condition: "clouds"
      },
      802: {
        meaning: "few clouds",
        icon: "wi-owm-802",
        condition: "clouds"
      },
      803: {
        meaning: "broken clouds",
        icon: "wi-owm-803",
        condition: "clouds"
      },
      804: {
        meaning: "overcast clouds",
        icon: "wi-owm-804",
        condition: "clouds"
      },
      900: {
        meaning: "tornado",
        icon: "wi-owm-900",
        condition: "extreme"
      },
      901: {
        meaning: "tropical storm",
        icon: "wi-owm-901",
        condition: "extreme"
      },
      902: {
        meaning: "hurricane",
        icon: "wi-owm-902",
        condition: "extreme"
      },
      903: {
        meaning: "cold",
        icon: "wi-owm-903",
        condition: "extreme"
      },
      904: {
        meaning: "hot",
        icon: "wi-owm-904",
        condition: "extreme"
      },
      905: {
        meaning: "windy",
        icon: "wi-owm-905",
        condition: "extreme"
      },
      906: {
        meaning: "hail",
        icon: "wi-owm-906",
        condition: "extreme"
      },
      951: {
        meaning: "calm",
        icon: "",
        condition: "additional"
      },
      952: {
        meaning: "light breeze",
        icon: "",
        condition: "additional"
      },
      953: {
        meaning: "gentle breeze",
        icon: "",
        condition: "additional"
      },
      954: {
        meaning: "moderate breeze",
        icon: "",
        condition: "additional"
      },
      955: {
        meaning: "fresh breeze",
        icon: "",
        condition: "additional"
      },
      956: {
        meaning: "strong breeze",
        icon: "wi-strong-wind",
        condition: "additional"
      },
      957: {
        meaning: "high wind, near gale",
        icon: "wi-owm-957",
        condition: "additional"
      },
      958: {
        meaning: "gale",
        icon: "wi-gale-warning",
        condition: "additional"
      },
      959: {
        meaning: "severe gale",
        icon: "wi-gale-warning",
        condition: "additional"
      },
      960: {
        meaning: "storm",
        icon: "wi-thunderstorm",
        condition: "additional"
      },
      961: {
        meaning: "violent storm",
        icon: "",
        condition: "additional"
      },
      962: {
        meaning: "hurricane",
        icon: "wi-owm-902",
        condition: "additional"
      }
    }
    return Module;

  })(Module || {});


var unitConversionModule = (function(Module) {
    var _weatherTemp = {};

    Module.KelvinToFarenheit = function(temp) {
      /* ( K - 273.15 ) * 1.8 + 32 = C to F formula */
      _weatherTemp.fahrenheit = Math.ceil((temp - 273.15) * 1.8 + 32);
      _weatherTemp.celsius = Math.ceil((_weatherTemp.fahrenheit - 32) * 5 / 9);
      return _weatherTemp;
    };

    Module.weatherTemp = function() {
      return _weatherTemp;
    };

    return Module;

  }(Module || {}));



  var openWeatherURL = "http://api.openweathermap.org/data/2.5/forecast?lat=35&lon=139&APPID=1af00c9ec196ff14716375cebe917a01";

  var ajaxCalls = function(url) {

    return $.ajax({
      url: url
    });
  };

  var geoWeather = function(geo, url) {
    var geoLocation = geo.loc.split(",");
    var latitude = geoLocation[0];
    var longitude = geoLocation[1];
    var url = url.replace(/lat=[^A]+/, "lat=" + encodeURIComponent(latitude) + "&lon=" + encodeURIComponent(longitude) + "&");
    return ajaxCalls(url);
  };

  function setWeatherVariables(response) {
    var temperatureVariables = {}

    temperatureVariables.city = response.city.name;
    temperatureVariables.country = response["city"]["country"];
    temperatureVariables.currentTemp = Module.KelvinToFarenheit((response["list"][0]["main"]["temp"]))["fahrenheit"];
    temperatureVariables.humidity = response["list"][0]["main"]["humidity"];
    var windSpd = response["list"][0]["wind"]["speed"];
    var windDegree = response["list"][0]["wind"]["deg"];
    var weatherID = response["list"][0]["weather"][0]["id"];
    var weatherCondition = Module.weatherConditionCodes[weatherID]["meaning"];
    temperatureVariables.weatherCondition = weatherCondition[0].toUpperCase() + weatherCondition.substring(1);
    temperatureVariables.weatherIcon = Module.weatherConditionCodes[weatherID]["icon"];
  }

  function updateDomWithWeatherVariables(weatherVariable) {
    $("body").removeClass().addClass("weather-background");
    $(".weather-city").append(weatherVariable.city + ", " + weatherVariable.country);
    $(".weather-icon").removeClass().addClass("wi " + weatherVariable.weatherIcon);
    $(".weather-temp").append(weatherVariable.currentTemp);
    $("#weather-conditions").append(weatherVariable.weatherCondition);
    $(".weather").removeClass("hide");
  }

  function handleGeoData(response) {
    var WeatherVariable = setWeatherVariables(response);

    updateDomWithWeatherVariables(WeatherVariable);
  }

  function getWeather(geo) {
    geoWeather(geo, openWeatherURL).
    done(handleGeoData).
    fail(AjaxErrorHandler.errorHandler).
    always(AjaxErrorHandler.alwaysHandler);
  }

  function getGeoCoords() {
    var url = "http://ipinfo.io";
    return $.ajax({
      url: url
    }).
    fail(AjaxErrorHandler.errorHandler).
    always(AjaxErrorHandler.alwaysHandler);
  }

  $.ajaxSetup({
    type: 'GET',
    dataType: "json"
  });

  getGeoCoords().then(getWeather);

  function replaceTempandWindText(weatherUnit, windSpdUnit) {
    $('.weather-temp').text("");
    $('.weather-temp').text(Module.weatherTemp()[weatherUnit]);
    $('.current-image').removeClass().addClass("current-image wi wi-" + weatherUnit);
  }

  function applyImperialOrMetricToDom(fromUnit, toUnit, windUnit) {

    return function(e) {

      if ($("#weather-degree").hasClass("wi-" + fromUnit)) {

        replaceTempandWindText(toUnit, windUnit);

        $(".weather-" + fromUnit).removeClass("disabled-btn");
        $(this).addClass("disabled-btn");
      }
    }
  }

  $(".weather-fahrenheit").click(applyImperialOrMetricToDom("celsius", "fahrenheit", "mph"));

  $(".weather-celsius").click(applyImperialOrMetricToDom("fahrenheit", "celsius", "kph"));

});