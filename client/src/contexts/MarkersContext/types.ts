import React from "react";
import { IMarker } from "../../components/Marker/types";

export type Coords = { lat: number; lng: number };

export interface IMarkersContext {
	markers: IMarker[];
	setMarkers: React.Dispatch<React.SetStateAction<IMarker[]>>;
	addNewMarkerPosition: (coords: Coords) => Promise<boolean | undefined>;
	newMarker: IMarker | null;
	setNewMarker: React.Dispatch<React.SetStateAction<IMarker | null>>;
	currentLocation: IMarker | null;
	markerDetails: IMarker | null;
	setMarkerDetails: React.Dispatch<React.SetStateAction<IMarker | null>>;
}

export type MarkersProvidersProps = {
	children: React.ReactNode;
};
