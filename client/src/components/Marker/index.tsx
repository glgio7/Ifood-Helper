import { Marker as DefaultMarker } from "react-leaflet";
import { MyMarkerProps } from "./types";
import { useMarkers } from "../../hooks/useMarkers";
import { useInterface } from "../../hooks/useInterface";

const Marker = ({ marker, ...otherProps }: MyMarkerProps) => {
	const { setCurrentMarker } = useMarkers();
	const { setPopup } = useInterface();

	const handleMarkerClick = () => {
		setPopup(true);
		setCurrentMarker(marker);
	};

	return (
		<DefaultMarker
			{...otherProps}
			eventHandlers={{ click: handleMarkerClick }}
		/>
	);
};

export default Marker;
