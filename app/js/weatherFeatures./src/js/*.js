
// Humidity 
function initHumidity(data,id){
    $(id).append("<h1>"+"Humidity: "+data+"</h1>");
}

// Precipitation 
function initPrecip(data,id){
    $(id).append("<h1>"+"Precipitation: "+data+"</h1>");
}
// Wind
function initWind(data,id){
    $(id).append("<h1>"+"Wind: "+data+"</h1>"); 
}
//Wind Gust
function initWindGust(data,id){
    $(id).append("<h1>"+"Wind Gust: "+data+"</h1>"); 
}
// Temperature 
function initTemp(data,id){
    $(id).append("<h1>"+"Temperature: "+data+"</h1>"); 
}

// Temperature feels like
function initTempF(data,id){
    $(id).append("<h1>"+"Feels Like: "+data+"</h1>"); 
}
//Visibility
function initVisibility(data,id){
    $(id).append("<h1>"+"Visibility: "+data+"</h1>"); 
}

//Weather URL Tag
function initTag(data,id){
    $(id).append("<h1>"+"Powered by: "+"<a href='"+data+"'target='_blank'>"+data+"</a>"+"</h1>"); 
}

//City
function initCity(data,id){
    $(id).append("<h1>"+data+" Weather"+"</h1>"); 
}