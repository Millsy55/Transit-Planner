var map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}',{
        attribution: '© OpenStreetMap contributors',
        maxZoom: 16,
        minZoom: 8
}).addTo(map);

var layer_stations = L.featureGroup();

map.addLayer(layer_stations);


function settingsHide(){
  document.getElementById("settings-main").style.visibility = "hidden";
}

function settingsShow(){
  document.getElementById("settings-main").style.visibility = "visible";
}
