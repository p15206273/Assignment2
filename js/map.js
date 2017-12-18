"use strict";

function initMap() {
  let leicester = {lat: 52.639634, lng: -1.132693};
  let mapDemo = document.getElementById("map");

  // this sets the default location for when the map is first loaded
  let map = new google.maps.Map(mapDemo, {
    zoom: 13,
    center: leicester
  });
	
	// this code puts a marker on the map
	var marker = new google.maps.Marker({
  position: leicester,
  map: map
	});

}