let map = L.map('map').setView([16.5062,80.6480],13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
attribution:'© OpenStreetMap contributors'
}).addTo(map);

function getLocation(){

navigator.geolocation.getCurrentPosition(function(position){

let lat = position.coords.latitude;
let lng = position.coords.longitude;

let userLocation=[lat,lng];

map.setView(userLocation,14);

L.marker(userLocation)
.addTo(map)
.bindPopup("You are here")
.openPopup();

});

}

function showShelters(){

let shelters=[
[16.5062,80.6480,"Shelter 1"],
[16.5200,80.6300,"Shelter 2"],
[16.4950,80.6600,"Shelter 3"],
[16.5100,80.6400,"Shelter 4"]
];

shelters.forEach(function(shelter){

L.marker([shelter[0],shelter[1]])
.addTo(map)
.bindPopup(shelter[2]);

});

}
