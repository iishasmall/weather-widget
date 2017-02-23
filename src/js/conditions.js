

function initConditions (data) { 
   
   
var date = new Date();
var time;

var sunrise = [06, 23];
var sunset = [20, 49];
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
            // clouds      
            if(time === "dawn" || time === "dusk" || time === "day"){

                makeImg("svg/cloud.svg");
            }else if(time === "night"){
                makeImg("svg/cloudy-night.svg");
            }else{

                makeImg("svg/cloud.svg");
            }
        break;

        case "Clear":
        case "Calm":
    
           if(time === "dawn" || time === "dusk" || time === "day"){
                makeImg("svg/sun.svg");
            }else if (time === "night"){
                makeImg("svg/moon.svg");
            }else{
                makeImg("svg/sun.svg");
            }
            
        break;

        case "Shallow Fog":
        case "Patches of Fog":
        case "Partial Fog":
        case "Freezing Fog":
        case "Mist":
        case "Fog":
        // fog
       
        makeImg("svg/cloud.svg");
        break;

        case "Hail":
        case "Light Hail":
        case "Heavy Hail":
        case "Ice Pellets":
        case "Hail Showers":
        case "Light Hail Showers":
        case "Heavy Hail Showers":
        // hail
        makeImg("svg/hail.svg");
        break;

        case "Rain":
        case "Rain Mist":
        case "Light Rain Mist":
        case "Heavy Rain Mist":
        case "Light Rain Showers":
        case "Heavy Rain Showers":
        // rain
        makeImg("svg/rain.svg");
        break;

        case "Thunderstorm":
        case "Light Thunderstorms and Rain":
        case "Heavy Thunderstorms and Rain":
        // thunderstorms and rain
        makeImg("svg/storm.svg");
        break;

        case "Light Thunderstorms and Snow":
        case "Heavy Thunderstorms and Snow":
        // thunderstorms and snow
         makeImg("svg/hail.svg");
        break;

        case "Snow":
        //snow
        makeImg("svg/snowflake.svg");
        break;

        default:

         if(time === "dawn" || time === "dusk" || time === "day"){
                makeImg("svg/sun.svg");
            }else if (time === "night"){
                makeImg("svg/moon.svg");
            }else{
                makeImg("svg/sun.svg");
            }

         break;



    }

};

function makeImg(img){
    
     $("#imgContainer").append("<img src='"+img+"'/>");

}