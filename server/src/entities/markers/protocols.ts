interface IMarkerIcon {
	iconUrl: string;
	label: string;
}

type IMarkerPosition = {
	lat: number;
	lng: number;
};

export interface IMarker {
	icon: IMarkerIcon;
	position: IMarkerPosition;
	author: string;
	comment: string;
}
