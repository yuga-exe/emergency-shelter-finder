
let map;

function initMap() {

map = new google.maps.Map(document.getElementById("map"), {
center: { lat: 16.5062, lng: 80.6480 },
zoom: 12,
});

}

function getLocation(){

if(navigator.geolocation){

navigator.geolocation.getCurrentPosition(showPosition);

}else{

alert("Geolocation not supported");

}

}

function showPosition(position){

let userLat = position.coords.latitude;
let userLng = position.coords.longitude;

let userLocation = {lat:userLat,lng:userLng};

map.setCenter(userLocation);

new google.maps.Marker({
position:userLocation,
map:map,
title:"Your Location"
});

addShelters();

}

function addShelters(){

const shelters = [
{lat:16.5062,lng:80.6480,name:"Shelter 1"},
{lat:16.5200,lng:80.6300,name:"Shelter 2"},
{lat:16.4950,lng:80.6600,name:"Shelter 3"}
];

shelters.forEach(shelter =>{

new google.maps.Marker({
position:{lat:shelter.lat,lng:shelter.lng},
map:map,
title:shelter.name
});

});

}
