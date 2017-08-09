


function getWeather() {

        var api = 'http://api.wunderground.com/api/4ba60343a7656feb/conditions/q/NY/New_York.json';

        var myJSON = $.getJSON(api, function () {
        }).done(function (data) {


                var data_current, dewpoint, temp_f, precip, humidity, visibility, wind, wind_gust, weather, updateInterval;

                data_current = data.current_observation;


                // DewPoint
                dewpoint = data_current['dewpoint_f'];


                //Temperature
                temp_f = data_current['temp_f'];


                //Feels like Temperature
                feelslike_f = data_current['feelslike_f'];


                //Precipitation 
                precip = data_current['precip_today_in'];


                //Humidity 
                humidity = data_current['relative_humidity'];


                //Visibility
                visibility = data_current['visibility_mi'];


                //Wind 
                wind = data_current['wind_mph'];


                //Wind Gust 
                wind_gust = data_current['wind_gust_mph'];


                //Weather 
                weather = data_current['weather'];


                //Weather tag URL 
                weather_url = data_current['forecast_url'];


                //City
                city = data_current['display_location']['full'];


                initConditions(weather);
                //init Weather Features
                var initWeather = new initWeatherFeatures();
                initWeather.initHumidity(humidity, '#humidity');
                initWeather.initPrecip(precip, '#precip');
                initWeather.initWind(wind, '#wind');
                initWeather.initWindGust(wind_gust, '#wind_gust');
                initWeather.initTemp(temp_f, '#temp');
                initWeather.initTempF(feelslike_f, '#temp-f');
                initWeather.initVisibility(visibility, '#visibility');
                initWeather.initTag(weather_url, '#weather-url');
                initWeather.initCity(city, '#city');




        }).fail(function () {
                console.log('weather api not working');

                initErrorMsg(' The Weather API has exceded number of hits allowed in a 24 hour period please check in 24 hours!');
        });


}

getWeather();
