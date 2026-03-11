function showShelters(){

let shelters = [

/* KURNOOL SHELTERS */

[15.8289,78.0360,"Kurnool Shelter 1"],
[15.8300,78.0400,"Kurnool Shelter 2"],
[15.8320,78.0300,"Kurnool Shelter 3"],
[15.8200,78.0350,"Kurnool Shelter 4"],
[15.8250,78.0450,"Kurnool Shelter 5"],
[15.8350,78.0500,"Kurnool Shelter 6"],
[15.8400,78.0380,"Kurnool Shelter 7"],
[15.8220,78.0280,"Kurnool Shelter 8"],
[15.8180,78.0420,"Kurnool Shelter 9"],
[15.8150,78.0320,"Kurnool Shelter 10"],
[15.8450,78.0550,"Kurnool Shelter 11"],
[15.8500,78.0480,"Kurnool Shelter 12"],
[15.8380,78.0600,"Kurnool Shelter 13"],
[15.8270,78.0580,"Kurnool Shelter 14"],
[15.8185,78.0500,"Kurnool Shelter 15"],
[15.8100,78.0400,"Kurnool Shelter 16"],
[15.8050,78.0350,"Kurnool Shelter 17"],
[15.8000,78.0280,"Kurnool Shelter 18"],
[15.7950,78.0320,"Kurnool Shelter 19"],
[15.7900,78.0400,"Kurnool Shelter 20"],
[15.7850,78.0480,"Kurnool Shelter 21"],
[15.8355,78.0200,"Kurnool Shelter 22"],
[15.8405,78.0250,"Kurnool Shelter 23"],
[15.8455,78.0300,"Kurnool Shelter 24"],
[15.8505,78.0350,"Kurnool Shelter 25"],

/* HYDERABAD SHELTERS */

[17.3841,78.4564,"Hyderabad Shelter 1"],
[17.3900,78.4600,"Hyderabad Shelter 2"],
[17.3950,78.4700,"Hyderabad Shelter 3"],
[17.4000,78.4500,"Hyderabad Shelter 4"],
[17.4100,78.4400,"Hyderabad Shelter 5"],
[17.4200,78.4550,"Hyderabad Shelter 6"],
[17.4300,78.4600,"Hyderabad Shelter 7"],
[17.4400,78.4700,"Hyderabad Shelter 8"],
[17.4500,78.4800,"Hyderabad Shelter 9"],
[17.4600,78.4500,"Hyderabad Shelter 10"],
[17.4700,78.4400,"Hyderabad Shelter 11"],
[17.4800,78.4300,"Hyderabad Shelter 12"],
[17.4900,78.4200,"Hyderabad Shelter 13"],
[17.5000,78.4100,"Hyderabad Shelter 14"],
[17.5100,78.4000,"Hyderabad Shelter 15"],
[17.3600,78.4700,"Hyderabad Shelter 16"],
[17.3500,78.4800,"Hyderabad Shelter 17"],
[17.3400,78.4900,"Hyderabad Shelter 18"],
[17.3300,78.5000,"Hyderabad Shelter 19"],
[17.3200,78.5100,"Hyderabad Shelter 20"],
[17.3100,78.5200,"Hyderabad Shelter 21"],
[17.3000,78.5300,"Hyderabad Shelter 22"],
[17.2900,78.5400,"Hyderabad Shelter 23"],
[17.2800,78.5500,"Hyderabad Shelter 24"],
[17.2700,78.5600,"Hyderabad Shelter 25"]

];

shelters.forEach(function(shelter){

L.marker([shelter[0],shelter[1]])
.addTo(map)
.bindPopup(shelter[2]);

});

}
