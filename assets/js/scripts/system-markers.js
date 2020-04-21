var greenIcon = L.icon({
    iconUrl: 'assets/icons/system.png',

    iconSize:     [5, 5], // size of the icon
    iconAnchor:   [3, 3], // point of the icon which will correspond to marker's location
    popupAnchor:  [3, 3] // point from which the popup should open relative to the iconAnchor
});

var tooltipThreshold = 2;
map.on('zoomend', function() {
  if (map.getZoom() < tooltipThreshold) {
      $(".leaflet-tooltip").css("display","none")
  } else { 
      $(".leaflet-tooltip").css("display","block")
  }
});


L.marker([-426,-4679], {icon: greenIcon}).bindTooltip("Kepler-018",{permanent: true}).addTo(map);