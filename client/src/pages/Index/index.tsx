import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import * as S from "./styles";
import { useState } from "react";

const Home = () => {
	const [lat, setLat] = useState<number | undefined>(-23.5489);
	const [long, setLong] = useState<number | undefined>(-46.6388);
	return (
		<S.Home>
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
					<Marker position={[lat, long]}>
						<Popup>You're here.</Popup>
					</Marker>
				</MapContainer>
			)}
		</S.Home>
	);
};

export default Home;
