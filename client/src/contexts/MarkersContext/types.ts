import React from "react";
import { IMarker, IMinimalMarker } from "../../components/Marker/types";

export type Coords = { lat: number; lng: number };

export type RateMarkerProps = {
	position: Coords;
	action: string;
	author: string;
};

export interface IMarkersContext {
	markers: IMarker[];
	setMarkers: React.Dispatch<React.SetStateAction<IMarker[]>>;

	rateMarker(params: RateMarkerProps): void;
	addNewMarkerPosition: (coords: Coords) => Promise<boolean | undefined>;

	newMarker: IMinimalMarker | null;
	setNewMarker: React.Dispatch<React.SetStateAction<IMinimalMarker | null>>;

	currentLocation: IMinimalMarker | null;

	markerDetails: IMarker | null;
	setMarkerDetails: React.Dispatch<React.SetStateAction<IMarker | null>>;

	gpsTracking: boolean;
	setGpsTracking: React.Dispatch<React.SetStateAction<boolean>>;
}

export type MarkersProvidersProps = {
	children: React.ReactNode;
};
