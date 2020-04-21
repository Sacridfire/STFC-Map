  // initialize the map
	var map = L.map('map', {crs: L.CRS.Simple, maxZoom:10, minZoom: -2}).setView([-4679,-426]);
	var bounds = [[-2238,-2358], [1462,-6458]];
	var image = L.imageOverlay('assets/baked-map.png', bounds).addTo(map);
	map.fitBounds(bounds);
	
	var tooltipThreshold = 2;
		map.on('zoomend', function() {
			if (map.getZoom() < tooltipThreshold) {
			$(".leaflet-tooltip").css("display","none")
			} else { 
			$(".leaflet-tooltip").css("display","block")
			}
});

    // load Travel Paths
  $.getJSON("assets/json/travel-paths.geojson",function(data){
    // add GeoJSON layer to the map once the file is loaded
    L.geoJson(data).addTo(map);
  });
  
    // load Klingon Territory
  $.getJSON("assets/json/kli-territory.geojson",function(data){
    // add GeoJSON layer to the map once the file is loaded
    L.geoJson(data).addTo(map);
  });
  
    // load Romulus Territory
  $.getJSON("assets/json/rom-territory.geojson",function(data){
    // add GeoJSON layer to the map once the file is loaded
    L.geoJson(data).addTo(map);
  });

    // load Federation Territory

  
    // load Augment Territory
  $.getJSON("assets/json/aug-territory.geojson",function(data){
    // add GeoJSON layer to the map once the file is loaded
    L.geoJson(data).addTo(map);
  });
  
	// load system names
  //$.getJSON("assets/json/systems.geojson",function(data){
    // add GeoJSON layer to the map once the file is loaded
    //L.geoJson(data).addTo(map);
  //});
  
  L.control.mousePosition().addTo(map);