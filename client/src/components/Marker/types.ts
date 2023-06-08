import { MarkerProps } from "react-leaflet";
import { IMarkerIcon } from "../../utils/types";
import { Coords } from "../../contexts/MarkersContext/types";

export interface IMarker {
	icon: IMarkerIcon;
	position: Coords;
	comment: string;
}

export interface MyMarkerProps extends MarkerProps {
	marker: IMarker;
}
