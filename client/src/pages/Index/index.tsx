import "leaflet/dist/leaflet.css";
import * as S from "./styles";
import MarkerClusterGroup from "react-leaflet-cluster";
import { MapContainer, TileLayer } from "react-leaflet";
import { HandleAddMarker } from "../../utils/addMarker";
import Loading from "../../components/Loading";
import Marker from "../../components/Marker";
import Popup from "../../components/Popup";
import { createCustomIcon } from "../../utils/addIcon";
import { useInterface } from "../../hooks/useInterface";
import { useMarkers } from "../../hooks/useMarkers";
import { IMarker } from "../../hooks/useMarkers/types";

const Home = () => {
	const { popup, setPopup } = useInterface();

	const {
		currentMarker,
		setCurrentMarker,
		markers,
		setMarkers,
		newMarker,
		setNewMarker,
	} = useMarkers();

	return (
		<S.Home>
			{markers.length < 1 && <Loading />}
			{markers && markers.length >= 1 && (
				<S.Container>
					<MapContainer
						center={
							markers.find((marker) => marker.comment === "Você está aqui.")!
								.position
						}
						zoom={50}
						className="leaftlet-container"
						scrollWheelZoom={true}
					>
						<HandleAddMarker
							setNewMarker={setNewMarker}
							setPopup={setPopup}
							setCurrentMarker={setCurrentMarker}
						/>
						<TileLayer
							attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
							url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
						/>
						<MarkerClusterGroup chunkedLoading>
							{markers.map((marker: IMarker) => {
								const customIcon = createCustomIcon(marker.icon);

								return (
									<Marker
										position={marker.position}
										icon={customIcon}
										key={Math.random() * 999999999999}
										marker={marker}
										onClick={() => {
											setCurrentMarker(marker);
											setPopup(!popup);
										}}
									></Marker>
								);
							})}
						</MarkerClusterGroup>
					</MapContainer>
					<Popup
						popup={popup}
						setPopup={setPopup}
						currentMarker={currentMarker}
						newMarker={newMarker}
						setNewMarker={setNewMarker}
						setMarkers={setMarkers}
					/>
				</S.Container>
			)}
		</S.Home>
	);
};

export default Home;
