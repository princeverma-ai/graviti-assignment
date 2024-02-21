import React, { useEffect } from "react";

function MapComponent() {
	useEffect(() => {
		async function initMap() {
			// The location of Uluru
			const position = { lat: 31.400304, lng: 75.539492 };
			// Request needed libraries.
			//@ts-ignore
			const { Map } = await google.maps.importLibrary("maps");
			const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

			// The map, centered at Uluru
			let map = new Map(document.getElementById("map"), {
				zoom: 4,
				center: position,
				mapId: "DEMO_MAP_ID",
			});

			// The marker, positioned at Uluru
			const marker = new AdvancedMarkerElement({
				map: map,
				position: position,
				title: "Uluru",
			});
		}

		initMap();
	}, []);

	return <div id="map" style={{ width: "100%", height: "420px" }}></div>;
}

export default MapComponent;
