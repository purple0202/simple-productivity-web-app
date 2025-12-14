function onGeoOkay(position){
    console.log(position);
}

function onGeoError(){
    alert("Can't locate user, weather disabled!")
}

navigator.geolocation.getCurrentPosition(onGeoOkay, onGeoError)