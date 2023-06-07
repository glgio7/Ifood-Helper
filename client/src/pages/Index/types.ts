import { MarkerIcon } from "../../utils/types";

// export type Coords = LatLngLiteral;
export type Coords = { lat: number; lng: number };

export interface IMarker {
	icon: MarkerIcon;
	position: Coords;
	comment: string;
}

export type HandleClickMapProps = {
	markers: IMarker[];
	setMarkers: React.Dispatch<React.SetStateAction<IMarker[]>>;
};
