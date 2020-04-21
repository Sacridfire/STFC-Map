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