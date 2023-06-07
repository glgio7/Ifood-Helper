// Events

import { useMapEvents } from "react-leaflet";
import { HandleAddMarkerProps } from "./types";

export const HandleAddMarker = ({ setCoords }: HandleAddMarkerProps) => {
	useMapEvents({
		click(event) {
			const lat = event.latlng.lat;
			const lng = event.latlng.lng;

			setCoords({ lat, lng });
		},
	});

	return null;
};
