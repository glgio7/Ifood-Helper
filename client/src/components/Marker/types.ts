import { MarkerProps } from "react-leaflet";
import { IMarker } from "../../pages/Index/types";

export interface MyMarkerProps extends MarkerProps {
	onClick?: () => void;
	marker: IMarker;
}
