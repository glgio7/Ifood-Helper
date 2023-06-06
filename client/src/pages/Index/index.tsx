import {
	MapContainer,
	Marker,
	Popup,
	TileLayer,
	useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import * as S from "./styles";
import { useEffect, useState } from "react";
import Loading from "../../components/Loading";
import { Icon } from "leaflet";
import { HandleClickMapProps, IMarker } from "./types";

//Icons

const icons: Icon[] = [
	new Icon({ iconUrl: "/icons/current-icon.svg", iconSize: [36, 36] }),
];

// Events

const HandleClickMap = ({ markers, setMarkers }: HandleClickMapProps) => {
	const currentIcon = new Icon({
		iconUrl: icons[0].options.iconUrl,
		iconSize: [36, 36],
	});

	useMapEvents({
		click(e) {
			const addMarker = window.confirm("Adicionar marcador?");

			if (addMarker) {
				const lat = e.latlng.lat;
				const lng = e.latlng.lng;

				setMarkers((prevMarkers) => {
					return [
						...prevMarkers,
						{
							icon: currentIcon,
							comment: `Localização. ${markers.length + 1}`,
							position: [lat, lng],
						},
					];
				});
			}
		},
	});

	return null;
};

const Home = () => {
	const [markers, setMarkers] = useState<IMarker[]>([]);
	const [currentLocation, setCurrentLocation] = useState<IMarker>(
		{} as IMarker
	);

	useEffect(() => {
		const currentIcon = icons.find(
			(icon) => icon.options.iconUrl === "/icons/current-icon.svg"
		);

		navigator.geolocation.getCurrentPosition(function (position) {
			const lat = position.coords.latitude;
			const lng = position.coords.longitude;
			setCurrentLocation({
				icon: currentIcon!,
				comment: "Você está aqui.",
				position: [lat, lng],
			});

			if (
				markers.filter((marker) => marker.comment === "Você está aqui.")
					.length < 1
			) {
				setMarkers([
					{
						icon: currentIcon!,
						comment: "Você está aqui.",
						position: [lat, lng],
					},
				]);
			}
		});
	}, []);

	return (
		<S.Home>
			{!currentLocation.position && <Loading />}
			{currentLocation.position !== undefined && (
				<S.Container>
					<MapContainer
						center={currentLocation.position}
						zoom={13}
						className="leaftlet-container"
					>
						<HandleClickMap markers={markers} setMarkers={setMarkers} />
						<TileLayer
							attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
							url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
						/>
						{markers.map((marker) => (
							<Marker
								position={marker.position}
								icon={marker.icon}
								key={marker.position.toString()}
							>
								<Popup className="custom-popup">{marker.comment}</Popup>
							</Marker>
						))}
					</MapContainer>
					<S.CustomPopup></S.CustomPopup>
				</S.Container>
			)}
		</S.Home>
	);
};

export default Home;
