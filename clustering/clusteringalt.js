function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 3,
    center: { lat: 50.00, lng: -85.00 },
  });
  // Create an array of alphabetical characters used to label the markers.
   const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// load csv file and parse content
Papa.parse("ontarioparkslist.csv", {
	header: true,
	dynamicTyping: true,
	complete: function (result) {
		const locations = result.data.map(row => ({
			lat: row.Latitude,
			long: row.Longitude,
		}));

	// create markers based on location
		const markers = locations.map((location, i) => {
			return new google.maps.Marker({
				position: location,
				label: labels[i % labels.length],
			});
		});

   	// Add a marker clusterer to manage the markers.
   	new MarkerClusterer(map, markers, {
    	imagePath:
       "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
			});
		},
	});
}

