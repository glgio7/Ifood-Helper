import { MarkerProps } from "react-leaflet";

export interface MyMarkerProps extends MarkerProps {
	onClick?: () => void;
}
