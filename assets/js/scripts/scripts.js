  // initialize the map
  var base = L.tileLayer()

  var map = L.map('map', {
    crs: L.CRS.Simple,
    center: [-4679, -426],
    minZoom: -2,
    maxZoom: 10
  });
  var bounds = [
    [-2238, -2358],
    [1462, -6458]
  ];
  var image = L.imageOverlay('assets/baked-map.png', bounds).addTo(map);
  map.fitBounds(bounds);

  var lastZoom;
  var tooltipThreshold = 1;
  map.on('zoomend', function() {
    var zoom = map.getZoom();
    if (zoom < tooltipThreshold && (!lastZoom || lastZoom >= tooltipThreshold)) {
      $(".leaflet-tooltip").css("display", "none")
    } else if (zoom >= tooltipThreshold && (!lastZoom || lastZoom < tooltipThreshold)) {
      $(".leaflet-tooltip").css("display", "block")
    }
    lastZoom = zoom;
  });

  // load Travel Paths
  var paths = null
  $.getJSON("assets/json/travel-paths.geojson", function(data) {
    paths = L.geoJson(data).addTo(map);
  });

  // load Klingon Territory
  var kli = null
  $.getJSON("assets/json/kli-territory.geojson", function(data) {
    kli = L.geoJson(data, {
      style: function(feature) {
        return {
          color: "red",
          weight: 1,
          fillColor: "red",
          fillOpacity: .5
        }
      },
    }).addTo(map);
  });

  // load Romulus Territory
  var rom = null
  $.getJSON("assets/json/rom-territory.geojson", function(data) {
    rom = L.geoJson(data, {
      style: function(feature) {
        return {
          color: "green",
          weight: 1,
          fillColor: "green",
          fillOpacity: .5
        }
      },
    }).addTo(map);
  });

  // load Federation Territory
  var fed = null
  $.getJSON("assets/json/fed-territory.geojson", function(data) {
    fed = L.geoJson(data, {
      style: function(feature) {
        return {
          color: "blue",
          weight: 1,
          fillColor: "blue",
          fillOpacity: .5
        }
      },
    }).addTo(map);
  });

  // load Augment Territory
  var aug = null
  $.getJSON("assets/json/aug-territory.geojson", function(data) {
    aug = L.geoJson(data, {
      style: function(feature) {
        return {
          color: "yellow",
          weight: 1,
          fillColor: "yellow",
          fillOpacity: .5
        }
      },
    }).addTo(map);
  });

  var zone1part1 = L.circle([-426, -4679], {
    color: 'gray',
    fillColor: 'gray',
    fillOpacity: 0.5,
    radius: 65
});
  var zone1part2 = L.circle([-486, -4672], {
    color: 'gray',
    fillColor: 'gray',
    fillOpacity: 0.5,
    radius: 30
});
  var zone1 = L.layerGroup([zone1part1, zone1part2]);
  
  L.control.mousePosition().addTo(map);

  //Remove this after layercontrols.js is finished
  var baselayers = {
    'Base': base
  };
  var overlays = {
	'zone1': zone1
  };
  var controlLayers = L.control.layers(null, overlays).addTo(map);
