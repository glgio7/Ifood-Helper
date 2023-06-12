import React, { SetStateAction } from "react";
import { INewMarkerPosition } from "../../components/LoadingNewMarker/types";

export interface IUIContext {
	markerPosition: INewMarkerPosition | null;
	setMarkerPosition: React.Dispatch<SetStateAction<INewMarkerPosition | null>>;

	popup: boolean;
	setPopup: React.Dispatch<SetStateAction<boolean>>;

	openMenu: boolean;
	setOpenMenu: React.Dispatch<SetStateAction<boolean>>;

	loadingNewMarker: boolean;
	setLoadingNewMarker: React.Dispatch<SetStateAction<boolean>>;
}

export type UIProviderProps = {
	children: React.ReactNode;
};
