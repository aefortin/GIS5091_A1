var map = L.map('map').setView([38.6270,-90.1994], 10);

  // load a tile layer
 L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}{r}.{ext}', {
	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	subdomains: 'abcd',
	minZoom: 0,
	maxZoom: 20,
	ext: 'png'
}).addTo(map);

var marker = L.marker([38.592949,-90.3640968]).addTo(map);
var marker2 = L.marker([38.5921553,-90.3404436]).addTo(map);
var marker3 = L.marker([38.6093916,-90.262519]).addTo(map);
var marker4 = L.marker([38.6090375,-90.2015727]).addTo(map);
var marker5 = L.marker([38.6040077,-90.2183497]).addTo(map);

marker.bindPopup("<b>Resturant 1</b><br>Perennial on Lockwood").openPopup();
marker2.bindPopup("<b>Resturant 2</b><br>Balkan Treat Box").openPopup();
marker3.bindPopup("<b>Resturant 3</b><br>Missouri Botanical Garden").openPopup();
marker4.bindPopup("<b>Resturant 4</b><br>The Wood Shack Soulard").openPopup();
marker5.bindPopup("<b>Resturant 5</b><br>Peacemaker Lobster & Crab").openPopup();
