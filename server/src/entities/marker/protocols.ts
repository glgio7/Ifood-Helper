interface IMarkerIcon {
	iconUrl: string;
	label: string;
}

type IMarkerPosition = {
	lat: number;
	lng: number;
};

export interface IMarker {
	author: string;
	createdAt: string;
	icon: IMarkerIcon;
	position: IMarkerPosition;
	comment: string;
}
