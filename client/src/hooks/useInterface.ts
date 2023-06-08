import { useCallback, useContext, useState } from "react";
import { UIContext } from "../contexts/UIContext";
import { IMarkerPosition } from "../components/LoadingMarker/types";

export const useInterface = () => {
	const [markerPosition, setMarkerPosition] = useState<IMarkerPosition | null>(
		null
	);
	const {
		popup,
		setPopup,
		openMenu,
		setOpenMenu,
		loadingMarker,
		setLoadingMarker,
	} = useContext(UIContext);

	const handleClick = useCallback(
		(event: React.MouseEvent<HTMLDivElement>) => {
			if (!popup) {
				const mouseX = event.clientX;
				const mouseY = event.clientY;
				setMarkerPosition({ x: mouseX, y: mouseY });
				setLoadingMarker(true);
			}
		},
		[popup]
	);

	return {
		popup,
		setPopup,
		openMenu,
		setOpenMenu,
		loadingMarker,
		setLoadingMarker,
		markerPosition,
		handleClick,
	};
};
