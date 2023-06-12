import { createContext, useState } from "react";
import { IUIContext, UIProviderProps } from "./types";
import { INewMarkerPosition } from "../../components/LoadingNewMarker/types";

export const UIContext = createContext<IUIContext>({} as IUIContext);

const UIProvider = ({ children }: UIProviderProps) => {
	const [markerPosition, setMarkerPosition] =
		useState<INewMarkerPosition | null>(null);
	const [openMenu, setOpenMenu] = useState<boolean>(false);
	const [loadingNewMarker, setLoadingNewMarker] = useState<boolean>(false);
	const [popup, setPopup] = useState<boolean>(false);

	const contextValue = {
		popup,
		setPopup,
		openMenu,
		setOpenMenu,
		loadingNewMarker,
		setLoadingNewMarker,
		markerPosition,
		setMarkerPosition,
	};

	return (
		<UIContext.Provider value={contextValue}>{children}</UIContext.Provider>
	);
};

export default UIProvider;
