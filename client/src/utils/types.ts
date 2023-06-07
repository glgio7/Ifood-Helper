import { Coords } from "../pages/Index/types";

export type HandleAddMarkerProps = {
	setCoords: React.Dispatch<React.SetStateAction<Coords>>;
};

export interface MarkerIcon {
	iconUrl: string;
	name: string;
}
