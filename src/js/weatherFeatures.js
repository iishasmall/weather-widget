
// Humidity 
function initHumidity(data,id){
    $(id).html("<h1>"+"Humidity: "+data+"</h1>");
}

// Precipitation 
function initPrecip(data,id){
    $(id).html("<h1>"+"Precipitation: "+data+"</h1>");
}
// Wind
function initWind(data,id){
    $(id).html("<h1>"+"Wind: "+data+"</h1>"); 
}
//Wind Gust
function initWindGust(data,id){
    $(id).html("<h1>"+"Wind Gust: "+data+"</h1>"); 
}
// Temperature 
function initTemp(data,id){
    $(id).html("<h1 class="+'"temp-txt"'+">"+data+"<sup>&deg;</sup>"+"</h1>"); 
}

// Temperature feels like
function initTempF(data,id){
    $(id).html("<h1>"+"Feels Like: "+data+"<sup>&deg;</sup>"+"</h1>"); 
}
//Visibility
function initVisibility(data,id){
    $(id).html("<h1>"+"Visibility: "+data+"</h1>"); 
}

//Weather URL Tag
function initTag(data,id){
    $(id).html("<a href='"+data+"'target='_blank'><img src='img/wu_logo.png'/></a>"); 
}

//City
function initCity(data,id){
    $(id).html("<h1>"+data+"</h1>"); 
}


function initErrorMsg(msg){
     $('#temp').html("<h1>"+msg+"</h1>"); 
     
}