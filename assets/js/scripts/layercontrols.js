  var baselayers = {
    'Base': base
  };
  var overlays = {
	'TestZone1': Kepler,
	'TestZone2': Amador,
	'Zone 1': Zone1,
	'Zone 2 Option A': Zone2OptionA,
	'Zone 2 Option B': Zone2OptionB,
	'Zone 3': Zone3,
	'Zone 4': Zone4,
	'Zone 5': Zone5,
	'Zone 6': Zone6,
	'Zone 7': Zone7,
	'Zone 8': Zone8,
	'Zone 9': Zone9
  };
  var controlLayers = L.control.layers(null, overlays).addTo(map);