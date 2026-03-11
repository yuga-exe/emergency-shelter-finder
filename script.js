let map = L.map('map').setView([15.2,78.3],6);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
attribution:'© OpenStreetMap'
}).addTo(map);


let shelters = [

{lat:15.8333,lng:78.0500,name:"Kurnool Shelter 1"},
{lat:15.8360,lng:78.0520,name:"Kurnool Shelter 2"},
{lat:15.8310,lng:78.0470,name:"Kurnool Shelter 3"},
{lat:15.8290,lng:78.0540,name:"Kurnool Shelter 4"},
{lat:15.8350,lng:78.0580,name:"Kurnool Shelter 5"},

{lat:15.4833,lng:78.4833,name:"Nandyal Shelter 1"},
{lat:15.4860,lng:78.4860,name:"Nandyal Shelter 2"},
{lat:15.4810,lng:78.4800,name:"Nandyal Shelter 3"},
{lat:15.4790,lng:78.4880,name:"Nandyal Shelter 4"},
{lat:15.4850,lng:78.4900,name:"Nandyal Shelter 5"},

{lat:14.4667,lng:78.8167,name:"Kadapa Shelter 1"},
{lat:14.4690,lng:78.8200,name:"Kadapa Shelter 2"},
{lat:14.4630,lng:78.8140,name:"Kadapa Shelter 3"},
{lat:14.4700,lng:78.8220,name:"Kadapa Shelter 4"},
{lat:14.4680,lng:78.8100,name:"Kadapa Shelter 5"},

{lat:13.6288,lng:79.4192,name:"Tirupati Shelter 1"},
{lat:13.6310,lng:79.4220,name:"Tirupati Shelter 2"},
{lat:13.6260,lng:79.4170,name:"Tirupati Shelter 3"},
{lat:13.6330,lng:79.4240,name:"Tirupati Shelter 4"},
{lat:13.6290,lng:79.4150,name:"Tirupati Shelter 5"}

];

let userLocation=null;
let nearestShelter=null;


function showShelters(){

let bounds=[];

shelters.forEach(function(s){

L.marker([s.lat,s.lng])
.addTo(map)
.bindPopup(s.name);

bounds.push([s.lat,s.lng]);

});

map.fitBounds(bounds);

}


function getLocation(){

navigator.geolocation.getCurrentPosition(function(pos){

let lat=pos.coords.latitude;
let lng=pos.coords.longitude;

userLocation=[lat,lng];

L.marker(userLocation)
.addTo(map)
.bindPopup("Your Location")
.openPopup();

map.setView(userLocation,10);

});

}


function distance(a,b,c,d){

return Math.sqrt((a-c)**2+(b-d)**2);

}


function findNearest(){

if(!userLocation){

alert("Click My Location first");
return;

}

let min=999;

shelters.forEach(function(s){

let d=distance(userLocation[0],userLocation[1],s.lat,s.lng);

if(d<min){

min=d;
nearestShelter=s;

}

});

L.marker([nearestShelter.lat,nearestShelter.lng])
.addTo(map)
.bindPopup("Nearest Shelter: "+nearestShelter.name)
.openPopup();

}


function showRoute(){

if(!nearestShelter||!userLocation){

alert("Find nearest shelter first");
return;

}

let lat=userLocation[0];
let lng=userLocation[1];

let url="https://www.openstreetmap.org/directions?engine=fossgis_osrm_car&route="
+lat+","+lng+";"+nearestShelter.lat+","+nearestShelter.lng;

window.open(url);

}


function sendSOS(){

if(!userLocation){
alert("Click My Location first");
return;
}

let phone = "7981471506";

let message = "Emergency! I need help. My location: https://maps.google.com/?q="
+userLocation[0]+","+userLocation[1];

window.location.href = "sms:"+phone+"?body="+encodeURIComponent(message);

}
