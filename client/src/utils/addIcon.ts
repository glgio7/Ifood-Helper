import { Icon } from "leaflet";
import { IMarkerIcon } from "./types";

export const createCustomIcon = (icon: IMarkerIcon) => {
	return new Icon({
		iconUrl: icon.iconUrl,
		name: icon.name,
		iconSize: [36, 36],
	});
};
