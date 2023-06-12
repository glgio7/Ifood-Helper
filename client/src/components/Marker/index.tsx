import { Marker as DefaultMarker } from "react-leaflet";
import { MyMarkerProps } from "./types";
import { useMarkers } from "../../hooks/useMarkers";
import { useInterface } from "../../hooks/useInterface";

const Marker = ({ marker, ...otherProps }: MyMarkerProps) => {
	const { setMarkerDetails } = useMarkers();
	const { setPopup } = useInterface();

	const handleMarkerClick = () => {
		setPopup(true);
		setMarkerDetails(marker);
	};

	return (
		<DefaultMarker
			{...otherProps}
			eventHandlers={{ click: handleMarkerClick }}
		/>
	);
};

export default Marker;
