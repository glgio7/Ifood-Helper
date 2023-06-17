import "leaflet/dist/leaflet.css";
import * as S from "./styles";
import MarkerClusterGroup from "react-leaflet-cluster";
import { MapContainer, TileLayer } from "react-leaflet";
import { AddMarkerListener } from "../../utils/addMarkerListener";
import Loading from "../../components/Loading";
import Marker from "../../components/Marker";
import Popup from "../../components/Popup";
import { createCustomIcon } from "../../utils/addCustomIcon";
import { useMarkers } from "../../hooks/useMarkers";
import { IMarker } from "../../components/Marker/types";
import { useInterface } from "../../hooks/useInterface";
import LoadingNewMarker from "../../components/LoadingNewMarker";

const Home = () => {
	const { markers, currentLocation } = useMarkers();
	const { loadingNewMarker, markerPosition } = useInterface();

	return (
		<S.Home>
			{!currentLocation && <Loading />}
			{currentLocation && (
				<S.Container>
					<MapContainer
						center={currentLocation.position}
						zoom={50}
						className="leaftlet-container"
					>
						<TileLayer
							attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
							url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
						/>
						<MarkerClusterGroup chunkedLoading>
							{/* // Current Location Marker */}

							<Marker
								position={currentLocation.position}
								icon={createCustomIcon(currentLocation.icon)}
								key={Math.random() * 999999999999}
								marker={currentLocation}
							></Marker>

							{/* // Mapping markers from DB */}

							{markers.map((marker: IMarker) => {
								const customIcon = createCustomIcon(marker.icon);

								return (
									<Marker
										position={marker.position}
										icon={customIcon}
										key={Math.random() * 999999999999}
										marker={marker}
									></Marker>
								);
							})}
						</MarkerClusterGroup>

						{/* // Add Marker Listener */}
						<AddMarkerListener />
					</MapContainer>

					<Popup />

					{loadingNewMarker && <LoadingNewMarker position={markerPosition} />}
				</S.Container>
			)}
		</S.Home>
	);
};

export default Home;
