import { useMapEvents } from "react-leaflet";
import { useMarkers } from "../hooks/useMarkers";
import { icons } from "../constants/markersIcons";
import { useInterface } from "../hooks/useInterface";
import { currentDate } from "./getCurrentDate";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

export const AddMarkerListener = () => {
	const { addNewMarkerPosition, setMarkerDetails, setNewMarker } = useMarkers();

	const { authenticated } = useAuth();

	const navigate = useNavigate();

	const { setPopup, setLoadingNewMarker, handleLoadingMarker } = useInterface();

	useMapEvents({
		click(event) {
			if (!authenticated) {
				navigate("/auth");
				return;
			}

			const lat = event.latlng.lat;
			const lng = event.latlng.lng;

			handleLoadingMarker(
				event.originalEvent.clientX,
				event.originalEvent.clientY
			);

			addNewMarkerPosition({ lat, lng }).then((confirmed) => {
				setLoadingNewMarker(false);

				if (confirmed) {
					setNewMarker({
						comment: "",
						icon: icons[0],
						position: { lat: lat, lng: lng },
						author: "admin",
						createdAt: currentDate,
					});

					setMarkerDetails(null);
					setPopup("newmarker");
				}
			});
		},
	});

	return null;
};
