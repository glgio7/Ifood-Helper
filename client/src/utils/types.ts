import { Coords, IMarker } from "../pages/Index/types";

export type HandleAddMarkerProps = {
	setCoords: React.Dispatch<React.SetStateAction<Coords>>;
	setCurrentMarker: React.Dispatch<React.SetStateAction<IMarker | null>>;
};

export interface MarkerIcon {
	iconUrl: string;
	name: string;
}
