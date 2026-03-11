let map = L.map('map').setView([16.5062,80.6480],13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
attribution:'© OpenStreetMap'
}).addTo(map);

let shelters=[
{lat:16.5062,lng:80.6480,name:"Shelter 1"},
{lat:16.5200,lng:80.6300,name:"Shelter 2"},
{lat:16.4950,lng:80.6600,name:"Shelter 3"}
];

function showShelters(){

shelters.forEach(function(shelter){

L.marker([shelter.lat,shelter.lng])
.addTo(map)
.bindPopup(shelter.name);

});

}

function getLocation(){

navigator.geolocation.getCurrentPosition(function(position){

let lat=position.coords.latitude;
let lng=position.coords.longitude;

L.marker([lat,lng])
.addTo(map)
.bindPopup("Your Location")
.openPopup();

map.setView([lat,lng],14);

window.userLocation=[lat,lng];

});

}

function distance(a,b,c,d){

return Math.sqrt((a-c)**2+(b-d)**2);

}

function findNearest(){

if(!window.userLocation){

alert("Click Find My Location first");

return;

}

let nearest=null;

let minDist=999;

shelters.forEach(function(s){

let d=distance(userLocation[0],userLocation[1],s.lat,s.lng);

if(d<minDist){

minDist=d;

nearest=s;

}

});

L.marker([nearest.lat,nearest.lng])
.addTo(map)
.bindPopup("Nearest Shelter: "+nearest.name)
.openPopup();

}
