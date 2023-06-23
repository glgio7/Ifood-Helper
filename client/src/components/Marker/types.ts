import { MarkerProps } from "react-leaflet";
import { Coords } from "../../contexts/MarkersContext/types";
import { IMarkerIcon } from "../../constants/types";

export interface IMinimalMarker {
	author: string;
	createdAt: string;
	icon: IMarkerIcon;
	position: Coords;
	comment: string;
}

export interface IMarker extends IMinimalMarker {
	votes: number;
	upvoters: string[];
	downvoters: string[];
}

export interface MyMarkerProps extends MarkerProps {
	marker: IMarker;
}
