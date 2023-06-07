import "leaflet/dist/leaflet.css";
import * as S from "./styles";
import MarkerClusterGroup from "react-leaflet-cluster";
import { MapContainer, TileLayer } from "react-leaflet";
import { useEffect } from "react";
import { IMarker } from "./types";
import { icons } from "../../utils/icons";
import { HandleAddMarker } from "../../utils/addMarker";
import Loading from "../../components/Loading";
import Marker from "../../components/Marker";
import Popup from "../../components/Popup";
import { createCustomIcon } from "../../utils/addIcon";
import { useInterface } from "../../hooks/useInterface";
import { useMarkers } from "../../hooks/useMarkers";

const Home = () => {
	const { popup, setPopup } = useInterface();

	const {
		currentMarker,
		setCurrentMarker,
		markers,
		setMarkers,
		newMarker,
		setNewMarker,
		newCoords,
		setNewCoords,
	} = useMarkers();

	useEffect(() => {
		const { lat, lng } = newCoords;
		if (lat && lng) {
			const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat.toString()}&lon=${lng.toString()}`;

			fetch(url)
				.then((response) => response.json())
				.then((data) => {
					const address = data.display_name.split(",");
					const street = address[0];

					const confirmation = window.confirm(
						`Adicionar marcador em ${street}?`
					);

					if (confirmation) {
						setNewMarker({
							comment: "",
							icon: icons[0],
							position: { lat, lng },
						});
						setPopup(true);
					}
				})
				.catch((error) => {
					alert("Ocorreu um erro.");
					console.log("Ocorreu um erro:", error);
				});
		}
	}, [newCoords]);

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
							setCoords={setNewCoords}
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
