function load_map(){

  //?long=1&lat=1
  var coords = window.location.search;
  var split = coords.indexOf('&');
  var lango = coords.indexOf('long=');
  var lot = coords.indexOf('lat=');
  var lat = coords.substring(lot,coords.length);
  var long = coords.substring(lango,split);
  lat = lat.substring(4)
  long = long.substring(5);
  
  if(isNaN(lat) && isNaN(long)){
    window.location.href = "error.html"
  }

//console.log(lat);
//console.log(long);

mapboxgl.accessToken = 'pk.eyJ1IjoiZHVhbHBoYW50b21zIiwiYSI6ImNqdTQ1OXJodDB1Y3ozeXBnZ2dsOHVlamcifQ.lplrxD-umCpz0evrL9tf2w';
var map = new mapboxgl.Map({
container: 'map', // container id
style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
center: [long, lat], // starting position [lng, lat] [-79.38537692798894, 43.61104380344537] -> Toronto
zoom: 5 // starting zoom
})

// disable map rotation using right click + drag
map.dragRotate.disable();
 
// disable map rotation using touch rotation gesture
map.touchZoomRotate.disableRotation();

var coordinates = document.getElementById('coordinates');

//display marker
var marker = new mapboxgl.Marker({
  draggable: false
  })
  .setLngLat([long, lat])
  .addTo(map);
    
map.on('mousemove', function (e) {
  var lngLat = marker.getLngLat();
  coordinates.style.display = 'block';
  coordinates.innerHTML = 'Longitude: ' + e.lngLat.lng + '<br />Latitude: ' + e.lngLat.lat;
})
};