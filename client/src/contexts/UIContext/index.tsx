import { createContext, useState } from "react";
import { IUIContext, UIProviderProps } from "./types";

export const UIContext = createContext<IUIContext>({} as IUIContext);

const UIProvider = ({ children }: UIProviderProps) => {
	const [openMenu, setOpenMenu] = useState<boolean>(false);
	const [loadingMarker, setLoadingMarker] = useState<boolean>(false);
	const [popup, setPopup] = useState<boolean>(false);

	const contextValue = {
		popup,
		setPopup,
		openMenu,
		setOpenMenu,
		loadingMarker,
		setLoadingMarker,
	};

	return (
		<UIContext.Provider value={contextValue}>{children}</UIContext.Provider>
	);
};

export default UIProvider;
