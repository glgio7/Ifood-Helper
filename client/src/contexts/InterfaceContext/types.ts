import React, { SetStateAction } from "react";
import { INewMarkerPosition } from "../../components/LoadingNewMarker/types";

export interface IInterfaceContext {
	markerPosition: INewMarkerPosition | null;
	setMarkerPosition: React.Dispatch<SetStateAction<INewMarkerPosition | null>>;

	popup: string;
	setPopup: React.Dispatch<SetStateAction<string>>;

	openMenu: boolean;
	setOpenMenu: React.Dispatch<SetStateAction<boolean>>;

	loadingNewMarker: boolean;
	setLoadingNewMarker: React.Dispatch<SetStateAction<boolean>>;
}

export type InterfaceProviderProps = {
	children: React.ReactNode;
};
