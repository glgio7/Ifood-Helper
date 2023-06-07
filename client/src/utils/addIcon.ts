import { Icon } from "leaflet";
import { MarkerIcon } from "./types";

export const createCustomIcon = (icon: MarkerIcon) => {
	return new Icon({
		iconUrl: icon.iconUrl,
		name: icon.name,
		iconSize: [36, 36],
	});
};
