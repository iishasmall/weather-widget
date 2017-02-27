

function initConditions (data) { 
   
   
var date = new Date();
var time;

var sunrise = [06, 23];
var sunset = [18, 49];
var sunrise_m = sunrise[0] * 60 + sunrise[1]
var sunset_m = sunset[0] * 60 + sunset[1]
var now = date.getHours() * 60 + date.getMinutes();

if (now > sunset_m - 60 && now <= sunset_m + 60) {
    
    time = "dusk";
} else if (now > sunrise_m - 60 && now <= sunrise_m + 60) {
    
    time = "dawn";
} else if (now > sunrise_m + 60 && now <= sunset_m - 60) {
   time="day";
} else {
    time="night";
}

    switch (data){
        case "Partly Cloudy":
        case "Mostly Cloudy":
        case "Scattered Clouds":
        case "Overcast":
        case "Haze":
        case "Light Haze":
        case "Heavy Haze":
            // clouds      
            
            if(time === "dawn" || time === "dusk" || time === "day"){
                changeBg('img/partlysunny.png');
                makeImg("svg/cloud.svg");
                
            }else if(time === "night"){
                makeImg("svg/cloudy-night.svg");
                changeBg('img/cloudynight.png');
            }else{

                makeImg("svg/cloud.svg");
                changeBg('img/partlysunny.png');
            }
        break;

        case "Clear":
        case "Calm":
    
           if(time === "dawn" || time === "dusk" || time === "day"){
                makeImg("svg/sun.svg");
            }else if (time === "night"){
                makeImg("svg/moon.svg");
                changeBg('img/night.png');
            }else{
                makeImg("svg/sun.svg");
                 changeBg('img/sunny.png');
            }
            
        break;

        case "Shallow Fog":
        case "Patches of Fog":
        case "Partial Fog":
        case "Freezing Fog":
        case "Light Freezing Fog":
        case "Heavy Freezing Fog":
        case "Mist":
        case "Light Mist":
        case "Heavy Mist":
        case "Fog":
        case "Light Fog":
        case "Heavy Fog":
        // fog
       
        makeImg("svg/fog.svg");
        changeBg('img/fog.png');
        break;

        case "Hail":
        case "Light Hail":
        case "Heavy Hail":
        case "Ice Pellets":
        case "Hail Showers":
        case "Light Hail Showers":
        case "Heavy Hail Showers":
        case "Small Hail Showers":
        case "Light Small Hail Showers":
        case "Heavy Small Hail Showers":
        // hail
        makeImg("svg/hail.svg");
        changeBg('img/snow.png');
        break;

        case "Rain":
        case "Light Rain":
        case "Heavy Rain":
        case "Rain Mist":
        case "Light Rain Mist":
        case "Heavy Rain Mist":
        case "Light Rain Showers":
        case "Heavy Rain Showers":
        case "Rain Showers":
        case "Light Rain Showers":
        case "Heavy Rain Showers":
        case "Drizzle":
        case "Light Drizzle":
        case "Heavy Drizzle":
        // rain
        makeImg("svg/rain.svg");
        changeBg('img/rain.png');
        break;

        case "Squalls":
        case "Thunderstorm":
        case "Light Thunderstorm":
        case "Heavy Thunderstorm":
        case "Light Thunderstorms and Rain":
        case "Heavy Thunderstorms and Rain":
        // thunderstorms and rain
        makeImg("svg/storm.svg");
        break;

        case "Light Thunderstorms and Snow":
        case "Heavy Thunderstorms and Snow":
        case "Thunderstorms and Ice Pellets":
        case "Freezing Rain":
        case "Light Freezing Rain":
        case "Heavy Freezing Rain":
        case "Snow Blowing Snow Mist":
        // thunderstorms and snow
         makeImg("svg/hail.svg");
         changeBg('img/snow.png');
        break;

        case "Snow":
        case "Snow Showers":
        case "Light Snow Showers":
        case "Heavy Snow Showers":
        case "Snow Blowing Snow Mist":
        case "Light Snow Blowing Snow Mist":
        case "Heavy Snow Blowing Snow Mist":
        case "Snow Grains":
        case "Light Snow Grains":
        case "Heavy Snow Grains":
        case "Ice Crystals":
        case "Light Ice Crystals":
        case "Heavy Ice Crystals":
        case "Ice Pellets":
        case "Light Ice Pellets":
        case "Heavy Ice Pellets":
        //snow
        makeImg("svg/snowflake.svg");
        changeBg('img/snow.png');
        break;

        default:

         if(time === "dawn" || time === "dusk" || time === "day"){
                makeImg("svg/sun.svg");
            }else if (time === "night"){
                makeImg("svg/moon.svg");
                changeBg('img/night.png');
            }else{
                makeImg("svg/sun.svg");
                changeBg('img/sunny.png');
            }

         break;



    }

};

function makeImg(img){
    
     $("#imgContainer").html("<img src='"+img+"'/>");

}

function changeBg(img){

    $('.container-bg').css("background","url("+img+")");
}

