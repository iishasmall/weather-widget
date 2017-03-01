


function getWeather(){

var api = 'http://api.wunderground.com/api/4ba60343a7656feb/conditions/q/NY/New_York.json';
        
        var myJSON = $.getJSON(api,function(){
        }).done( function(data){

          
            var data_current,dewpoint,temp_f,precip,humidity,visibility,wind,wind_gust,weather,updateInterval;

            data_current = data.current_observation;


            // DewPoint
            dewpoint = data_current['dewpoint_f'];
           // console.log(dewpoint +" - dewpoint");

            //Temperature
            temp_f = data_current['temp_f'];
            //console.log(temp_f + " - temperature");

            //Feels like Temperature
            feelslike_f = data_current['feelslike_f'];
             //console.log(feelslike_f + " - temperature");

            //Precipitation 
            precip = data_current['precip_today_in'];
           // console.log(precip + " - preciptation");

            //Humidity 
            humidity = data_current['relative_humidity'];
            //console.log(humidity + " - humidity");

            //Visibility
            visibility = data_current['visibility_mi'];
            //console.log(visibility + " - visibility");

            //Wind 
            wind = data_current['wind_mph'];
           // console.log(data_current['wind_mph'] + "- wind");

            //Wind Gust 
            wind_gust = data_current['wind_gust_mph'];
             //console.log(wind_gust + " - wind gust");

             //Weather 
             weather = data_current['weather'];
             //console.log(weather + " - weather");

             //Weather tag URL 
             weather_url = data_current['forecast_url'];
             //console.log( weather_url + " - weather");

             //City
             city = data_current['display_location']['full'];
            // console.log(city +" - city");
              
          initConditions(weather);
          initHumidity(humidity,'#humidity');
          initPrecip(precip,'#precip');
          initWind(wind,'#wind');
          initWindGust(wind_gust,'#wind_gust');
          initTemp(temp_f,'#temp');
          initTempF(feelslike_f,'#temp-f');
          initVisibility(visibility,'#visibility');
          initTag(weather_url,'#weather-url');
          initCity(city,'#city');

          
        
        }).fail(function(){
                console.log('weather api not working');

                initErrorMsg(' The Weather API has exceded number of hits allowed in a 24 hour period please check in 24 hours!');
        });

        
}

 getWeather();
 