import { useMapEvents } from "react-leaflet";
import { HandleAddMarkerProps } from "./types";
import { useMarkers } from "../hooks/useMarkers";
import { icons } from "./icons";
import { Coords } from "../hooks/useMarkers/types";

export const HandleAddMarker = ({
	// setCoords,
	setCurrentMarker,
	setNewMarker,
	setPopup,
}: HandleAddMarkerProps) => {
	const { addMarkerPosition, setCoords } = useMarkers();

	useMapEvents({
		click(event) {
			const lat = event.latlng.lat;
			const lng = event.latlng.lng;
			setCoords({ lat, lng });

			addMarkerPosition({ lat, lng }).then((confirmed) => {
				if (confirmed) {
					setCurrentMarker(null);
					setNewMarker({
						comment: "",
						icon: icons[0],
						position: { lat, lng },
					});
					setPopup(true);
				} else {
					setCoords({} as Coords);
				}
			});
		},
	});

	return null;
};
