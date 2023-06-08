import "leaflet/dist/leaflet.css";
import * as S from "./styles";
import MarkerClusterGroup from "react-leaflet-cluster";
import { MapContainer, TileLayer } from "react-leaflet";
import { AddMarkerListener } from "../../utils/addMarker";
import Loading from "../../components/Loading";
import Marker from "../../components/Marker";
import Popup from "../../components/Popup";
import { createCustomIcon } from "../../utils/addIcon";
import { useMarkers } from "../../hooks/useMarkers";
import { IMarker } from "../../components/Marker/types";
import { useInterface } from "../../hooks/useInterface";
import { useRef } from "react";
import LoadingMarker from "../../components/LoadingMarker";

const Home = () => {
	const { markers } = useMarkers();
	const { loadingMarker, markerPosition, handleClick } = useInterface();
	const containerRef = useRef<HTMLDivElement>(null);

	return (
		<S.Home>
			{markers.length < 1 && <Loading />}
			{markers && markers.length >= 1 && (
				<S.Container ref={containerRef} onClick={handleClick}>
					<MapContainer
						center={
							markers.find((marker) => marker.comment === "Você está aqui.")!
								.position
						}
						zoom={50}
						className="leaftlet-container"
					>
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
									></Marker>
								);
							})}
						</MarkerClusterGroup>
						<AddMarkerListener />
					</MapContainer>
					<Popup />
					{loadingMarker && <LoadingMarker position={markerPosition} />}
				</S.Container>
			)}
		</S.Home>
	);
};

export default Home;
