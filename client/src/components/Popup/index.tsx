import * as S from "./styles";
import { RiCloseFill } from "react-icons/ri";
import { useMarkers } from "../../hooks/useMarkers";
import { useInterface } from "../../hooks/useInterface";
import { ComponentType } from "react";
import NewMarkerComponent from "../NewMarker";
import { MarkerDetailsComponent } from "../MarkerDetails";

const Popup = () => {
	const { setNewMarker } = useMarkers();

	const { popup, setPopup } = useInterface();

	const content: {
		[key: string]: ComponentType;
	} = {
		markerdetails: MarkerDetailsComponent,
		newmarker: NewMarkerComponent,
	};

	const PopupContentComponent = content[popup];

	return (
		<S.CustomPopup active={popup}>
			<RiCloseFill
				className="close-btn"
				onClick={() => {
					setNewMarker(null);
					setPopup("");
				}}
			/>
			{PopupContentComponent && <PopupContentComponent />}
		</S.CustomPopup>
	);
};

export default Popup;
