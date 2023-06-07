import { MarkerProps } from "react-leaflet";
import { IMarker } from "../../hooks/useMarkers/types";

export interface MyMarkerProps extends MarkerProps {
	onClick?: () => void;
	marker: IMarker;
}
