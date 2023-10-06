// This array contains the coordinates for all bus stops between MIT and Harvard
const busStops = [
    [76.9558,11.0168],
    [76.9674,11.0176],
    [76.9870,11.0223],
    [77.0296,11.0007],
    [77.0490,11.0033],
    [77.0957,11.0179],
    [77.1246,11.0254],
    [77.1331,11.0260],
  ];
  
  
  // TODO: add your own access token
  mapboxgl.accessToken = 'pk.eyJ1Ijoic2VudGhpbGt1cHB1c3dhbXkiLCJhIjoiY2twbTlkMzBlMDQxYjJ2bXcwcG5xdnhzNCJ9.mmPcPQN_3raRRh8Q0S1kEw';
  
  
  // This is the map instance
  let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [76.9558,11.0168],
    zoom: 14,
  });
  
  
  // TODO: add a marker to the map at the first coordinates in the array busStops. The marker variable should be named "marker"
  var marker= new mapboxgl.Marker()
              .setLngLat([76.9558,11.0168])
              .addTo(map);
  // counter here represents the index of the current bus stop
  let counter = 0;
  function move() {
    // TODO: move the marker on the map every 1000ms. Use the function marker.setLngLat() to update the marker coordinates
    // Use counter to access bus stops in the array busStops
    // Make sure you call move() after you increment the counter.
    setTimeout(()=> {
      if (counter>=busStops.length) return;
      marker.setLngLat(busStops[counter]);
      counter++;
      move();
      },1000);
  }
  
  
  // Do not edit code past this point
  if (typeof module !== 'undefined') {
    module.exports = { move };
  }
  