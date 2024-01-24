// clustering alt reads the lat and long coords directly from the csv ontarioparkslist and creates markers based on those locations
// sources: https://github.com/maggiehm/nzamorawilson-map/blob/main/index.html & chat GPT


function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 3,
    center: { lat: 50.00, lng: -85.00 },
  });
  // Create an array of alphabetical characters used to label the markers.
   const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// load csv file and parse content
Papa.parse("https://lowylori.github.io/geom99lab1/clustering/ontarioparkslist.csv", {
	download: true,
	header: true,
	dynamicTyping: true,
	complete: function (result) {
		const locations = result.data.map(row => ({
			title: row.Name,
			lat: parseFloat(row.Latitude),
			lng: parseFloat(row.Longitude),
		}));
	console.log(locations);
	// create markers based on location
		const markers = locations.map((location, i) => {
			console.log('Creating Markers: location);
			return new google.maps.Marker({
				position: {lat: location.lat, lng: location.lng},
				label: labels[i % labels.length],
			});
		});
		console.log(markers);
   	// Add a marker clusterer to manage the markers.
   	new MarkerClusterer(map, markers, {
    	imagePath:
       "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
			});
		},
	});
}

