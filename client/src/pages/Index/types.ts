import { Icon, LatLngExpression } from "leaflet";

export interface IMarker {
	icon: Icon;
	position: LatLngExpression;
	comment: string;
}

export type HandleClickMapProps = {
	markers: IMarker[];
	setMarkers: React.Dispatch<React.SetStateAction<IMarker[]>>;
};
