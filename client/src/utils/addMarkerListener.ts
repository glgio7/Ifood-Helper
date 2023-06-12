import { useMapEvents } from "react-leaflet";
import { useMarkers } from "../hooks/useMarkers";
import { icons } from "./icons";
import { useInterface } from "../hooks/useInterface";

export const AddMarkerListener = () => {
	const { addNewMarkerPosition, setMarkerDetails, setNewMarker } = useMarkers();

	const { setPopup, setLoadingNewMarker, handleLoadingMarker } = useInterface();

	useMapEvents({
		click(event) {
			const lat = event.latlng.lat;
			const lng = event.latlng.lng;

			handleLoadingMarker(
				event.originalEvent.clientX,
				event.originalEvent.clientY
			);

			addNewMarkerPosition({ lat, lng }).then((confirmed) => {
				if (confirmed) {
					setNewMarker({
						comment: "",
						icon: icons[0],
						position: { lat: lat, lng: lng },
					});

					setMarkerDetails(null);
					setPopup(true);
				}
				setLoadingNewMarker(false);
			});
		},
	});

	return null;
};
