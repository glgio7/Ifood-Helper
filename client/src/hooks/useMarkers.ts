import { useContext } from "react";
import { MarkersContext } from "../contexts/MarkersContext";

export const useMarkers = () => {
	const {
		addMarkerPosition,
		markers,
		currentLocation,
		setMarkers,
		currentMarker,
		setCurrentMarker,
		newMarker,
		setNewMarker,
		coords,
		setCoords,
	} = useContext(MarkersContext);

	return {
		addMarkerPosition,
		markers,
		currentLocation,
		setMarkers,
		currentMarker,
		setCurrentMarker,
		newMarker,
		setNewMarker,
		coords,
		setCoords,
	};
};
