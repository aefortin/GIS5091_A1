var map = L.map('map').setView([38.634409,-90.2849854], 10);

L.tileLayer('https://a.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map tiles by Stamen Design, under CC BY 3.0.',
        maxZoom: 18
}).addTo(map);

var marker = L.marker([38.592949,-90.3640968]).addTo(map);
var marker2 = L.marker([38.5921553,-90.3404436]).addTo(map);
var marker3 = L.marker([38.6268818,-90.2569601]).addTo(map);
var marker4 = L.marker([38.6090375,-90.2015727]).addTo(map);
var marker5 = L.marker([38.6040077,-90.2183497]).addTo(map);

marker.bindPopup("<b>Resturant 1</b><br>Perennial on Lockwood").openPopup();
marker2.bindPopup("<b>Resturant 2</b><br>Balkan Treat Box").openPopup();
marker3.bindPopup("<b>Resturant 3</b><br>Sauce on the Side").openPopup();
marker4.bindPopup("<b>Resturant 4</b><br>The Wood Shack Soulard").openPopup();
marker5.bindPopup("<b>Resturant 5</b><br>Peacemaker Lobster & Crab").openPopup();
