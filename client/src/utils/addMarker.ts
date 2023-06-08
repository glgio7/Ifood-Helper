import { useMapEvents } from "react-leaflet";
import { useMarkers } from "../hooks/useMarkers";
import { icons } from "./icons";
import { Coords } from "../contexts/MarkersContext/types";
import { useInterface } from "../hooks/useInterface";

export const AddMarkerListener = () => {
	const { addMarkerPosition, setCoords, setCurrentMarker, setNewMarker } =
		useMarkers();

	const { setPopup, setLoadingMarker } = useInterface();

	useMapEvents({
		click(event) {
			const lat = event.latlng.lat;
			const lng = event.latlng.lng;
			setCoords({ lat, lng });

			addMarkerPosition({ lat, lng }).then((confirmed) => {
				setLoadingMarker(false);
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
