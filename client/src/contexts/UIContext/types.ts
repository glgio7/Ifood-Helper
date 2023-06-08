import React, { SetStateAction } from "react";

export interface IUIContext {
	popup: boolean;
	setPopup: React.Dispatch<SetStateAction<boolean>>;
	openMenu: boolean;
	setOpenMenu: React.Dispatch<SetStateAction<boolean>>;
	loadingMarker: boolean;
	setLoadingMarker: React.Dispatch<SetStateAction<boolean>>;
}

export type UIProviderProps = {
	children: React.ReactNode;
};
