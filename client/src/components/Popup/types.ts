import React from "react";
import { IMarker } from "../../pages/Index/types";

export type PopupProps = {
	popup: boolean;
	setPopup: React.Dispatch<React.SetStateAction<boolean>>;
	currentMarker: IMarker | null;
	newMarker: IMarker | null;
	setNewMarker: React.Dispatch<React.SetStateAction<IMarker | null>>;
	setMarkers: React.Dispatch<React.SetStateAction<IMarker[]>>;
};
