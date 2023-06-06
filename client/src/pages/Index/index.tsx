import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import * as S from "./styles";
import { useEffect, useState } from "react";
import Loading from "../../components/Loading";
import { Icon } from "leaflet";
import currentIconLoc from "../../assets/current-loc.svg";

const Home = () => {
	const [lat, setLat] = useState<number | undefined>();
	const [long, setLong] = useState<number | undefined>();

	const customIcon = new Icon({
		iconUrl: currentIconLoc,
		iconSize: [36, 36],
	});

	useEffect(() => {
		navigator.geolocation.getCurrentPosition(function (position) {
			setLat(position.coords.latitude);
			setLong(position.coords.longitude);
		});
	}, []);

	return (
		<S.Home>
			{(!lat || !long) && <Loading />}
			{lat && long !== undefined && (
				<MapContainer
					center={[lat, long]}
					zoom={13}
					className="leaftlet-container"
				>
					<TileLayer
						attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
						url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
					/>
					<Marker position={[lat, long]} icon={customIcon}>
						<Popup>You're here.</Popup>
					</Marker>
				</MapContainer>
			)}
		</S.Home>
	);
};

export default Home;
