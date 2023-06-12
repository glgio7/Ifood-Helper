import { useContext } from "react";
import { MarkersContext } from "../contexts/MarkersContext";

export const useMarkers = () => {
	const {
		addNewMarkerPosition,
		markers,
		currentLocation,
		setMarkers,
		markerDetails,
		setMarkerDetails,
		newMarker,
		setNewMarker,
	} = useContext(MarkersContext);

	return {
		addNewMarkerPosition,
		markers,
		currentLocation,
		setMarkers,
		markerDetails,
		setMarkerDetails,
		newMarker,
		setNewMarker,
	};
};
