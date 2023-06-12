import React from "react";
import { IMarker } from "../../components/Marker/types";

export type Coords = { lat: number; lng: number };

export interface IMarkersContext {
	markers: IMarker[];
	currentLocation: IMarker | null;
	setMarkers: React.Dispatch<React.SetStateAction<IMarker[]>>;
	currentMarker: IMarker | null;
	setCurrentMarker: React.Dispatch<React.SetStateAction<IMarker | null>>;
	newMarker: IMarker | null;
	setNewMarker: React.Dispatch<React.SetStateAction<IMarker | null>>;
	coords: Coords;
	setCoords: React.Dispatch<React.SetStateAction<Coords>>;
	addMarkerPosition: (coords: Coords) => Promise<boolean | undefined>;
}

export type MarkersProvidersProps = {
	children: React.ReactNode;
};
