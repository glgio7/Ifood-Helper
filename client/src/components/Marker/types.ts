import { MarkerProps } from "react-leaflet";
import { Coords } from "../../contexts/MarkersContext/types";
import { IMarkerIcon } from "../../constants/types";

export interface IMarker {
	author: string;
	createdAt: string;
	icon: IMarkerIcon;
	position: Coords;
	comment: string;
}

export interface MyMarkerProps extends MarkerProps {
	marker: IMarker;
}
