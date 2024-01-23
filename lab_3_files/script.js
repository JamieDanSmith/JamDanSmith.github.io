// The value for 'accessToken' begins with 'pk...'
mapboxgl.accessToken = "pk.eyJ1IjoiamFtaWUtZC1zbWl0aCIsImEiOiJjbHI2ZHM1a3gxdWR4MnBwOGRlb2N3aXgxIn0.mAsYU3YISvUNVypTbMs4Jg";

mapboxgl.accessToken = "pk.eyJ1IjoiamFtaWUtZC1zbWl0aCIsImEiOiJjbHI2ZHM1a3gxdWR4MnBwOGRlb2N3aXgxIn0.mAsYU3YISvUNVypTbMs4Jg";
const map = new mapboxgl.Map({
 container: 'map', // container element id
 style: 'mapbox://styles/mapbox/light-v10',
 center: [-7, 54.7],
 zoom: 7
});

const data_url =
"https://api.mapbox.com/datasets/v1/jamie-d-smith/clrqf9log3lrg1tp59fh4eh4r/features?access_token=pk.eyJ1IjoiamFtaWUtZC1zbWl0aCIsImEiOiJjbHI2ZHM1a3gxdWR4MnBwOGRlb2N3aXgxIn0.mAsYU3YISvUNVypTbMs4Jg";

map.on('load', () => {
 map.addLayer({
 id: 'crimes',
 type: 'circle',
 source: {
 type: 'geojson',
 data: data_url
 },
 paint: {
 'circle-radius': 3,
 'circle-color': '#eb4d4b',
 'circle-opacity': 0.7
 }
 });
   filterType = ["!=", ["get", "Crime type"], "placeholder"];
  filterMonth = ["==", ["get", "Month"], "2021-01"];
 //Slider interaction code goes below
 document.getElementById('slider').addEventListener('input', (event) => {
//Get the month value from the slider
 const month = parseInt(event.target.value);
 // get the correct format for the data
 formatted_month = '2022-' + ("0" + month).slice(-2)
 //Create a filter
 filterMonth = ['==', ['get', 'Month'], formatted_month]
 //set the map filter
 map.setFilter('crimes', ['all', filterMonth]);
 // update text in the UI
 document.getElementById('active-month').innerText = month;
11
});
 //Radio button interaction code goes below

 });