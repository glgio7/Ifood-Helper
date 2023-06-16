import { useCallback, useContext } from "react";
import { InterfaceContext } from "../contexts/InterfaceContext";

export const useInterface = () => {
	const {
		popup,
		setPopup,
		openMenu,
		setOpenMenu,
		loadingNewMarker,
		setLoadingNewMarker,
		markerPosition,
		setMarkerPosition,
	} = useContext(InterfaceContext);

	const handleLoadingMarker = useCallback(
		(mouseX: number, mouseY: number) => {
			if (!popup) {
				setMarkerPosition({ x: mouseX, y: mouseY });
				setLoadingNewMarker(true);
			}
		},
		[popup]
	);

	return {
		popup,
		setPopup,
		openMenu,
		setOpenMenu,
		loadingNewMarker,
		setLoadingNewMarker,
		markerPosition,
		handleLoadingMarker,
	};
};
