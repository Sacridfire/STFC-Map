  var baselayers = {
    'Base': base
  };
  var overlays = {
	'Zone 1': Kepler
  };
  var controlLayers = L.control.layers(null, overlays).addTo(map);