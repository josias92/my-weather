// First, load jQuery (required)
// jQuery 2.2.2 loaded via `index.html`

// Second, load Semantic UI JS (required)
// @codekit-prepend "semantic.js";

// Third, Add to Homescreen (optional)
// @codekit-prepend "add-to-homescreen.js";

// Third, load any plugins (optional)
// @codekit-prepend "plugins.js";

// My Scripts

// icons add class



// Tabs Menu usage
$('.menu .item').tab();

// Get Cheney Weather
$.simpleWeather({
    location: '99004',
    woeid: '',
    unit: 'f',
    success: function(weather) {
      
      // Display Data
      $('#cheney .city').text(weather.city);
      $('#cheney .temp').text(weather.temp);
      // Display icon
      $('#cheney i').addClass( 'icon-' + weather.code );
      // Get forecast
      $('#d1').text(weather.forecast[1].date);
      $('#d1').text(weather.forecast[1].high);
      $('#d1').text(weather.forecast[1].code);
        
        // Add custom body class
        if (weather.code >= 26 && weather.code <= 30) {
            //remove class
            $('body').removeClass();
            //add class
            $('body').addClass('bg-1');
            
        }
        
      // Entire weather object
      console.log(weather);
    },
    error: function(error) {
      // Show if weather cannot be retreived
    }
  
  });

// Get Spokane Weather
$.simpleWeather({
    location: '99004',
    woeid: '',
    unit: 'f',
    success: function(weather) {
      
      // Display Data
      $('#cheney .city').text(weather.city);
      $('#cheney .temp').text(weather.temp);
      $('#cheney i').addClass( 'icon-' + weather.code );
        
      // Entire weather object
      console.log(weather);
    },
    error: function(error) {
      // Show if weather cannot be retreived
    }
  
  });

// GEOLOCATION

// Get Geolocation
if ('geolocation' in navigator) {

$('.geo button').show(); 

} else {

$('.geo button').hide();
$('.geo').prepend('<p>Geolocation Not Supported</p>');

}

// On Click, Get Geolocation, Call Weather Function
$('.geo .button').click( function() {
  
     
    //load weather using your lat/lng coordinates
    navigator.geolocation.getCurrentPosition(function(position) {
        getWeather(position.coords.latitude+','+position.coords.longitude); 
    });
   
});

// Get Geolocated Weather
var getWeather = function(location) {

    $.simpleWeather({
    location: location,
    woeid: '',
    unit: 'f',
    success: function(weather) {
      
      // Display Data
      $('.geo .temp').text(weather.temp);
      $('.geo .city').text(weather.city);
     // display icon
      $('.geo i').addClass('icon-' + weather.code);
    
      // Entire weather object
      console.log();
    },
    error: function(error) {
      // Show if weather cannot be retreived
    }


};
                    

                    