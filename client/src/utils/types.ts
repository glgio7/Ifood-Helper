import { IMarker } from "../hooks/useMarkers/types";

export type HandleAddMarkerProps = {
	setCurrentMarker: React.Dispatch<React.SetStateAction<IMarker | null>>;
	setNewMarker: React.Dispatch<React.SetStateAction<IMarker | null>>;
	setPopup: React.Dispatch<React.SetStateAction<boolean>>;
};

export interface MarkerIcon {
	iconUrl: string;
	name: string;
}
