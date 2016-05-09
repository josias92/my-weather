// My Scripts

// Docs at http://simpleweatherjs.com
$(function() {
  $.simpleWeather({
    location: 'Spokane, WA',
    unit: 'f',
    success: function(weather) {
    
        $('.city').text(weather.city);
        $('.temp').text(weather.temp);
        $('.cond-code').text(weather.code);
        $('.icon img').attr('src', weather.image);
        // console.log(weather);
    
    },
    error: function(error) {
      console.log("Error No Weather");
    
    }
  });
});
