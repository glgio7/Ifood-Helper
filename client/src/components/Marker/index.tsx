import { Marker as DefaultMarker } from "react-leaflet";
import { MyMarkerProps } from "./types";

const Marker = ({ onClick, ...otherProps }: MyMarkerProps) => {
	const handleMarkerClick = () => {
		if (onClick) {
			onClick();
		}
	};

	return (
		<DefaultMarker
			{...otherProps}
			eventHandlers={{ click: handleMarkerClick }}
		/>
	);
};

export default Marker;
