import latlngs from "/src/latlngs.js";
console.log(latlngs);

var map = L.map('map').setView([40.712216, -74.22655], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// var latlngs = [
//     [[45.51, -122.68],
//      [37.77, -122.43],
//      [34.04, -118.2]],
//     [[40.78, -73.91],
//      [41.83, -87.62],
//      [32.76, -96.72]]
// ];
var polyline = L.polyline(latlngs, { color: 'red' }).addTo(map);

// zoom the map to the polyline
map.fitBounds(polyline.getBounds());

//L.marker([50.5, 30.5]).addTo(map);

// var latlng = L.latLng(50.5, 30.5);
// var popup = L.popup()
//   .setLatLng(latlng)
//   .setContent('<p>Hello world!<br />This is a nice popup.</p>')
//   .openOn(map);