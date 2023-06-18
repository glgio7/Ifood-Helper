import { createContext, useState } from "react";
import { IInterfaceContext, InterfaceProviderProps } from "./types";
import { INewMarkerPosition } from "../../components/LoadingNewMarker/types";

export const InterfaceContext = createContext<IInterfaceContext>(
	{} as IInterfaceContext
);

const InterfaceProvider = ({ children }: InterfaceProviderProps) => {
	const [markerPosition, setMarkerPosition] =
		useState<INewMarkerPosition | null>(null);
	const [openMenu, setOpenMenu] = useState<boolean>(false);
	const [loadingNewMarker, setLoadingNewMarker] = useState<boolean>(false);
	const [popup, setPopup] = useState<string>("");

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
		<InterfaceContext.Provider value={contextValue}>
			{children}
		</InterfaceContext.Provider>
	);
};

export default InterfaceProvider;
