  var baselayers = {
    'Base': base
  };
  var overlays = {
	'System Markers': systems
	'zone1': zone1
  };
  var controlLayers = L.control.layers(null, overlays).addTo(map);